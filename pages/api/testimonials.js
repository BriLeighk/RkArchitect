import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.NEXT_PUBLIC_FIREBASE_TYPE,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
      auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI,
      token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_X509_CERT_URL,
    }),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, location, text, rating } = req.body;
    const newTestimonial = { name, location, text, rating };

    try {
      const docRef = await addDoc(collection(db, 'testimonials'), newTestimonial);
      res.status(201).json({ id: docRef.id, ...newTestimonial });
    } catch (e) {
      res.status(500).json({ message: 'Failed to add testimonial', error: e.message });
    }
  } else if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonials = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(testimonials);
    } catch (e) {
      res.status(500).json({ message: 'Failed to fetch testimonials', error: e.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}