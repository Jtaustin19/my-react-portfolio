  import React from 'react';
import resume from './assets/resume/JoshAustinResume.pdf'
import './assets/css/style.css';

const Resume = () => {

    return (
        <section>
            <h2 id="resume">
                My Resume
            </h2>
            <div>
                <h3>Proficiencies</h3>
                <div className="proficiency-container">
                    <div className="bar-container">
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">Javascript</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty">
                                <div className="tag">React</div>
                            </div>
                            <div className="percentage">80%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">HTML</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty-five">
                                <div className="tag">CSS</div>
                            </div>
                            <div className="percentage">85%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">Node.js</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty-five">
                                <div className="tag">MongoDB</div>
                            </div>
                            <div className="percentage">85%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty">
                                <div className="tag">Sequelize</div>
                            </div>
                            <div className="percentage">80%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill seventy">
                                <div className="tag">MySQL</div>
                            </div>
                            <div className="percentage">70%</div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="resume-link" href={resume} target="_blank" rel="noreferrer">Check out my resume here!</a>
        </section>
    );
}

export default Resume;