import React from 'react'
import { ReactComponent as Ball } from '../../../assets/images/ball.svg';

import { ReactComponent as Ball2 } from '../../../assets/images/ball2.svg';
import './MainPage.css';
function MainPage() {
  return (
    <div className='mainPageOption'>
      
      <img className="mainImg" alt="mainImg" src="image/메인사진.png" />

      <div className='bigString'>
        ABOUT
      </div>


      <Ball width='100' fill="#2CAF92"/>
      <Ball2 width='1500px' fill="#72D086"/>

      
      <Ball fill="#72D086"/>
      <div className='mainRecommend'>
        추천 소개 공간
      </div>      
      
      <div className='mainCrawling'>
        크롤링 소개 공간
      </div>


    

    </div>
  );
}


export default MainPage