import React from "react";
import { PiPlant } from "react-icons/pi";
import { BsArrowRightCircle } from "react-icons/bs";

import "./MainPage.css";
function MainPage() {
  return (
    <div className="mainPageOption">
      <img className="mainImg" alt="mainImg" src="image/메인사진.png" />

      <div className="bigString">ABOUT</div>
      <div className="mainExplain">
        <p>몇가지 응답을 통해</p>
        <p>당신의 생활환경과 관심사에 맞춰 최적화된 식물을 찾아드립니다 </p>
        <p>반려 식물을 통해 집안이나 사무실 분위기를 더 활기차게 바뀌며</p>
        <p>일상에 건강하고 긍정적인 영향을 드립니다</p>
        <p>이제 당신에게 알맞는 새로운 반려식물을 추천해드리겠습니다</p>
        <PiPlant size={50} color="3E4A3D" />
      </div>

      <div className="mainRecommend">
        <p className="bigString">
          <p>Plant</p>
          <p>Recommendation</p>
        </p>
        <ul>
          <li>
            <p className='mainTheme'>질문지 응답</p>
            <p className='ThemeExplain'>몇 가지 질문을 통해 식물 선택에 필요한 정보를 수집</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={150} />
          <li>
            <p className='mainTheme'>개인별 환경설정</p>
            <p className='ThemeExplain'>제공한 정보를 기반으로 개인별 환경설정을 수행</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={150} />

          <li>
            <p className='mainTheme'>식물 매칭</p>
            <p className='ThemeExplain'>개인별 환경설정을 기반으로 적합한 식물을 매칭</p>
          </li>
          <BsArrowRightCircle color="#1E697A" size={150} />

          <li>
            <p className='mainTheme'>식물 추천 완료</p>
            <p className='ThemeExplain'>식물에 관한 정보를 제공</p>
            

          </li>
          <BsArrowRightCircle color="#1E697A" size={150} />

          <li>
            <p className='mainTheme'>사이트 연결</p>
            <p className='ThemeExplain'>식물을 구매할 수 있는 온라인 사이트 링크를 제공</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
