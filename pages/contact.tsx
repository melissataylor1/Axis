import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
// import the icons you need
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";

const MapComponent = dynamic(() => import("../components/Map"), {
  ssr: false,
});
const MapComponentMobile = dynamic(() => import("../components/MapMobile"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <section className=" pt-16 md:pt-24 pb-10 other-bg">
      <div className="max-w-7xl xl:w-auto sm:w-11/12 mx-auto my-12 ">
        <div className="footer-text text-gray-600 px-5 text-gray-600 py-3 border-l-4 border-amber-500 ml-5 sm:ml-0 h-fixed my-5">
          <h1
            id="footer-header"
            className=" text-9xl lg:text-4xl font-semibold py-2"
          >
            Contact Us
          </h1>
          <p className="text-sm md:text-md">
            Get in touch with us to schedule a consultation and receive a
            complimentary quote.
          </p>
        </div>
        <div className="lg:grid grid-cols-7 xl:gap-8 md:gap-5">
          <div className="self-center col-span-3 lg:mb-32 mb-0 sm:mx-2">
            <p className="footer-text xl:text-3xl lg:text-9xl md:text-2xl text-xl font-bold lg:text-left text-center xl:mb-5 sm:mb-3 mb-4 mx-5 md:mx-0 ">
              Located in Guelph, we operate within a 600km radius.
            </p>
            <p className="footer-text text-md lg:text-left text-center xl:leading-8 md:leading-7 pb-0 md:pb-3 mx-4 md:mx-0">
              That&apos;s right - We proudly serve an extensive area within a
              600km radius of Guelph. That includes a variety of <br></br>{" "}
              However, we are always open to discussing opportunities beyond
              this range, as we are committed to going the extra mile for our
              clients.
            </p>
          </div>
          <div className="col-span-4 lg:mt-0 mt-10 lg:w-auto px-1 mx-auto block lg:hidden">
            <MapComponentMobile />
          </div>
          <div className="col-span-4 lg:mt-0 mt-10 lg:w-auto px-1 mx-auto hidden lg:block">
            <MapComponent />
          </div>
        </div>
        <hr className="my-8"></hr>

        <div className="grid grid-cols-12 lg:gap-10 gap-7 mt-5 mx-auto ml-5 md:ml-0">
          <div className="md:col-span-7 col-span-11 mx-auto ">
            <p className="footer-text text-lg text-gray-700 my-3 font-semibold">
              {" "}
              Share some Details of Your Project and We&apos;ll Get Back to You
              Shortly
            </p>
            <ContactForm />
          </div>

          <div className="md:col-span-5 md:my-6 my-0 col-span-12">
            <p className="lg:mt-3 mt-3 md:mt-8 footer-text text-2xl">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              Say Hello
            </p>

            <a href="mailto: aaxis.cul@gmail.com">
              <p className="text-black mt-2 text-xl font-light">
                <span className="text-gray-700 font-normal">Email:</span>{" "}
                aaxis.cul@gmail.com
              </p>
            </a>
            <p className="text-black my-3 text-xl font-light">
              <span className="text-gray-700 font-normal">Phone:</span>{" "}
              226&#45;600&#45;7835
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
