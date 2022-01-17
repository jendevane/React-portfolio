import React from 'react';
import { Project } from "./Project"
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
            <div className='pj lists'>
                {Project.map((item) => (
                     < ProjectL />
                 ))}
                
                
                
            </div>
            
        </div>
    )
}

export default ProjectList
