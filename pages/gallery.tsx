import React from "react";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const GalleryPage: React.FC = () => {
  const images = [
    "/images/b6.png",
    "/images/b2.png",
    "/images/b3.png",
    "/images/bunkie_int2.jpg",
    "/images/b4.png",
    "/images/b5.png",
    "/images/b7.png",
    "/images/b8.png",
    "/images/b1.png",
  ];

  return (
    <section className=" pt-16 md:pt-24 pb-10 other-bg ">
      <div className="max-w-7xl xl:w-auto sm:w-11/12 mx-auto my-12 ">
        <div className="footer-text text-gray-600 px-5 text-gray-600 py-3 border-l-4 border-amber-500 ml-5 sm:ml-0 h-fixed my-5">
          <h1
            id="footer-header"
            className=" text-9xl lg:text-4xl font-semibold py-2"
          >
            Image Gallery
          </h1>
          <p className="italic"> More images coming soon...</p>
        </div>
        <div className="lg:grid grid-cols-7 xl:gap-8 md:gap-5">
          <div className="self-center col-span-3 lg:mb-32 mb-0 sm:mx-2">
            <p className="footer-text xl:text-3xl lg:text-9xl md:text-2xl text-xl font-bold lg:text-left text-center xl:mb-5 md:mb-3 mb-5 mx-5 md:mx-0 ">
              Are you ready to turn your construction vision into a remarkable
              reality?
            </p>
            <p className="footer-text text-md lg:text-left text-center xl:leading-8 md:leading-7 pb-0 md:pb-3 mx-4 md:mx-0">
              Reach out to us today for a friendly consultation or a free quote,
              and let us demonstrate the genuine care and expertise we bring to
              every construction and locating project.
            </p>
            <div className="b mx-auto lg:mx-0 h-16 w-80 flex justify-center items-center mt-3 ">
              <div className="i lg:h-16 lg:w-52 w-44 h-12 bg-gradient-to-br from-amber-400 to-amber-600 items-center rounded-lg shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <a className="lg:text-md text-sm text-center text-white font-medium z-10 pointer-events-none flex">
                <p> Contact Us TODAY</p>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="self-center ml-2"
                />{" "}
              </a>
            </div>
          </div>
          <div className="col-span-4 lg:mt-0 mt-10 lg:w-auto md:w-4/5 w-full px-1 mx-auto">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
