import { Image } from "react-bootstrap";
import stargazing from '../img/stargazing.gif';
function About() {
    return (
        <div className="section">
            <div className="home about">
                <h1>
                    About The Space Noob
                </h1>
                <p>
                    I'm just someone who recently got interested in stargazing and all things space and astronomy. 
                    All I want is to learn more about it at my own pace, no pressure. I'm still a noob :)
                </p>
                <Image id="stargazing" src={stargazing} thumbnail />
            </div>
        </div>
    )
}

export default About;