import React from "react"
import ContentSection from "../public/ContentSection"
import Footer from "../public/Footer"
import "./faq.css"

const AccordionItem = (props)=>{

    React.useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
            <div class="accordion-item">
                <h2 class="accordion-header" id={`flush-heading${props.index}`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.index}`} aria-expanded="false" aria-controls={`flush-collapse${props.index}`}>
                    {props.qn}
                </button>
                </h2>
                <div id={`flush-collapse${props.index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${props.index}`} data-bs-parent="#faqAccordion">
                <div class="accordion-body">{props.answer}</div>
                </div>
            </div>
    )
}

export default function Faq(){
    const faqData = [
        ["How do I download a certificate of completion?",`First, make sure you are logged in. Once logged in, be on the ‘Scholar’ side of the platform. If on the scholar side, click ‘Dashboard”. You wild the small paper icon on the right hand side of the middle menu. The icon only appears if you have gone through the presentation and done the evaluation. If you leave the presentation early, you will not receive a certificate.`],
        ["What if I need to pause during my presentation?",`You can find the pause button underneath your video. This allows you to pause and pick up the recording where you left off. `],
        [`Where can I view my metrics?`,`Metrics can be viewed under dashboard. You will find four tabs that show how many, and where they are located.`],
        [`How can I download the video or other resources?`,`Currently we have not enabled this activity. We do our best to protect people's intellectual property. If this is a wish from many of our users we will take this into consideration for future iterations of the platform. Please reach out to contact@beakerheatlth.com if you believe this to add value or have other suggestions on how to improve!`],
        [`What are the methods of payment?`,`We take all major US credit cards. This includes the following: Visa, Mastercard, Discover, JCB, American Express`],
        [`What is happening with my payment?`,`Our payment provider is Stripe. They do wonderful things, just like you. It will be billed to your card as Beaker Health, Inc. There might be a few things we like to refer to as ‘operator error’s so please check your routing and account numbers before reaching out to us. If a problem persists, please contact us directly. When reaching out to us, please put ‘Payment’ in the subject line. In the body of the message include whatever screenshots you can and the description of the problem.`]
    ]

    const faqRendered = faqData.map((item, index)=>{
        return <AccordionItem key={index} index={index} qn={item[0]} answer={item[1]}/>
    })
    return(
        <div className="faq-container">
            <ContentSection style={{padding:"50px 200px"}}>
                <h1 style={{fontSize:"2.3em", color:"black", fontWeight:"lighter"}}>
                    Frequently Asked Questions
                </h1>
                <p style={{fontSize:"1em", color:"black", maxWidth:"70ch"}}>
                We would not have gotten to where we are today without help from others, so let us help you. The community page is a helpful resource with others helping to answer questions based on their experience within the community.
                </p>

                <div className="accordion__container">
                    <div class="accordion accordion-flush" id="faqAccordion">
                        {faqRendered}
                    </div>
                </div>

            </ContentSection>
            <Footer/>
        </div>
    )
}