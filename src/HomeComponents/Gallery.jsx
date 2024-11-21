import React from 'react';

import "./Gallery.css"; // Import the CSS file for styling
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';

const Gallery = () => {
  const images = [
    { id: 1, src: `${gallery6}`, alt: "Image 1" },
    { id: 2, src: `${gallery1}`, alt: "Image 2" },
    { id: 3, src: `${gallery2}`, alt: "Image 3" },
    { id: 4, src: `${gallery3}`, alt: "Image 4" },
    { id: 5, src: `${gallery4}`, alt: "Image 5" },
    { id: 6, src: `${gallery5}`, alt: "Image 6" },
    { id: 7, src: `${gallery7}`, alt: "Image 7" },
    { id: 8, src: `${gallery8}`, alt: "Image 8" },
  ];

  return (
    <>
      <script>
        AOS.init();
      </script>
      <div>
        <h1 className='font-bold text-5xl text-blue-950 text-center my-6'>Our Gallery</h1>
      </div>
      <div className="gallery-container grid">
        {images.map((image) => (
          <div  className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

    </>
  );
};

export default Gallery;