import React from "react";
import { ReactComponent as Ball } from "../../../assets/images/ball.svg";
import { GiArchiveResearch } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { BiStoreAlt } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";

import { ReactComponent as Ball2 } from "../../../assets/images/ball2.svg";
import "./MainPage.css";
function MainPage() {
  return (
    <div className="mainPageOption">
      <img className="mainImg" alt="mainImg" src="image/메인사진.png" />

      <div className="bigString">ABOUT</div>

      {/* <Ball width='100' fill="#2CAF92"/>
      <Ball2 width='1500px' fill="#72D086"/>

      
      <Ball fill="#72D086"/> */}
      <div className="mainExplain">
        {/* <div className='mainRecommend'> */}
        <p>몇가지 응답을 통해</p>
        <p>당신의 생활환경과 관심사에 맞춰 최적화된 식물을 찾아드립니다 </p>
        <p>반려 식물이 집안이나 사무실 분위기를 더 활기차게 만들어 주어</p>
        <p>일상에 건강하고 긍정적인 영향을 드립니다</p>
        <p>이제 새로운 반려식물을 찾아드립니다</p>
        <PiPlant size={50} color="3E4A3D" />
        {/* <div>간단한 설문조사로 식물 육성 환경/주변 환경과 취향 분석</div>

        <div className="mainIcon">
          <GiArchiveResearch size={50} />
        </div>

        <p>2</p>
        <div>답안을 바탕으로 가장 어울리는 가상의 식물 생성</div>
        <div className="mainIcon">
          <PiPlant size={50} />
        </div>

        <p>3</p>
        <div>grup 고유의 식물 사전에서 꿈의 식물과 가장 비슷한 식물 추천</div>
        <div className="mainIcon">
          <PiPlant size={50} />
        </div>

        <p>4</p>
        <div>식물의 판매점 연결</div>
        <div className="mainIcon">
          <BiStoreAlt size={50} />
        </div> */}
      </div>

      <div className="mainRecommend">
        <p className="bigString">
          <p>Plant</p>
          <p>Recommendation</p>
        </p>
        <ul>
          <li>
            <p className='mainTheme'>질문지 응답</p>
            <p className='ThemeExplain'>보여드린 질문지를 선택하합니다</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={100} />
          <li>
            <p className='mainTheme'>개인별 환경설정</p>
            <p className='ThemeExplain'>질문지를 통해 개인별 환경을 설정합니다</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={100} />

          <li>
            <p className='mainTheme'>식물 매칭</p>
            <p className='ThemeExplain'>개인별 환경과 가장 적합한 식물을 매칭합니다</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={100} />

          <li>
            <p className='mainTheme'>식물 추천 완료</p>
            <p className='ThemeExplain'>~~~~~~~~~~~~~~</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={100} />

          <li>
            <p className='mainTheme'>사이트 연결</p>
            <p className='ThemeExplain'></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
