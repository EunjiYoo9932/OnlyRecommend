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
      const response = await axios.get("http://localhost:4000/crawlingData");
      //크롤링 검색 결과 받는 api

      setEntities(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/comments", { searchName: searchKeyword });
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
            <a href={entity.storeLink}>
              <img className="entity-image" src={entity.imageUrl} alt={entity.storeName} />
            </a>
            <div className="entity-content">
              <h5>{entity.storeName}</h5>
              <h5>{entity.storeTitle}</h5>
              <p>가격: {entity.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrawlingResultPage;

// //백엔드는 이걸로 함
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './CrawlingPage.css';

// function CrawlingPage() {
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [entities, setEntities] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   const handleInputChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/crawlingData");
//       //크롤링 검색 결과 받는 api

//       setEntities(response.data);
//       console.log(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setIsSearching(true); // 검색 중임을 표시

//     try {
//       const response = await axios.post("/api/searchSubmit", searchKeyword, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       setEntities(response.data);
//     } catch (error) {
//       console.error('Error fetching additional data:', error);
//     } finally {
//       setIsSearching(false); // 검색이 완료되면 검색 중 상태를 해제
//     }
//   };

//   return (
//       <div className='crawlingResult'>
//         <form className='crawlingForm' onSubmit={onSubmit}>
//           <input
//               className='crawlingInput'
//               placeholder='찾으시는 식물을 입력해주세요!'
//               value={searchKeyword}
//               onChange={handleInputChange}
//           />
//           <input
//               className='crawlingButton'
//               type="submit"
//               value={isSearching ? "검색 중..." : "검색"}
//               disabled={isSearching}
//           />
//         </form>

//         {/* 검색 결과를 표시 */}
//         {entities.length > 0 && !isSearching && (
//             <div className="entity-list">
//               {entities.map((entity, index) => (
//                   <div className="entity" key={index}>
//                     <a href={entity.storeLink}>
//                       <img className="entity-image" src={entity.imageUrl} alt={entity.storeName} />
//                     </a>
//                     <div className="entity-content">
//                       <h5>{entity.storeName}</h5>
//                       <h5>{entity.storeTitle}</h5>
//                       <p>가격: {entity.price}</p>
//                     </div>
//                   </div>
//               ))}
//             </div>
//         )}
//       </div>
//   );
// }

// export default CrawlingPage;