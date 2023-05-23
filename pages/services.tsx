import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../components/Accordion";
// import the icons you need
import { faPenToSquare, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import the icons you need

function ServicePage() {
  const styles: React.CSSProperties = {
    fontFamily: "Inter",
  };

  return (
    <section className="pt-16 md:pt-24 pb-10">
      <div className="max-w-7xl xl:w-auto sm:w-11/12 mx-auto my-12">
        <div className="footer-text text-gray-600 px-5 text-gray-600 py-3 border-l-4 border-amber-500 ml-5 sm:ml-0 h-fixed">
          <h1
            id="footer-header"
            className=" text-9xl lg:text-4xl font-semibold py-2"
          >
            Our Services
          </h1>
          <p> More about the services we offer </p>
        </div>
        <div>
          {" "}
          <h2 className="h2 text-xl pt-10 pb-3 text-gray-800">Contracting</h2>
        </div>
        <div className="services grid grid-cols-12 gap-8">
          <hr className="col-span-12"></hr>
          <div className="single-service col-span-5">
            <div className="service-icon">
              <img
                src="/images/icons/cabin2.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto "
              />
            </div>
            <h4 className="footer-text font-semibold">Bunkie Construction</h4>
            <p>
              Transform your outdoor space into a cozy retreat with our expert
              cottage bunkie construction. As licensed installation contractors
              for renowned brands like{" "}
              <a
                href="#0"
                className="underline text-amber-500 hover:text-amber-600"
              >
                The Bunkie Co
              </a>
              ,{" "}
              <a
                href="#0"
                className="underline text-amber-500 hover:text-amber-600"
              >
                Timber Bunkies
              </a>
              , and{" "}
              <a
                href="#0"
                className="underline text-amber-500 hover:text-amber-600"
              >
                Sawmill Structures
              </a>
              , we bring unparalleled expertise and craftsmanship to every
              cottage bunkie construction project.
            </p>
          </div>
          <div className="single-service col-span-4">
            <div className="service-icon">
              <img
                src="/images/icons/pier2.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto "
              />
            </div>
            <h4 className="footer-text font-semibold">
              Deck & Dock Construction
            </h4>
            <p>
              Create the perfect outdoor gathering spot with our expert deck
              building, combining functionality and aesthetics for an
              unforgettable outdoor experience, and/or docks that seamlessly
              blend with your waterfront property.
            </p>
          </div>
          <div className="single-service col-span-3">
            <div className="service-icon">
              <div className="service-icon">
                <img
                  src="/images/icons/house2.png"
                  alt="Example Image"
                  className="w-24 h-24 mx-auto "
                />
              </div>
            </div>
            <h4 className="footer-text font-semibold ">Renovations</h4>
            <p>
              Renovate your space with precision and creativity, turning your
              vision into a reality with our comprehensive renovation services.
            </p>
          </div>

          <div className="single-service col-span-4">
            <div className="service-icon">
              <img
                src="/images/icons/planning.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto "
              />
            </div>
            <h4 className="footer-text font-semibold">Landscaping</h4>
            <p>
              Comprehensive landscaping services, tailored to your unique style
              and preferences, and designed to enhance the beauty and
              tranquility of your surroundings.
            </p>
          </div>
          <div className="single-service col-span-4">
            <div className="service-icon">
              <img
                src="/images/icons/tiles2.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto "
              />
            </div>
            <h4 className="footer-text font-semibold">Tiling</h4>
            <p>
              Enhance your space with exquisite tile work, adding elegance and
              sophistication to any room with our expert tiling services.
            </p>
          </div>
          <div className="single-service col-span-4">
            <div className="service-icon">
              <img
                src="/images/icons/bricklayer.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto "
              />
            </div>
            <h4 className="footer-text font-semibold">Masonry</h4>
            <p>
              Stonework and durable brick installations, ensuring lasting beauty
              and structural integrity.{" "}
              <span className="italic text-sm">
                {" "}
                (smaller masonry jobs only)
              </span>
            </p>
          </div>
        </div>
        <div>
          {" "}
          <h2 className="h2 text-xl pt-10 pb-3 text-gray-800">Locating</h2>
        </div>
        <div className="services grid grid-cols-12 gap-8">
          <hr className="col-span-12"></hr>
          <div className="single-service col-span-12">
            <div className="service-icon">
              <img
                src="/images/icons/radar.png"
                alt="Example Image"
                className="w-24 h-24 mx-auto mt-2 "
              />
            </div>
            <h4 className="footer-text font-semibold">
              Private Utility Locating & Subsurface Imaging
            </h4>
            <p>
              We employ cutting-edge GPR scans and subsurface imaging techniques
              to accurately and efficiently locate private utilities, ensuring
              precise mapping and minimizing the risk of damage during
              construction or excavation projects.
            </p>
            <hr className="mt-5 w-3/4 mx-auto"></hr>
            <div style={styles}>
              <Accordion title="What are some advantages to Private Utility Locating?">
                <div className="grid grid-cols-6 mt-5 gap-3 text-center">
                  <div className="bg-gray-300 hover:bg-gray-200 col-span-2 p-3 rounded-md">
                    <img
                      src="/images/icons/shield.png"
                      alt="Example Image"
                      className="w-12 h-12 mx-auto mt-2 "
                    />
                    <h6 className="text-black font-semibold text-lg py-2">
                      Safety
                    </h6>
                    <p id="service-text">
                      Private utility locating can help prevent damage to
                      underground utility lines, which can cause serious safety
                      hazards, including gas leaks, electrical shock, and water
                      damage. By using private utility locating services,
                      homeowners and contractors can ensure that they are aware
                      of the location of these lines and can avoid damaging
                      them.
                    </p>
                  </div>
                  <div className="bg-gray-300  hover:bg-gray-200 col-span-2 p-3 rounded-md">
                    <img
                      src="/images/icons/efficient.png"
                      alt="Example Image"
                      className="w-12 h-12 mx-auto mt-2"
                    />
                    <h6 className="text-black font-semibold text-lg py-2">
                      Time & Cost Savings
                    </h6>
                    <p id="service-text">
                      Private utility locating can save time and money in the
                      long run by preventing damage to underground utility
                      lines, which can be expensive to repair. By investing in
                      private utility locating services upfront, homeowners and
                      contractors can avoid costly repairs and disruptions to
                      their projects.
                    </p>
                  </div>
                  <div className="bg-gray-300  hover:bg-gray-200 col-span-2 p-3 rounded-md">
                    <img
                      src="/images/icons/compliance.png"
                      alt="Example Image"
                      className="w-12 h-12 mx-auto  mt-2"
                    />
                    <h6 className="text-black font-semibold text-lg py-2">
                      Compliance
                    </h6>
                    <p id="service-text">
                      Many municipalities and states require private utility
                      locating before excavation or construction can begin. By
                      using private utility locating services, homeowners and
                      contractors can ensure that they are complying with local
                      regulations and avoiding any potential fines or penalties.
                    </p>
                  </div>
                  <div className="bg-gray-300 hover:bg-gray-200 col-start-2 col-span-2 p-3 rounded-md">
                    <img
                      src="/images/icons/targeting.png"
                      alt="Example Image"
                      className="w-12 h-12 mx-auto mt-2"
                    />
                    <h6 className="text-black font-semibold text-lg py-2">
                      Accuracy
                    </h6>
                    <p id="service-text">
                      Private utility locating services use advanced
                      technologies, such as ground penetrating radar and
                      electromagnetic locators, to accurately locate underground
                      utility lines. This can help ensure that projects are
                      completed with precision and without any surprises or
                      setbacks.
                    </p>
                  </div>
                  <div className="bg-gray-300 hover:bg-gray-200 col-span-2 p-3 rounded-md">
                    <img
                      src="/images/icons/sun.png"
                      alt="Example Image"
                      className="w-12 h-12 mx-auto mt-2"
                    />
                    <h6 className="text-black font-semibold text-lg py-2">
                      Peace of Mind
                    </h6>
                    <p id="service-text">
                      Private utility locating can provide homeowners and
                      contractors with peace of mind, knowing that they have
                      done everything they can to ensure the safety and success
                      of their projects. By investing in private utility
                      locating services, they can feel confident that they are
                      making informed decisions and avoiding potential risks.
                    </p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="">
          <hr className="my-10"></hr>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img
                src="/images/bunkienew.png"
                alt="Example Image"
                className="md:h-96 h-auto w-auto rounded-sm lg:mt-0 mt-5 "
              />
            </div>
            <div className="self-center">
              <p className="footer-text text-3xl font-semibold text-center mb-5">
                Ready to bring your construction project to life?
              </p>
              <p className="footer-text text-md text-center leading-8 pb-3">
                Contact us today for a friendly consultation or free quote, and
                let us show you the genuine care and expertise we bring to every
                construction and locating project.
              </p>
              <div className="b mx-auto h-16 w-80 flex justify-center items-center mt-2 ">
                <div className="i h-16 w-52 bg-gradient-to-br from-amber-400 to-amber-600 items-center rounded-lg shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a className="text-md text-center text-white font-medium z-10 pointer-events-none flex">
                  <p> Contact Us TODAY</p>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="self-center ml-2"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicePage;
