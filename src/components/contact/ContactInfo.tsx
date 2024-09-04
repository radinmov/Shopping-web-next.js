import React from 'react';

const ContactInfo: React.FC = () => (
  <div className="w-full md:w-1/2 p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4">Email: contact@example.com</p>
    <p className="mb-4">Phone: (123) 456-7890</p>
    <p className="mb-4">Address: 123 Main St, Seattle, WA 98101</p>
    <p className="mb-4">Follow us on social media:</p>
    <ul>
      <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a></li>
      <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Twitter</a></li>
      <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Instagram</a></li>
    </ul>
  </div>
);

export default ContactInfo;
