import React from 'react'
import "./pro.css"

function Project({ img, link }) {
    return (


        <div className='p card' id='portfolio'>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>

        </div>

    )
}

export default Project
