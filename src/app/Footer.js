import React from "react";
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import github from "../images/github.svg"

export default function Footer() {
    return (
        <footer>
            <ul className="social">
                <li>
                    <a href="https://twitter.com/dr_von_ozgg">
                        <img src={twitter} alt="Twitter icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com">
                        <img src={facebook} alt="Facebook icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/maximkm">
                        <img src={instagram} alt="Instagram icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ozgg">
                        <img src={github} alt="Github icon"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}