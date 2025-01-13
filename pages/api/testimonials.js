import { adminDb } from '../../firebaseAdmin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, location, text, rating } = req.body;
    const newTestimonial = { name, location, text, rating };

    try {
      const docRef = await adminDb.collection('testimonials').add(newTestimonial);
      res.status(201).json({ id: docRef.id, ...newTestimonial });
    } catch (e) {
      res.status(500).json({ message: 'Failed to add testimonial', error: e.message });
    }
  } else if (req.method === 'GET') {
    try {
      const snapshot = await adminDb.collection('testimonials').get();
      const testimonials = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(testimonials);
    } catch (e) {
      res.status(500).json({ message: 'Failed to fetch testimonials', error: e.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}