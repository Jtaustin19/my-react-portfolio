import React from 'react';
import github from './assets/images/github.svg';
import linkedin from './assets/images/linkedin.svg';
import stackOverflow from './assets/images/stackoverflow.svg';
import './assets/css/style.css';

const Footer = () => {

    return (
        <footer>
            <a
                href="https://github.com/Jtaustin19"
                target="_blank"
                rel="noreferrer"
            >
                <img className="logo" alt="github logo" src={github} />
            </a>

            <a
                href="https://www.linkedin.com/in/josh-austin-749904190/"
                target="_blank"
                rel="noreferrer"
            >
                <img className="logo" alt="linked in logo" src={linkedin} />
            </a>

            <a
                href="https://stackoverflow.com/users/14645969/Jtaustin19"
                target="_blank"
                rel="noreferrer"
            >
                <img className="logo" alt="stack overflow logo" src={stackOverflow} />
            </a>
        </footer>
    );
}

export default Footer;