import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendStartPage.css";
import { PiPottedPlantDuotone } from "react-icons/pi";


function RecommendStartPage() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    navigate("/RecommendPage");
  };

  return (
    <div className="recommendStart">
      <div className="recommendStartMain">
        <div className="recommendIconContainer">
          {/* 아이콘을 감싸는 요소 */}
          <PiPottedPlantDuotone size={100} />
        </div>
        <div className='recommendExplain'>
          <p>간단한 설문을 통해</p>
          <p>
            사용자의 주변 환경을 분석하여
          </p>
          <p>
            사용자에게 가장 어울리는 식물을 추천해드립니다!
          </p>
          </div>
        <button className="recommendStartButton" onClick={onSubmit}>
          Start
        </button>
      </div>
    </div>
  );
}

export default RecommendStartPage;
