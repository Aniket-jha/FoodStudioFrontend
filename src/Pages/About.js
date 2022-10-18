import React from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import AboutUs from "../assets/aboutus.jpg";
import "./aboutus.css";
const About = () => {
  return (
    <div>
      <Header />
      <div className="aboutUsBox">
        <h1>About Us</h1>

        <div className="aboutUsContentBox">
          <div className="aboutUsContent">
            <p>
              Dry Fruits have been an integral part of our diet and our way of
              life since ancient times. Along with the various medical
              advantages that they offer, dry fruits are likewise an incredible
              wellspring of crucial supplements and solid oils that help lessen
              the danger of harmful diseases.
              <br /> The ability to store them for longer durations and
              transport them easily have made them an intrinsic part of our
              diet. Food Studio is our attempt to convey this integrity at the
              convenience of your doorstep. Expanding on our many years of
              thriving wholesale operations, we are presently foraying into the
              online space for offering dry fruits directly to the consumers.
              <br /> We are attempting to connect with customers throughout the
              nation with a stimulating cluster of Indian and imported dry
              fruits. Our array of dry fruits are sourced from highly reputed
              producers, and cleaned, sorted and bundled physically to guarantee
              that their freshness and flavour is very much protected. <br />
              We offer delivery services with custom bundling, to provide the
              customers with unique and quality assured products. We ship dry
              fruits across the nation in order to ensure the convenience of the
              consumer. Quality is synonymous to food studio. We fastidiously
              conform to the principles of Food Safety and Standards Authority
              of India (FSSAI) at our cleaning and bundling office. <br />
              We additionally take after a stringent quality control measures.
              This assists us with guaranteeing that we convey dry foods grown
              from the ground of premium quality and taste.
            </p>
          </div>
          <div className="aboutUsContent">
            <img src={AboutUs} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
