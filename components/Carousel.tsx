import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickDot = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousIndex);
  };

  return (
    <div className="w-auto mx-auto relative overflow-hidden">
      <div className="flex justify-between items-center">
        <button
          className="p-1  rounded-full bg-gray-300 hover:bg-gray-200 mr-2  flex hover:drop-shadow-md"
          onClick={handlePreviousImage}
        >
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className="self-center mx-auto w-5 h-5 xl:w-8 xl:h-8 lg:m-1"
          />{" "}
        </button>
        <div className="carousel-image-container relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`carousel-image lg:drop-shadow-xl drop-shadow-md ${
                index === currentImageIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <button
          className="p-1  rounded-full bg-gray-300 hover:bg-gray-200 hover:drop-shadow-md ml-2  flex"
          onClick={handleNextImage}
        >
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="self-center mx-auto w-5 h-5 xl:w-8 xl:h-8 lg:m-1"
          />{" "}
        </button>
      </div>

      <div className="absolute top-3 left-0 w-full flex justify-center space-x-2 mt-2 drop-shadow-sm">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-3  ${
              index === currentImageIndex ? "bg-blue-500" : "bg-sky-200"
            }`}
            style={{
              transition: "width 0.3s",
              width: index === currentImageIndex ? "2rem" : "1rem",
            }}
            onClick={() => handleClickDot(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
