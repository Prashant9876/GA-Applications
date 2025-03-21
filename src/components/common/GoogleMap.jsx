
import React from 'react';

const Googlemap = () => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps?q=29.134835,75.720347&hl=es;z=14&output=embed" width="600"
        height="300"
        allowFullScreen=""
        loading="lazy"
        className="w-full md:h-[350px] lg:h-[400px]"
      ></iframe>
    </div>
  );
};

export default Googlemap;