import React from "react";
import Footer from "../public/Footer";
import ContentSection from "../public/ContentSection";
import "./contact.css"
export default function Contact(){

    React.useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const [formValue, setFormValue] = React.useState({
        name:"",
        email:"",
        msg:""
    })

    const inputHandler = (e)=>{
                setFormValue({...formValue,[e.target.name]:e.target.value})
            }

    const submitHandler = ()=>{
        console.log(formValue)
        setFormValue({
            name:"",
            email:"",
            msg:""
        })
    }
    
    return(
        <div className="contact__container">
            <ContentSection style={{padding:"70px 100px",}}>
                <div style={{position:"relative"}}>
                    <h1 style={{marginRight:"60px"}}>Get in Touch!</h1>
                    <p style={{lineHeight:"1.2em"}}>Your voice matters. Let it be heard.<br/>Reach out and let us know how we can help.</p>
                    <img style={{position: "absolute", width:"53px", height:"53px", top:"17px", right:"0"}} src="https://beakerhealth.com/images/contact/message-icon.svg"/>
                </div>

                <div style={{width:"100%"}} className="section__img-text-row">
                    <div class="contact__form-container">
                        <h2>Contact Us</h2>
                        <div class="form-floating">
                            <input style={{width:"350px"}} name="name" onChange={inputHandler} value={formValue.name} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Your Name</label>
                        </div>

                        <div class="form-floating">
                            <input style={{width:"350px"}} name="email" onChange={inputHandler} value={formValue.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating">
                            <textarea name="msg" onChange={inputHandler} value={formValue.msg} class="form-control" placeholder="Leave a message here" id="floatingTextarea" style={{maxHeight: "200px", height: "200px"}}/>
                            <label for="floatingTextarea2">Comments</label>
                        </div>

                        <button onClick={submitHandler}>Submit</button>
                    </div>

                    <div className="small">
                        <img style={{height:"370px"}} src="https://beakerhealth.com/images/contact/contact.svg" />
                    </div>
                </div>
            </ContentSection>
            <Footer/>
        </div>
    )
}