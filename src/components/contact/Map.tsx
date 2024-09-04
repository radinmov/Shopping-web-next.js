import React from 'react';

const Map: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
    <div className="h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.897403422444!2d90.39945211498192!3d23.750876294589215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89fba77f1ff%3A0xa803e94d62ab5b76!2s111%20Bijoy%20Sarani%2C%20Dhaka%201515%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1635583826751!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
    <div className="mt-4">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=111+Bijoy+sarani,+Dhaka,+Bangladesh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Open in Google Maps
      </a>
    </div>
  </div>
);

export default Map;
