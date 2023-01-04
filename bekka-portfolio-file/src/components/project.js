import React from 'react';
import { FaGithub } from 'react-icons/fa';


export default function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={require(`/src/assets/${name}.jpg`).default}
        alt={name}
        className="project-pic"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>
          <a href={repo}>
            <i> <FaGithub size="2rem"/></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

