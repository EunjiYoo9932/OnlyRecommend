import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import './CrawlingPage.css';

function CrawlingPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  
  const searchName = async (e) => {
    try {
      const response = await axios.post("http://localhost:4000/comments", { searchKeyword });
      // 검색하려는 꽃 넘겨주는 api
      
      setSearchKeyword(response.data);
      console.log(searchKeyword);

    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const onSubmit = async (e) => {
    searchName();
    navigate('/CrawlingResultPage');
  }
        
  return(
    <div className='crawlingResult'>
      <form className='crawlingForm' >
        <input 
          className='crawlingInput' 
          placeholder='찾으시는 식물을 입력해주세요!'
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <input className='crawlingButton' 
          type="submit"
          onClick={onSubmit} 
        />        
      </form>
    </div>
  )
}

export default CrawlingPage;