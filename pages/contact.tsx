import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
// import the icons you need
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MapComponent = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <section className="pt-16 md:pt-24">
      <div>
        <MapComponent />
      </div>
      <p className="footer-text">tetsint tiwestOur Missio n Statement Q</p>
    </section>
  );
};
export default ContactPage;
