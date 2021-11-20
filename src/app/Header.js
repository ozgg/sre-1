import React from "react";
import Figure from "./Figure";
import email from "../images/email.svg";

export default function Header() {
    return(
        <header>
            <Figure/>

            <h1>Maxim Khan-Magomedov</h1>
            <h2>Full-stack developer</h2>

            <div className="contact">
                <a href="https://ozgg.ru" className="website">
                    ozgg.ru
                </a>
                <a href="mailto:maxim.km@gmail.com" className="email">
                    <img src={email} alt=""/>
                    <span>Email</span>
                </a>
            </div>
        </header>
    )
}