import React from 'react';
import photo from './assets/images/joshua-pic.png'
import './assets/css/style.css'

const About = () => {

    return (
        <section>
            <h2 id="about">
                About Me
            </h2>
            <div className="about-content">
                <div className="pic-container">
                    <img className="bio-pic" src={photo} alt="Josh with his boss" />
                </div>
                <p className="bio-text">
                    Hello! My name is Joshua Austin and I am a full stack web developer located in Green Bay, WI.
                    I have a keen sense when it comes to developing and debugging.
                    A fitting motto I live by is "You always pass failure on the way to success."
                </p>
            </div>
        </section>
    );
}

export default About;