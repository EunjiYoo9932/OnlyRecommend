//현지껄로 바꿨음

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrawlingPage.css';

function CrawlingPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [entities, setEntities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true); // 검색 중임을 표시

    try {
      const response = await axios.post("/api/searchSubmit", searchKeyword, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setEntities(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    } finally {
      setIsSearching(false); // 검색이 완료되면 검색 중 상태를 해제
    }
  };

  return (
      <div className='crawlingResult'>
        <form className='crawlingForm' onSubmit={onSubmit}>
          <input
              className='crawlingInput'
              placeholder='찾으시는 식물을 입력해주세요!'
              value={searchKeyword}
              onChange={handleInputChange}
          />
          <input
              className='crawlingButton'
              type="submit"
              value={isSearching ? "검색 중..." : "검색"}
              disabled={isSearching}
          />
        </form>

        {/* 검색 결과를 표시 */}
        {entities.length > 0 && !isSearching && (
            <div className="entity-list">
              {entities.map((entity, index) => (
                  <div className="entity" key={index}>
                    <a href={entity.storeLink}>
                      <img className="entity-image" src={entity.imgUrl} alt={entity.storeName} />
                    </a>
                    <div className="entity-content">
                      <h5>{entity.storeName}</h5>
                      <h5>{entity.storeTitle}</h5>
                      <p>가격: {entity.price}</p>
                    </div>
                  </div>
              ))}
            </div>
        )}
      </div>
  );
}

export default CrawlingPage;


// import React, { useState ,useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate  } from 'react-router-dom';
// import './CrawlingPage.css';

// function CrawlingPage() {
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };
  
//   const searchName = async (e) => {
//     try {
//       const response = await axios.post("http://localhost:4000/comments", { searchKeyword });
//       // 검색하려는 꽃 넘겨주는 api
      
//       setSearchKeyword(response.data);
//       console.log(searchKeyword);

//     } catch (error) {
//       console.error('Error fetching additional data:', error);
//     }
//   };

//   const onSubmit = async (e) => {
//     searchName();
//     navigate('/CrawlingResultPage');
//   }
        
//   return(
//     <div className='crawlingResult'>
//       <form className='crawlingForm' >
//         <input 
//           className='crawlingInput' 
//           placeholder='찾으시는 식물을 입력해주세요!'
//           value={searchKeyword}
//           onChange={handleInputChange}
//         />
        
//         <input className='crawlingButton' 
//           type="submit"
//           onClick={onSubmit} 
//         />        
//       </form>
//     </div>
//   )
// }

// export default CrawlingPage;

