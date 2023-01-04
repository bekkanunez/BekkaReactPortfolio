import React, { useState } from 'react';
import Project from "../components/Project";


function Portfolio() {
    const [projects] = useState([
      {
        name: 'meeting-minutes',
        description: 'MERN stack',
        link: "https://github.com/bekkanunez",
        repo: "https://github.com/bekkanunez/Meeting_Minutes"
      },
      {
        name: 'travel-hacker',
        description: 'Server Side API',
        link: "https://github.com/bekkanunez",
        repo: "https://github.com/bekkanunez/Travel_Hacker"
      },
      {
        name: 'note-taker',
        description: 'Express JS',
        link: "https://github.com",
        repo: "https://github.com/bekkanunez/Challenge11Assignment"
      },
      {
        name: 'readme',
        description: 'Inquirer',
        link: "https://github.com/bekkanunez",
        repo: "https://github.com/bekkanunez/Challenge7-9-Assignment"
      },
      {
        name: 'social-networking-thought',
        description: 'NoSQL API',
        link: "https://github.com/bekkanunez",
        repo: "https://github.com/bekkanunez/The_Social_Networking_Thought"
      },
      {
        name: 'passing-notes-chatapp',
        description: 'Model View Controller',
        link: "https://github.com/bekkanunez",
        repo: "https://github.com/bekkanunez/passing-notes-chatapp"
      },
    ]);
  
    return (
      <div>
        <h1 class="portfolio">Portfolio</h1>
        <div className="flex-row">
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={"project" + idx}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;