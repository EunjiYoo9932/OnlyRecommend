import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav id="nav">
      {/* <ul id="navId">
        <li>
          <a href="">
            <div></div>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <div></div>
            <span>식물상점</span>
          </a>
        </li>
        <li>
          <a href="">
            <div></div>
            <span>식물추천</span>
          </a>
        </li>
        <li>
          <a href="">
            <div></div>
            <span>게시판</span>
          </a>
        </li>
      </ul> */}
        
        <button className='nav-button'>
          <Link to='/' className="link-style">
            <li>Home</li>
          </Link>
        </button>
        
        <button className='nav-button'>
          <Link to='/RecommendPage' className="link-style">
            <li>추천시스템</li>
          </Link>            
        </button>

        <button className='nav-button'>
          <Link to='/CrawlingPage' className="link-style">
            <li>식물상점</li>
          </Link>
        </button>

        <button className='nav-button'>
          <Link to='/' className="link-style">
            <li>게시판</li>
          </Link>        
        </button>
    </nav>
  );
}

export default Nav