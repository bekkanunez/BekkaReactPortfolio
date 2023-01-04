import React from 'react';
import { FaFemale } from 'react-icons/fa';

export default function About() {
    return (
        <section className="container">
            <div className="box">
                <div className="icon"> 
                    <h1>About Me</h1>
                    <h1><FaFemale size="3rem"/></h1>
                </div>
                <p>
                    My experience in full stack web development has barely scratched the surface of what is possible. Currently, she is exploring all the different tools she has at her disposal, so that she can be a master developer.  
                </p>    
                <p>
                    Ultimately, she would like to be able to use a combination of all her skills to help others. 
                </p>
            </div>
        </section>
    )
}