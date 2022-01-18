import React from 'react';
import Project  from "../Projects/Project.js"
import './pro.css';

import {ProjectL} from "../../helpers/ProjectL"


function ProjectList() {
    return (
        <div className='pj' id= "PORTFOLIO">
            <div className='pj-texts'>
                <h1 className='pj-title'> Creative Projects</h1>
                <p className='pj-desc'>
                    This is my work I've created over the course of my bootcamp. 
                </p>

            </div>
            <div>
                {ProjectL.map((item) => (
                    < Project key={item.id} img={item.img} link={item.link}/>
                 ))}
                
                
                
            </div>
            
        </div>
    )
}

export default ProjectList
