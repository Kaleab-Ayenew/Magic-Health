import React from "react";
import ContentSection from "../public/ContentSection";


export default function About(){
    React.useEffect(()=>{
        document.title = "About - Better Health"
        window.scrollTo(0, 0)
    },[])
    return(
        <div className="about-container">
            <ContentSection>
                <div style={{padding:"0 60px",marginTop:"60px", marginBottom:"150px"}} className="section__img-text-row">
                    <div className="small">
                        <img style={{height:"400px", marginRight:"60px"}} src="https://beakerhealth.com/images/about/hero/hero-creative.svg"/>
                    </div>
                    
                    <div style={{position:"relative"}} className="text">
                        <img style={{position:"absolute",top:"0",right:"20px", height: "70px", zIndex:"-1"}} src="https://beakerhealth.com/images/about/hero/quote-mark.svg"/>
                        <h1 style={{fontSize:"1.9em"}}>Specialty Meets Simplicity</h1>
                        <p style={{fontWeight:""}}>
                        Welcome! Every journey begins with the right education, and we want to help you maintain the foundation you have built. Whether we are becoming your technology arm or just supporting — together, we can raise the bar in healthcare.
                        </p>
                        <span>
                            <img style={{width:"150px"}} src="https://beakerhealth.com/images/about/hero/ceo-signature.svg"/>
                        </span>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img style={{width:"50px", height:"50px", marginRight:"30px"}} src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Fhero%2Fceo-avatar.png&w=128&q=75"/>
                            <p style={{textAlign:"left"}}>
                                <li>
                                Jerrod Jeffries -
                                </li>
                                <li>
                                Founder & CEO of Beaker Health
                                </li>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection gray={true}>
                <h1 style={{fontSize:"1.7em", margin:"50px 0"}}>About Beaker Health</h1>

                <div style={{padding:"0 60px", paddingBottom:"70px"}} class="section__img-text-row">
                    <div class="text">
                        <h2>About Us</h2>
                        <p style={{maxWidth:"400ch"}}>
                        At Beaker Health we aim to give everyone a platform to share their healthcare expertise. Talented people in every discipline, specialty, and niche. We want to help ensure that the best content is easily available. Those that help create the knowledge should receive those benefits, which is why we built a suite of tools.<br/><br/>Use our platform tools for better compliance, analytics, widespread dissemination, and an additional revenue stream.<br/><br/>Let us handle your education needs in order to measure impact and get your time back.
                        </p>
                        <button style={{color: "white", width:"150px", height:"35px", backgroundColor:"#01539d", border:"none", borderRadius:"5px", boxShadow:"0 2px 5px gray", marginTop:"30px"}}>
                            Let's Connect
                        </button>
                    </div>

                    <div class="small">
                        <img style={{height:"400px"}} src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Fwhat-is-beaker-health%2Fabout-us-creative.png&w=1080&q=100"/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <h1 style={{fontSize:"1.7em", marginTop:"60px"}}>Putting You First</h1>

                <div style={{justifyContent:"center", paddingBottom: "50px"}} className="section__img-text-row">
                    <div class="large">
                        <img src="https://beakerhealth.com/_next/image?url=%2Fimages%2Fabout%2Four-vision%2Four-vision-collage.png&w=1080&q=100" />
                    </div>

                    <div class="text">
                        <h2>Our Vision</h2>
                        <p>
                        Out with outdated models that take your intellectual property. In with the model that rewards the doers, creators, and the visionaries.<br/><br/>Think of us as the following:
                        <li style={{margin:"10px 0", display:"flex", alignItems:"flex-start"}}>
                            <img style={{marginTop:"3px", marginRight:"10px"}} src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg"/>
                            The space between that disputed facebook post and a lengthy MOOC.
                        </li>

                        <li style={{margin:"10px 0", display:"flex", alignItems:"flex-start"}}>
                            <img style={{marginTop:"3px", marginRight:"10px"}} src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg"/>
                            The side hustle healthcare workers deserve for all those years of hard work.
                        </li>

                        <li style={{margin:"10px 0", display:"flex", alignItems:"flex-start"}}>
                            <img style={{marginTop:"3px", marginRight:"10px"}} src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg"/>
                            A verified YouTube for healthcare professionals.
                        </li>

                        <li style={{margin:"10px 0", display:"flex", alignItems:"flex-start"}}>
                            <img style={{marginTop:"3px", marginRight:"10px"}} src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg"/>
                            The space where you can learn from the innovators and experimenters while finding approved content from well-credentialed healthcare professionals.
                        </li>

                        <li style={{margin:"10px 0", display:"flex", alignItems:"flex-start"}}>
                            <img style={{marginTop:"3px", marginRight:"10px"}} src="https://beakerhealth.com/images/about/our-vision/list-item-icon.svg"/>
                            A place where you can be celebrated and receive the credit you deserve.
                        </li>
                        </p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection gray={true}>
                <h1 style={{fontSize:"1.7em", marginTop:"60px"}}>Why Choose Us</h1>
                <p style={{maxWidth:"250ch", padding:"0 60px"}}>
                    We follow the values our mothers instilled in us. We know time is precious and should not be wasted. For all healthcare professionals, time is your most valuable asset, and we want to help make sure you are spending it where you are making the most impact. Get your time back with Beaker Health.
                </p>

                <div style={{padding:"0 60px", paddingBottom:"50px"}} className="section__img-row">
                    <div>
                        <img src="https://beakerhealth.com/images/about/our-metrics/support-highlight.svg"/>
                        <h2>All Star Support</h2>
                        <p>We help disseminate knowledge easier and quicker. If you have other needs, reach out.</p>
                    </div>

                    <div>
                        <img src="https://beakerhealth.com/images/about/our-metrics/team-highlight.svg"/>
                        <h2>Strong Teams</h2>
                        <p>Our technical team is nothing shy of magic. You need custom solutions, let's chat.</p>
                    </div>

                    <div>
                        <img src="https://beakerhealth.com/images/about/our-metrics/customer-satisfaction-highlight.svg"/>
                        <h2>Customer Satisfaction</h2>
                        <p>Users love us because of our simplicity, content, and support. Let's achieve more.</p>
                    </div>
                </div>
            </ContentSection>
        </div>
    )
}