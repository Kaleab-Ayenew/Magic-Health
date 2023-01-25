import React from "react";
import ContentSection from "../public/ContentSection";
import { Player } from "@lottiefiles/react-lottie-player";
import "./faq.css";

const AccordionItem = (props) => {
  React.useEffect(() => {
    document.title = "FAQ - Magic Health";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={`flush-heading${props.index}`}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props.index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${props.index}`}
        >
          {props.qn}
        </button>
      </h2>
      <div
        id={`flush-collapse${props.index}`}
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${props.index}`}
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">{props.answer}</div>
      </div>
    </div>
  );
};

export default function Faq() {
  const faqData = [
    [
      "What services does Magic Health provide?",
      `Magic Health provides personalized health and nutrition consulting services that help individuals achieve their fitness goals and maintain a healthy lifestyle. Our team of experts analyze your lifestyle and devise customized plans to guide you through the journey of improved health, physical fitness, dietary habits, and more. `,
    ],
    [
      "Who are your consultants?",
      `Our team consists of certified healthcare professionals with a collective experience in the field of nutrition, health sciences, exercise science, sports medicine, preventive care and wellness coaching. They possess specialized knowledge and expertise in helping individuals take control of their physical wellbeing.
      `,
    ],
    [
      `How can I book an appointment?`,
      `You can book an initial consultation with our health consultants online via our website or by phone at (123)-456-7890. We will arrange for all future followit sessions according to your preference - remote video conferencing or in-person meetings at our office locations - whichever is most suitable for you!`,
    ],
    [
      `Is there any particular diet I need to follow?`,
      ` At Magic Health, we understand that every individual is different and hence every journey to improved wellness will be unique as well! Our qualified health specialists will create custom diet plans tailored specifically to your goals and lifestyle needs that provide optimal nutritional balance without compromising on taste & enjoyment factor. `,
    ],
    [
      `What other services do you offer apart from Nutrition Plans? `,
      `At Magic Health we offer a wide range of services designed to help you live a healthier life - Exercise Programs; Stress Management Strategies; Sleep Optimization; Interactive Healthcare Software; Mental Wellbeing Sessions; Lifestyle Coaching Services; Telemedicine Services and more! `,
    ],
    [
      `Are there any mobile applications available for Magic Health users?  `,
      `Yes! We have developed mobile applications for both iOS and Android platforms which offer interactive healthcare solutions with intuitive step-by-step instructions to help you stay on top of your wellbeing journey from the comfort & convenience of your smartphone device!`,
    ],
  ];

  const faqRendered = faqData.map((item, index) => {
    return (
      <AccordionItem key={index} index={index} qn={item[0]} answer={item[1]} />
    );
  });
  return (
    <div className="faq-container">
      <ContentSection>
        <h1 id="faq-header">Frequently Asked Questions</h1>
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_zptgbuvm.json"
          className="player"
          loop
          autoplay
          style={{
            width: window.screen.width <= 650 ? "350px" : "450px",
          }}
        />

        <div className="accordion__container">
          <div class="accordion accordion-flush" id="faqAccordion">
            {faqRendered}
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
