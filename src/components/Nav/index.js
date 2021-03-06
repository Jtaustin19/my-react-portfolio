import React from 'react';
import './assets/css/style.css';

const Nav = (props) => {
    const tabs = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <nav>
            <div className="nav-container">
                {tabs.map(tab => (
                    <div
                        className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                        key={tab}
                    >
                        <a
                            href={`#${tab.toLowerCase()}`}
                            onClick={() => props.handlePageChange(tab)}
                        >
                            {tab}
                        </a>
                    </div>

                ))}
            </div>
        </nav>
    );
}

export default Nav;