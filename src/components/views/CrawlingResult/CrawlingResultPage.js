import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CrawlingResultPage.css';
//api 맞추기

function CrawlingResultPage() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [entities, setEntities] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('크롤링 검색결과api');
      //크롤링 검색 결과 받는 api

      setEntities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('크롤링하려는 단어 넣는 api', { searchName: searchKeyword });
      //크롤링하려는 단어 넣는 api

      navigate('/CrawlingResultPage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='crawlingResult'>
      <form className='crawlingForm'>
        <input
          className='crawlingInput'
          placeholder='찾으시는 식물을 입력해주세요!'
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <input
          className='crawlingButton'
          type="submit"
          onClick={onSubmit}
        />
      </form>

      {/* 여기서 크롤링 결과를 표시 */}
      <div className="entity-list">
        {entities.map((entity, index) => (
          <div className="entity" key={index}>
            <img className="entity-image" src={entity.image} alt={entity.storeName} />
            <div className="entity-content">
              <h5>{entity.storeName}</h5>
              <p>가격: {entity.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrawlingResultPage;
