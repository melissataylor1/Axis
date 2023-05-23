"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faAngleRight,
  faEye,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

export default function Features() {
  return (
    <section className="relative ">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:w-auto md:w-11/12 sm:w-5/6 md:pb-16">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12">
            <h2 className="h2 mb-4">Precision and Quality in Every Project.</h2>
            <p className="xl:text-xl md:text-lg text-md text-gray-600 lg:leading-9 leading-7 font-light footer-text">
              At Axis Contracting and Locating, we bring your property to life
              with precision and care. Our team of experienced professionals is
              committed to providing quality craftsmanship in all of our
              services.{" "}
              <span className="font-medium">
                Based in Guelph, Ontario, we proudly serve clients within a
                600km radius,
              </span>{" "}
              bringing our expertise to your doorstep. <br></br>
              <br></br>
              We work closely with clients to create personalized spaces that
              match their visions and exceed their expectations. We believe in
              building lasting relationships with our clients based on trust,
              integrity, and a commitment to excellence.
            </p>
          </div>
          <hr className="pb-12 divide-y divide-blue-200"></hr>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 inline md:grid md:grid-cols-3 gap-12">
            <h2 className="h3 mb-4 col-span-3 md:text-3xl text-2xl ">
              We are installation contractors for
            </h2>

            <a href="https://www.thebunkie.com/" target="_blank">
              <img
                src="/images/bunkie_logo.png"
                alt="Example Image"
                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-44 md:w-auto mx-auto"
              />
            </a>
            <a href="https://sawmillstructures.com/" target="_blank">
              <img
                src="/images/sawmill_logo.webp"
                alt="Example Image"
                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-44 mx-auto md:w-auto"
              />
            </a>
            <a href="https://www.timberbunkies.com/" target="_blank">
              <img
                src="/images/timber.png"
                alt="Example Image"
                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-44 mx-auto md:w-auto pb-8 md:pb-0"
              />
            </a>
          </div>
          {/* Section content */}
          <div className="md:grid md:grid-cols-5 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-3 md:mt-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h4 mb-3">Other Services</h3>
                <p className="footer-text lg:text-lg text-md font-light text-gray-600 mb-5">
                  In addition to bunkie construction, we are proud to offer a
                  wide variety of contracting and locating services:
                </p>
                <ul className=" text-xl text-gray-700">
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Renovations
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Landscaping
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Decks
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Tile Work
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Masonry
                    <p className="text-xs italic inline">
                      {" "}
                      (smaller jobs only)
                    </p>
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    Private Utility Locating
                  </li>
                  <li className="mb-2 align-center transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-amber-500 text-xl mr-2"
                    />{" "}
                    GPR Scans / Subsurface Imaging
                  </li>

                  <li>
                    {" "}
                    <a
                      href="#0"
                      className="flex transition ease-in-out delay-50  text-gray-500 hover:text-amber-500 duration-300 ml-5 md:ml-0 mt-5"
                    >
                      <p className="text-sm footer-text ">
                        Learn more about our services{" "}
                      </p>
                      <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="text-sm ml-2 self-center"
                      />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:col-span-2 lg:col-span-2 flex ">
              <div className=" self-center mx-auto mb-12 lg:mb-0 ">
                <div className="photo-container rounded-sm">
                  <img
                    src="/images/bunkie2.png"
                    alt="Example Image"
                    className="md:w-80 md:h-auto h-96 w-auto rounded-sm lg:mt-0 mt-5 "
                  />
                </div>

                <div className="b mx-auto h-16 w-64 flex justify-center items-center mt-2 ">
                  <div className="i h-12 w-48 bg-gradient-to-br from-amber-400 to-amber-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                  <a className="text-sm text-center text-white font-medium z-10 pointer-events-none flex">
                    <p> View More Photos</p>
                    <FontAwesomeIcon
                      icon={faEye}
                      className="self-center ml-2"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
