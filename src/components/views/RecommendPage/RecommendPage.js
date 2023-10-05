import React, { useState } from "react";
import qnaList from "../../Data/Data";
import axios from "axios";
import "./RecommendPage.css";
import { useNavigate } from "react-router-dom";

import { TbLeaf } from "react-icons/tb";
function RecommendPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = qnaList[currentQuestionIndex].q;
  const currentAnswers = qnaList[currentQuestionIndex].a;

  const [totalAnswer, setTotalAnswer] = useState({
    answerLevel: 0,
    answerLight: 0,
    answerTemperature: 0,
    answerWater: 0,
  });

  const handleAnswerSelection = (answer) => {
    const updatedAnswer = {
      answerLevel: totalAnswer.answerLevel + (answer.answerLevel || 0),
      answerLight: totalAnswer.answerLight + (answer.answerLight || 0),
      answerTemperature:
        totalAnswer.answerTemperature + (answer.answerTemperature || 0),
      answerWater: totalAnswer.answerWater + (answer.answerWater || 0),
    };

    setTotalAnswer(updatedAnswer);

    if (currentQuestionIndex < qnaList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("No more questions");
      sendResultsToBackend(updatedAnswer);
    }
  };

  const sendResultsToBackend = (answer) => {
    console.log(answer);
    axios
      .post("http://localhost:4000/comments", answer)

      //
      //백엔드
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting answer:", error);
      });
  };

  return (
    <div className="recommend">
      <div className="recommendMain">
        <div className="questionNumber"> Q.{currentQuestionIndex + 1}</div>
        <div className="questionState">
          <div className="NavIconContainer">
            {[...Array(8)].map((_, index) => (
              <TbLeaf
                key={index}
                size={35}
                style={{
                  color:
                    index <= currentQuestionIndex
                      ? 'green' // 현재 질문 인덱스까지는 그린색으로 표시
                      : '#bab9b9', 
                }}
              />
            ))}
          </div>
        </div>
        <div className="recommendQuestion">{currentQuestion}</div>

        <ul className="recommendAnswerList">
          {currentAnswers.map((answer, index) => (
            <li className="recommendAnswer" key={index}>
              <button
                className="answerButton"
                onClick={() => handleAnswerSelection(answer)}
              >
                {answer.answer}
              </button>
            </li>
          ))}
        </ul>
        {currentQuestionIndex === qnaList.length - 1 && (
          <button
            className="submitButton"
            onClick={() => navigate("/RecommendResultPage")}
          >
            제출하기
          </button>
        )}
      </div>
    </div>
  );
}

export default RecommendPage;
