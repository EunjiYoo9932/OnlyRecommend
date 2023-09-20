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
        <p>1</p>
        <div>간단한 설문조사로 식물 육성 환경/주변 환경과 취향 분석</div>

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
        </div>
      </div>

      <div className="mainRecommend">
        <p className='bigString'>
          <p>Plant</p>
          <p>Recommendation</p>

        </p>
        <ul>
          <li>
            <p>질문지</p>
            <p>선택</p>
          </li>
          <BsArrowRightCircle color='#1E697A' size={30}/>
          <li>
            <p>개인별</p>
            <p>환경설정</p>
          </li>
          <BsArrowRightCircle  color='#1E697A' size={30}/>

          <li>
            <p>식물</p>
            <p>매칭</p>
          </li>
          <BsArrowRightCircle  color='#1E697A' size={30}/>

          <li>
            <p>식물</p>
            <p>추천 완료</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
