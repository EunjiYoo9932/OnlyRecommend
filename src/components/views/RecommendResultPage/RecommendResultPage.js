import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecommendResultPage.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

// axios.defaults.withCredentials = true;

function RecommendResultPage() {
  const [result, setResult] = useState([""]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlantName, setSelectedPlantName] = useState("");
  const [selectedPlants, setSelectedPlants] = useState([""]);

  const navigate = useNavigate();

  const openModal = (plantsName) => {
    setSelectedPlantName(plantsName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPlantName("");
    setModalIsOpen(false);
  };

  useEffect(() => {
    const plantsData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/plantsData");
        //백엔드랑 맞춰야 되는 부분

        setSelectedPlants(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    };
    plantsData();
  }, []);

  function getTemperatureText(temperature) {
    return `식물을 생육하는데 적절한 온도는 ${temperature}도 입니다.`;
  }

  function getLightText(light) {
    if (light >= 31) {
      return "해를 매우 좋아하는 식물입니다.";
    } else if (light >= 21) {
      return "해를 좋아합니다.";
    } else if (light >= 11) {
      return "직사광선을 좋아하지 않습니다";
    } else {
      return "해가 들지 않아도 잘 자랍니다.";
    }
  }

  function getWaterText(water) {
    if (water >= 31) {
      return "겉흙이 마르면 물을 듬뿍 줘야 합니다.";
    } else if (water >= 21) {
      return "흙을 축축하게 유지해 줘야 합니다.";
    } else if (water >= 11) {
      return "흙을 촉촉하게 유지해 줘야 합니다.";
    } else {
      return "건조에 강합니다. 흙이 바짝 말랐을때 물을 줘야 합니다.";
    }
  }

  function getLevelText(level) {
    if (level >= 28) {
      return "식물을 생육하는데 난이도가 어렵습니다.";
    } else if (level >= 14) {
      return "식물을 생육하는데 난이도가 보통입니다.";
    } else {
      return "식물을 생육하는데 난이도가 쉽습니다.";
    }
  }

  return (
    <div className="recommend">
      <div className="recommendResult">
        <ul className="recommendResultul">
          <p>나의 반려식물은</p>
          <p>1등 사진 넣고 싶음</p>




          <li className="recommendResultli">
            온도 : {getTemperatureText(selectedPlants[0].plantsTemperature)}
          </li>
          <li className="recommendResultli">
            조도 : {getLightText(selectedPlants[0].plantsLight)}
          </li>
          <li className="recommendResultli">
            물 : {getWaterText(selectedPlants[0].plantsWater)}
          </li>
          <li className="recommendResultli">
            난이도 : {getLevelText(selectedPlants[0].plantsLevel)}
          </li>
        </ul>

        {selectedPlants.map((comments, index) => (
          <>
            <div className="recommendResultWi" key={comments.index}>
              {index + 1}위
            </div>
            <div
              className="recommendResultRanking"
              key={comments.index}
              onClick={() => openModal(comments.plantsName)}
            >
              {comments.plantsName}
            </div>
          </>
        ))}
        <button
          className="recommendResultButton"
          onClick={() => navigate("/RecommendStartPage")}
        >
          첫페이지로
        </button>
      </div>

      <Modal className="recommendResultModal" isOpen={modalIsOpen}>
        {/* <div>Selected Plant: {selectedPlants.plantsName}</div> */}
        {selectedPlants.map((plant) => {
          if (plant.plantsName === selectedPlantName) {
            return (
              <div key={plant.id}>
                <ul className="plantExplain">
                  <li className="plantExplainName">{plant.plantsName}</li>
                  <li className='plantExplainImg'>
                    <img
                      src={plant.plantsPic}
                      alt="plantImg"
                      width={100}
                      height={100}
                    ></img>
                  </li>
                  <li className="plantExplainTitle">온도</li>
                  <li className='plantExplainList'>{getTemperatureText(plant.plantsTemperature)}</li>
                  <li className="plantExplainTitle">조도</li>
                  <li className='plantExplainList'>{getLightText(plant.plantsLight)}</li>
                  <li className="plantExplainTitle">물</li>
                  <li className='plantExplainList'>{getWaterText(plant.plantsWater)}</li>
                  <li className="plantExplainTitle">난이도</li>
                  <li className='plantExplainList'>{getLevelText(plant.plantsLevel)}</li>
                  <li className="plantExplainTitle">효과</li>
                  <li className='plantExplainList'>{plant.plantsEffect}</li>
                  <li className="plantExplainTitle">주의점</li>
                  <li className='plantExplainList'>{plant.plantsNotice}</li>
                  {/* <input className='crawlingButton'
                        type="submit"
                        onClick={onSubmit}
                  />
                  <button className='resultCrawlingButton' onClick={resultCrawling(plant.plantsName)}>판매정보 보기</button> */}
                </ul>
              </div>
            );
          }
          return null;
        })}
        <button className="modalCloseButton" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
}
//     return (
//         <div className='recommend'>
//             <div>
//                 <ul className='recommendResultul'>
//                     <li className='recommendResultli'>온도 : {selectedPlants[0].temperature}</li>
//                     <li className='recommendResultli'>조도 : {selectedPlants[0].light}</li>
//                     <li className='recommendResultli'>물 : {selectedPlants[0].water}</li>
//                     <li className='recommendResultli'>레벨 : {selectedPlants[0].level}</li>
//                 </ul>
//             </div>

//             {selectedPlants.map((comments, index) => (
//                 <><div className='recommendResultWi' key={comments.index}>{index+1}위</div>
//                 <div className='recommendResultRanking' key={comments.index} onClick={() => openModal(comments.plantsName)}>{comments.plantsName}</div></>
//             ))}
//             <button className='recommendResultButton' onClick={() => navigate('/RecommendPage')}>질문지로</button>

//             <Modal className='recommendResultModal' isOpen={modalIsOpen}>
//                 {/* <div>Selected Plant: {selectedPlants.plantsName}</div> */}
//                 {selectedPlants.map((plant) => {
//                     if (plant.plantsName === selectedPlantName) {
//                         return (
//                             <div key={plant.id}>
//                             <ul className='plantExplain'>
//                                 <li className='plantExplainTitle'>식물명</li>
//                                 <li>{plant.plantsName}</li>
//                                 <li className='plantExplainTitle'>사진</li>
//                                 <li>{plant.plantsPic}</li>
//                                 <li className='plantExplainTitle'>난이도</li>
//                                 <li >{plant.plantsLevel}</li>
//                                 <li className='plantExplainTitle'>물</li>
//                                 <li>{plant.plantsWater}</li>
//                                 <li className='plantExplainTitle'>효과</li>
//                                 <li>{plant.plantsEffect}</li>
//                                 <li className='plantExplainTitle'>주의점</li>
//                                 <li>{plant.plantsNotice}</li>
//                             </ul>
//                             </div>
//                         );
//                         }
//                         return null;
//                     })}
//                 <button className='modalCloseButton' onClick={closeModal}>close</button>
//             </Modal>
//         </div>
//     );
// }

export default RecommendResultPage;
