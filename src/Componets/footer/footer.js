import React from 'react';
import '../../index.css'

function Footer() {

    return (



        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 fixed-bottom mb-0">
            <div className="col-md-4 d-flex align-items-center">
                <span className="text-white me-2 text-decoration-none lh-1">&copy; 2022</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white me-2 text-decoration-none lh-1">
                <li className="ms-3"><a href="https://github.com/Jendevane">GitHub Portfolio</a></li>
                <li className="ms-3"><a href="https://www.linkedin.com/">LinkedIn profile</a></li>
        
            </ul>

        </footer>

    )
}

export default Footer;

