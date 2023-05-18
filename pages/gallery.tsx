import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need

const GalleryPage = () => {
  return (
    <section className="pt-16 md:pt-24">
      <div className="services">
        <div className="single-service">
          <div className="service-icon">
            <i className="fas fa-globe-europe"></i>
          </div>
          <h4>web design</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <a href="">read more</a>
        </div>
        <div className="single-service">
          <div className="service-icon">
            <i className="fas fa-code"></i>
          </div>
          <h4>web development</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <a href="">read more</a>
        </div>
        <div className="single-service">
          <div className="service-icon">
            <i className="fas fa-crop"></i>
          </div>
          <h4>graphic design</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <a href="">read more</a>
        </div>
      </div>
    </section>
  );
};
export default GalleryPage;
