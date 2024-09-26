import fs from 'fs';
import path from 'path';

const testimonialsFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, location, text, rating } = req.body;
    const newTestimonial = { name, location, text, rating };

    // Read the existing testimonials
    const fileContents = fs.readFileSync(testimonialsFilePath, 'utf8');
    const testimonials = JSON.parse(fileContents);

    // Add the new testimonial
    testimonials.push(newTestimonial);

    // Write the updated testimonials back to the file
    fs.writeFileSync(testimonialsFilePath, JSON.stringify(testimonials, null, 2));

    res.status(201).json(newTestimonial);
  } else if (req.method === 'GET') {
    // Read the existing testimonials
    const fileContents = fs.readFileSync(testimonialsFilePath, 'utf8');
    const testimonials = JSON.parse(fileContents);

    res.status(200).json(testimonials);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
