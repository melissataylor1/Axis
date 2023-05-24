import LogoDark from "./LogoDark";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="w-full sm:w-100vw mx-auto px-4 sm:px-6 bg-gray-200">
        {/* Top area: Blocks */}
        <div className="lg:max-w-6xl md:max-w-4/5 grid sm:grid-cols-12 gap-4 lg:gap-8 py-8 md:pt-14  mx-auto w-full">
          {/* 1st block */}
          <div className="sm:col-span-2  ">
            <LogoDark />
            <ul className="footer-text lg:text-sm text-sm md:text-xs">
              <li className="lg:mt-5 mt-2">
                <span className="text-gray-600">
                  Phone<br></br>
                </span>{" "}
                <a className="text-black" href="tel:">
                  666&#45;666&#45;6666
                </a>
              </li>
              <li className="lg:mt-5 mt-2">
                <span className="text-gray-600">
                  Email<br></br>
                </span>{" "}
                <a href="mailto:aaxis.cul@gmail.com">aaxis.cul@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6  md:pl-5">
            <h6
              id="footer-header"
              className="text-gray-600 font-semibold mb-2 text-xl lg:text-3xl"
            >
              Our Mission Statement
            </h6>

            <p className="lg:text-md text-sm text-gray-600 mb-2 footer-text font-light tracking-wide">
              {" "}
              At Axis, our mission is to enhance and transform properties across
              Ontario with precision and care. We strive to create personalized
              living spaces that match our clients' visions and exceed their
              expectations. Our team of experienced professionals is committed
              to providing quality craftsmanship in all of our services.
            </p>
            <p className="text-sm footer-text text-gray-500">
              See more about our services{" "}
              <a
                href="#0"
                className="text-gray-500 hover:text-amber-500 underline"
              >
                here
              </a>
            </p>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-4  ">
            <h6
              id="footer-header"
              className="text-gray-600 font-semibold mb-2 text-xl lg:text-3xl"
            >
              Areas We Service
            </h6>

            <ul id="footer-place" className="text-gray-600 text-sm">
              <li className="mb-1 ">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Greater Toronto Area
              </li>
              <li className="mb-1 ">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Niagara Region
              </li>
              <li className="mb-1">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Ottawa Valley
              </li>
              <li className="mb-1">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Muskoka, Bracebridge, & Huntsville
              </li>
              <li className="mb-1 ">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Bruce Peninsula & Lake Simcoe
              </li>
              <li className="mb-1 ">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                Kawartha Lakes
              </li>
              <li className="mb-1 ">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-amber-500"
                />{" "}
                North Bay & Sudbury
              </li>
            </ul>

            <a href="#0">
              <p className="footer-text text-sm text-gray-600 mt-2 italic text-left hover:text-amber-500 underline">
                & many more...
              </p>
            </a>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-300 max-w-6xl mx-auto">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                href="https://www.facebook.com/people/Axis-Contractors/pfbid02WUBgquwL7eHS4fyQUmzPhn8movv3BNyRmBXF1qmY57mqMoVgvXt9ZVQr3Fnn2LJvl/"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Axis Contracting & Locating LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
