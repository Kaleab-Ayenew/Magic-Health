import React from "react";
import IntroSection from "./IntroSection";
import ContentSection from "../public/ContentSection";
import SwiperComp from "../public/SwiperComp";
import { Player } from "@lottiefiles/react-lottie-player";

import "./home.css";
export default function Home() {
  React.useEffect(() => {
    document.title = "Home - Magic Health";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <IntroSection />
      <ContentSection>
        <h1>We Have the Best Professionals</h1>
        <p>
          Our team of health professionals have years of knowledge and
          experience in the health sector and provide a variety of services
          tailored to meet your individual needs.
        </p>
        <div className="section__img-holder">
          <img src="https://beakerhealth.com/images/home/we-can-help/division.svg" />
        </div>

        <p>
          Whether you’re looking for nutritional advice, stress management tips,
          physical activity programs, or something else, we are here to help.
          Take a look around our site to learn more about us and the services we
          offer.
        </p>

        <div className="section__img-row">
          <div>
            <img src="https://beakerhealth.com/images/home/we-can-help/time-savings.svg" />
            <h2>Cheap</h2>
            <p>
              We are commited to improving your health, not stealing your money.
            </p>
          </div>

          <div>
            <img src="https://beakerhealth.com/images/home/we-can-help/one-stop.svg" />
            <h2>One-Stop</h2>
            <p>
              We provide consultancy services on all kinds of health issues.
            </p>
          </div>

          <div>
            <img src="https://beakerhealth.com/images/home/we-can-help/efficient.svg" />
            <h2>Long Term</h2>
            <p>We provide long term consultation that can last for years.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <h1>Benefits</h1>
        <div className="section__img-text-row">
          <div className="text">
            <h2>Personalized Guidance</h2>

            <p>
              <span>
                At Magic Health, our mission is to help you live a longer and
                healthier life.
              </span>
              <span>
                We understand that it can be difficult to keep up with all of
                the latest research and recommendations in regards to your
                health, so we are here to provide personalized advice, guidance,
                and support that will help you stay at the top of your game.
              </span>
            </p>
          </div>

          <div className="small">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_zpjfsp1e.json"
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
        <h1>How We Stand Out</h1>
        <p>We provide services for all of your health needs.</p>
        <div className="section__img-text-row">
          <div className="large">
            <div className="lottie-container">
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_l13zwx3i.json"
                className="player"
                loop
                autoplay
                style={{
                  width: window.screen.width <= 650 ? "350px" : "450px",
                }}
              />
            </div>
          </div>

          <div className="text">
            <h2>All in One</h2>
            <p>
              Whether you’re looking for better nutrition, improved stress
              management, or personalised workout plans; we have got everything
              you need! With our expert team of doctors, nutritionists, and
              personal trainers, we can help you create an individualised plan
              suited specifically for your needs.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="section__img-text-row">
          <div className="large">
            <div className="lottie-container">
              <Player
                src="https://assets3.lottiefiles.com/packages/lf20_pgpfqtc5.json"
                className="player"
                loop
                autoplay
                style={{
                  width: window.screen.width <= 650 ? "350px" : "450px",
                }}
              />
            </div>
          </div>

          <div className="text">
            <h2>The Best Professionals</h2>
            <p>
              We are proud to offer high-quality health services from a team of
              experienced professionals who specialize in delivering excellence.
              Our doctors have decades of combined experience, and our rates are
              the most competitive in town. We take great pride in providing
              accurate diagnoses, personalized care plans, and customized
              treatments for each patient.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="section__img-text-row">
          <div className="large">
            <div className="lottie-container">
              <Player
                src="https://assets3.lottiefiles.com/packages/lf20_qxemgrnw.json"
                className="player"
                loop
                autoplay
                style={{
                  width: window.screen.width <= 650 ? "190px" : "200px",
                }}
              />
            </div>
          </div>

          <div className="text">
            <h2>Affordable Services</h2>
            <p>
              Another aspect of Magic Health is affordability. We understand how
              costly medical care can be, which is why we offer flexible payment
              options with no hidden fees or extra charges. Rest assured that
              all of our services are budget-friendly so you can get the best
              healthcare advice at an affordable price.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <SwiperComp />
      </ContentSection>
    </div>
  );
}
