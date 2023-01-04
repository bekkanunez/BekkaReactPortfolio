import React from 'react';


export default function Resume() {
    return (
        <section>
            <div className='resume-request'>
                <h1>For resume requests email <a href="https://www.gmail.com">rebnunez@gmail.com </a> </h1>
            </div>
            <div>
                <h1 className='front-end'>Front-End Proficiencies</h1>
                <ul className='front-end'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h1 className='back-end'>Back-end Proficiencies</h1>
                <ul className='back-end'>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}