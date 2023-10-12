import React, { useState } from "react";
import "./IntroducePage.css";
import { BsGithub } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { DiAws } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";

import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNetlify } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";

import { BiLogoNodejs } from "react-icons/bi";

function Introduce() {
  const teamMembers = [
    {
      name: "손현지",
      position: "팀장",
      use: "Aws, Java, SpringBoot, MySql",
      role: "Backend Developer",

      github: "https://github.com/sonhyunji",
    },
    {
      name: "유은지",
      position: "팀원",
      use: "Js, React, Netlify, NodeJs",
      role: "Frontend Developer",
      github: "https://github.com/EunjiYoo9932",
    },
    {
      name: "변유빈",
      position: "팀원",
      img: "image/현지.jpg",
      use: "Aws, Java, SpringBoot, MySql",

      role: "Backend Developer",
      github: "https://github.com/bini302",
    },

    {
      name: "김민우",
      position: "팀원",
      role: "Frontend Developer",
      use: "Html, Css",
      github: "https://github.com/kmw1122",
    },
  ];

  return (
    <div className="recommendStart">
      <div className="recommendStartMain2">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div>
              <p className='memberPosition'>{member.position}</p>
              <BsFillPersonFill size={80} />
              
              <h2>{member.name}</h2>
              {/* <img
              className="introduceImg"
              src={member.img}
              alt="IntroduceImg"
            ></img> */}
          
              <p className='memberPosition1'>{member.role}</p>
              
              {member.use.split(", ").map((language, idx) => {
                if (language === "Aws") {
                  return <DiAws key={idx} size={50} />;
                } else if (language === "Java") {
                  return <FaJava key={idx} size={50} />;
                }else if (language === "Js") {
                  return <BiLogoJavascript key={idx} size={50} />;
                }else if (language === "React") {
                  return <BiLogoReact key={idx} size={50} />;
                }else if (language === "Netlify") {
                  return <BiLogoNetlify key={idx} size={50} />;
                }else if (language === "NodeJs") {
                  return <BiLogoNodejs key={idx} size={50} />;
                }else if (language === "SpringBoot") {
                  return <SiSpring key={idx} size={40} />;
                }else if (language === "MySql") {
                  return <GrMysql key={idx} size={40} />;
                }else if (language === "Html") {
                  return <BiLogoHtml5 key={idx} size={50} />;
                }else if (language === "Css") {
                  return <BiLogoCss3 key={idx} size={50} />;
                }
                // 추가적인 언어에 대한 아이콘 처리를 여기에 추가할 수 있습니다
              })}
            </div>
            <a href={member.github} target="_blank" rel="github">
              GitHub
              <BsGithub />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduce;
