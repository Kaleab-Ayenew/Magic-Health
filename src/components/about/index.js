import React from "react";
import ContentSection from "../public/ContentSection";
import { Player } from "@lottiefiles/react-lottie-player";
import listSvg from "../../images/about/list-item-icon.svg";
import "./about.css";
export default function About() {
  React.useEffect(() => {
    document.title = "About - Better Health";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <ContentSection>
        <div className="section__img-text-row">
          <div className="small">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_tutvdkg0.json"
              className="player"
              loop
              autoplay
              style={{
                width: window.screen.width <= 650 ? "350px" : "450px",
              }}
            />
          </div>

          <div className="text">
            <img
              className="about__quote-img"
              src="https://beakerhealth.com/images/about/hero/quote-mark.svg"
            />
            <h1>The Best Service Offered by the Best</h1>
            <p>
              At Magic Health, we believe that good health is an essential part
              of living a full and happy life. That’s why our team is dedicated
              to helping people like you reach their goals and improve their
              quality of life through sound nutrition advice, mental well-being
              strategies, physical fitness regimens, and more
            </p>
            <span>
              <img src="https://beakerhealth.com/images/about/hero/ceo-signature.svg" />
            </span>
            <div>
              <img
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
                src={require("../../images/about/ceo.jpg")}
              />
              <p>
                <li>Johnny Phillips -</li>
                <li>Founder & CEO of Magic Health</li>
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <h1>About Magic Health</h1>

        <div class="section__img-text-row">
          <div class="text">
            <h2>About Us</h2>
            <p>
              Welcome to Magic Health! We are a health consultancy committed to
              helping you achieve better health and overall well-being. Our team
              of health professionals have years of knowledge and experience in
              the health sector and provide a variety of services tailored to
              meet your individual needs.
              <br />
              <br />
              Whether you’re looking for nutritional advice, stress management
              tips, physical activity programs, or something else, we are here
              to help.
              <br />
              <br />
              Take a look around our site to learn more about us and the
              services we offer.
            </p>
            <button className="about__connect-btn">Let's Connect</button>
          </div>

          <div class="small about__img-margin">
            <Player
              src="https://assets3.lottiefiles.com/private_files/lf30_4FGi6N.json"
              className="player"
              loop
              autoplay
              style={{
                width: window.screen.width <= 650 ? "350px" : "450px",
              }}
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h1>Our Mission</h1>

        <div className="section__img-text-row">
          <div className="large">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_ot5gqdfc.json"
              className="player"
              loop
              autoplay
              style={{
                width: window.screen.width <= 650 ? "350px" : "450px",
              }}
            />
          </div>

          <div className="text">
            <h2>Unlocking Magic Health</h2>
            <p>
              We believe everyone deserves health and wellbeing that is magical.
              At Magic Health, our aim is to empower individuals on their
              journey towards this optimal wellbeing, by providing tailored
              services for every unique set of needs.
              <br />
              <br />
              Think of us as the following:
              <li>
                <img src={listSvg} />
                Our experienced health practitioners use a holistic approach to
                healthcare.
              </li>
              <li>
                <img src={listSvg} />
                We combine both traditional and natural modalities such as
                lifestyle counseling, complementary therapies, and
                evidence-based nutrition plans.
              </li>
              <li>
                <img src={listSvg} />
                We provide our clients with the latest tools they need to manage
                stress and anxiety more effectively in order to bring out their
                full potential in life.
              </li>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <h1>Our Team</h1>
        <p>
          At Magic Health we have assembled an experienced team of professionals
          that have taken years of learning and education in various fields of
          healthcare. From dietitians to mind body specialists, our team is
          dedicated to supporting each individual client towards achieving
          brilliant health outcomes through prevention and self-empowerment
          techniques.
        </p>

        <div className="section__img-text-row">
          <div className="large">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_wdXBRc.json"
              className="player"
              loop
              autoplay
              style={{
                width: window.screen.width <= 650 ? "350px" : "450px",
              }}
            />
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
