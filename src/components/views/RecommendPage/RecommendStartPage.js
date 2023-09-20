import React, { useState ,useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import './RecommendStartPage';

function RecommendStartPage() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    navigate('/RecommendPage');
  }
        
  return(
    <div className='crawlingStart'>
      <button className='crawlingStartButton' onClick={onSubmit}>
        추천시작하기
      </button>
    </div>
  )
}

export default RecommendStartPage;

