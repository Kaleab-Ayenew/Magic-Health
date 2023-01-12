import React from "react";
import Footer from "../public/Footer";
import ContentSection from "../public/ContentSection";

export default function Blog(){
    return(
        <div class="blog__container">
            <ContentSection style={{minHeight:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h2>Welcome to the Beaker Health Blog</h2>
                <p>This would have been a nice blog, but we don't have any content yet!</p>
            </ContentSection>
            <Footer/>
        </div>
    )
}