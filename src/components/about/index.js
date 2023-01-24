import React from "react";
import ContentSection from "../public/ContentSection";
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
            <img src="https://beakerhealth.com/images/about/hero/hero-creative.svg" />
          </div>

          <div className="text">
            <img
              className="about__quote-img"
              src="https://beakerhealth.com/images/about/hero/quote-mark.svg"
            />
            <h1>Specialty Meets Simplicity</h1>
            <p>
              Welcome! Every journey begins with the right education, and we
              want to help you maintain the foundation you have built. Whether
              we are becoming your technology arm or just supporting — together,
              we can raise the bar in healthcare.
            </p>
            <span>
              <img src="https://beakerhealth.com/images/about/hero/ceo-signature.svg" />
            </span>
            <div>
              <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Fhero%2Fceo-avatar.png&w=128&q=75" />
              <p>
                <li>Jerrod Jeffries -</li>
                <li>Founder & CEO of Beaker Health</li>
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <h1>About Beaker Health</h1>

        <div class="section__img-text-row">
          <div class="text">
            <h2>About Us</h2>
            <p>
              At Beaker Health we aim to give everyone a platform to share their
              healthcare expertise. Talented people in every discipline,
              specialty, and niche. We want to help ensure that the best content
              is easily available. Those that help create the knowledge should
              receive those benefits, which is why we built a suite of tools.
              <br />
              <br />
              Use our platform tools for better compliance, analytics,
              widespread dissemination, and an additional revenue stream.
              <br />
              <br />
              Let us handle your education needs in order to measure impact and
              get your time back.
            </p>
            <button className="about__connect-btn">Let's Connect</button>
          </div>

          <div class="small about__img-margin">
            <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Fwhat-is-beaker-health%2Fabout-us-creative.png&w=1080&q=100" />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <h1>Putting You First</h1>

        <div className="section__img-text-row">
          <div className="large">
            <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Four-vision%2Four-vision-collage.png&w=1080&q=100" />
          </div>

          <div className="text">
            <h2>Our Vision</h2>
            <p>
              Out with outdated models that take your intellectual property. In
              with the model that rewards the doers, creators, and the
              visionaries.
              <br />
              <br />
              Think of us as the following:
              <li>
                <img src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg" />
                The space between that disputed facebook post and a lengthy
                MOOC.
              </li>
              <li>
                <img src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg" />
                The side hustle healthcare workers deserve for all those years
                of hard work.
              </li>
              <li>
                <img src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg" />
                A verified YouTube for healthcare professionals.
              </li>
              <li>
                <img src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg" />
                The space where you can learn from the innovators and
                experimenters while finding approved content from
                well-credentialed healthcare professionals.
              </li>
              <li>
                <img src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg" />
                A place where you can be celebrated and receive the credit you
                deserve.
              </li>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection gray={true}>
        <h1>Why Choose Us</h1>
        <p>
          We follow the values our mothers instilled in us. We know time is
          precious and should not be wasted. For all healthcare professionals,
          time is your most valuable asset, and we want to help make sure you
          are spending it where you are making the most impact. Get your time
          back with Beaker Health.
        </p>

        <div className="section__img-row">
          <div>
            <img src="https://beakerhealth.com/images/about/our-metrics/support-highlight.svg" />
            <h2>All Star Support</h2>
            <p>
              We help disseminate knowledge easier and quicker. If you have
              other needs, reach out.
            </p>
          </div>

          <div>
            <img src="https://beakerhealth.com/images/about/our-metrics/team-highlight.svg" />
            <h2>Strong Teams</h2>
            <p>
              Our technical team is nothing shy of magic. You need custom
              solutions, let's chat.
            </p>
          </div>

          <div>
            <img src="https://beakerhealth.com/images/about/our-metrics/customer-satisfaction-highlight.svg" />
            <h2 className="about__center-header">Customer Satisfaction</h2>
            <p>
              Users love us because of our simplicity, content, and support.
              Let's achieve more.
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
