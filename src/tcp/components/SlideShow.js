import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


const SlideShow = ({ images }) => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {const intervalId = setInterval(() => {setCurrentImageIndex((currentImageIndex + 1) % images.length);}, 3000);

  return () => clearInterval(intervalId);}, [currentImageIndex, images.length]);
  const handlePreviousClick = () => {setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);};

  const handleNextClick = () => {setCurrentImageIndex((currentImageIndex + 1) % images.length);};

  return (
    <div className="slideshow">
      <div style={{display:"inline"}}>
      <button className="slideshow-button" onClick={handlePreviousClick}>
      <a href="#" id="prev">prev</a>
        {/* <FiChevronLeft /> */}
      </button> <img src={images[currentImageIndex]} alt="Slideshow" />
      <button className="slideshow-button" onClick={handleNextClick}>
        {/* <FiChevronRight /> */}
        <a href="#" id="next">next</a>
      </button>        
      </div>
      </div>
      );
    };

  export default SlideShow;

// import React from "react";

// import { Slide, Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
//   }
  
//   const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px',
//   }
//   const fadeImages = [
//     {
//       url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//       caption: 'First Slide'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//       caption: 'Second Slide'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//       caption: 'Third Slide'
//     },
//   ];
  
//   const SlideShow = () => {
//     return (
//       <div className="slide-container" style={{height:400,width:800,marginLeft:"20%"}}>
//         <Fade>
//           {fadeImages.map((fadeImage, index) => (
//             <div key={index}>
//               <img src={fadeImage.url} />
//               <h2>{fadeImage.caption}</h2>
//             </div>
//           ))}
//         </Fade>
//       </div>
//     )
//   }

//   export default SlideShow;