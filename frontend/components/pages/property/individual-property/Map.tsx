import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="mt-14 space-y-6">
      <h4 className="font-bold text-secondary text-2xl">
        Your Neighborhood Map
      </h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9695388205746!2d91.90752037452522!3d24.899020643715026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375053561c35e1b9%3A0xfcb25e7dc016d7a3!2sMajortilla%20Fish-Meat%20%26%20Vegetable%20Market!5e0!3m2!1sen!2sbd!4v1691384711398!5m2!1sen!2sbd"
        width={"100%"}
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;