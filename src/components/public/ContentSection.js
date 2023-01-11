import React from "react"
import "./section.css"

export default function ContentSection(props){
    const gray = props.gray ? "content-section__gray" : null
    return(
        <section className={`content-section ${gray}`}>
            {props.children}
        </section>
    )
}