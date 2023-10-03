import React, { useState } from "react";
import "./IntroducePage.css";
import { BsGithub } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
function Introduce() {
  const teamMembers = [
    {
      name: "유은지",
      role: "Frontend Developer",
      github: "https://github.com/EunjiYoo9932",
    },
    {
      name: "변유빈",
      role: "Backend Developer",
      github: "https://github.com/bini302",
    },
    {
      name: "손현지",
      role: "Backend Developer",
      github: "https://github.com/sonhyunji",
    },
    {
      name: "김민우",
      role: "Frontend Developer",
      github: "https://github.com/kmw1122",
    },
  ];

  return (
    <div className="team-container">

      <div className="team-grid">
      
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <BsFillPersonFill size={45} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub 
              <BsGithub/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduce;
