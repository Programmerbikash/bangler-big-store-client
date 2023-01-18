import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner2 = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div className="image1 h-80">
            <h3 className="text-3xl font-bold text-center">Images</h3>
          </div>
        </div>
        <div className="each-slide">
          <div className="image2 h-80">
            <h3 className="text-3xl font-bold text-center">Images</h3>
          </div>
        </div>
        <div className="each-slide">
          <div className="image3 h-80">
            <h3 className="text-3xl font-bold text-center">Images</h3>
          </div>
        </div>
        <div className="each-slide">
          <div className="image4 h-full">
            <h3 className="text-3xl font-bold text-center">Images</h3>
          </div>
        </div>
        {/* {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}  */}
      </Slide>
    </div>
  );
};

export default Banner2;
