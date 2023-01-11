import React from "react";
import IntroSection from "./IntroSection";

export default function Home(){
    return(
        <div className="home-container">
            <IntroSection/>
            <div style={{height:"300vh"}}></div>
        </div>
    )
}