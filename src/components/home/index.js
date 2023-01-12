import React from "react";
import IntroSection from "./IntroSection";
import ContentSection from "../public/ContentSection";
import SwiperComp from "../public/SwiperComp";
import Footer from "../public/Footer";

import "./home.css"
export default function Home(){
    React.useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return(
        <div className="home-container">
            <IntroSection />
            <ContentSection>
                <h1>We Can Help</h1>
                <p>
                    We provide the opportunity for healthcare organizations to share their internal knowledge, externally. If pictures are worth a thousand words, what's a video?
                </p>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/seBuGEo9COI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="section__img-holder">
                    <img src="https://beakerhealth.com/images/home/we-can-help/division.svg"/>
                </div>

                <p>
                Thousands of users are satisfied with what they get with Beaker Health. When you use Beaker Health, you might be surprised with what you already possess.
                </p>

                <div className="section__img-row">
                    <div>
                        <img src="https://beakerhealth.com/images/home/we-can-help/time-savings.svg"/>
                        <h2>Time Savings</h2>
                        <p>Reports show 50% time savings of creation & dissemination processes</p>
                    </div>

                    <div>
                        <img src="https://beakerhealth.com/images/home/we-can-help/one-stop.svg"/>
                        <h2>One-Stop</h2>
                        <p>Users are able to upload, view, and track metrics in one dashboard.</p>
                    </div>

                    <div>
                        <img src="https://beakerhealth.com/images/home/we-can-help/efficient.svg"/>
                        <h2>Efficient</h2>
                        <p>We create certificates, reports, and monthly payouts in seconds.</p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection gray={true}>
                <h1>Benefits</h1>
                <div className="section__img-text-row">
                    <div className="text">
                        <h2>
                            Innovation at it's finest
                        </h2>

                        <p>
                            <span>Use what you possess, more efficiently.</span>
                            <span>Have individuals from inside your organization upload knowledge to create your own presentation library. This creates a customized E-Learning platform that allows you to:</span>
                            <li>Measure impact</li>
                            <li>Grow visibility</li>
                            <li>Earn revenue</li>
                        </p>
                    </div>

                    <div className="small">
                        <img src="https://beakerhealth.com/images/home/benefit/benefits-table.svg"/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <h1>Built for You</h1>
                <p>
                    You already own it. We help make it known.
                </p>
                <div className="section__img-text-row">
                    <div className="large">
                        <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fhome%2Fbuilt-for-you%2Fbuilt-for-you-presenter.png&w=1920&q=75"/>
                    </div>

                    <div className="text">
                        <h2>Educator</h2>
                        <p>
                        Organizations set who present. Educators easily enter appropriate criteria, upload and record. We take care of the rest.
                        </p>
                        <img src="https://beakerhealth.com/images/home/built-for-you/built-for-you-presenter-avatar.svg"/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="section__img-text-row">
                    <div className="text">
                        <h2>Learner</h2>
                        <p>
                        Finding the right information is easy as 1-2-3 with our search and evaluation tools to save ample time.for any learner.
                        </p>
                        <img src="https://beakerhealth.com/images/home/built-for-you/built-for-you-scholar-avatar.svg"/>
                    </div>

                    <div className="large">
                        <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fhome%2Fbuilt-for-you%2Fbuilt-for-you-scholar.png&w=1920&q=75"/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="section__img-text-row">
                    <div className="large">
                        <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fhome%2Fbuilt-for-you%2Fbuilt-for-you-admin.png&w=1920&q=75"/>
                    </div>

                    <div className="text">
                        <h2>Educator</h2>
                        <p>
                        It's your organization. You control the insights, set permissions, and generate reports on what matters most to you.
                        </p>
                        <img src="https://beakerhealth.com/images/home/built-for-you/built-for-you-admin-avatar.svg"/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection gray={true}>
                <SwiperComp/>
            </ContentSection>
            
            <Footer/>
        </div>
    )
}