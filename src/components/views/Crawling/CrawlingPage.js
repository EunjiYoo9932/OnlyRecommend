//현지껄로 바꿨음

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CrawlingPage.css";
import { PiMagnifyingGlassBold } from "react-icons/pi";

function CrawlingPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [entities, setEntities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("searchResult") != null) {
      try {
        setEntities(JSON.parse(localStorage.getItem("searchResult")));
        setIsSearching(false);
        console.log(entities);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      } finally {
        setIsSearching(false);
        // localStorage.removeItem("searchResult");
      }
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true); // 검색 중임을 표시

    try {
      // const response = await axios.post("/api/searchSubmit", searchKeyword, {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      const response = await axios.get(
        "http://localhost:4000/crawlingData",
        searchKeyword,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //프론트 테스트 api

      setEntities(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching additional data:", error);
    } finally {
      setIsSearching(false); // 검색이 완료되면 검색 중 상태를 해제
    }
  };

  return (
    <div className="recommendStart">
      <div className="recommendStartMain">
        <form className="crawlingForm" onSubmit={onSubmit}>
          <input
            className="crawlingInput"
            placeholder="찾으시는 식물을 입력해주세요!"
            value={searchKeyword}
            onChange={handleInputChange}
          />

          <label className="input-label">
            <PiMagnifyingGlassBold />
            <input
              className="crawlingButton"
              type="submit"
              value={isSearching ? "검색 중..." : "검색"}
              disabled={isSearching}
            />
          </label>
        </form>

        {entities.length === 0 && !isSearching && <p>검색 결과가 없습니다</p>}

        {/* 검색 결과를 표시 */}
        {entities.length > 0 && !isSearching && (
          <div className="entity-list">
            {entities.map((entity, index) => (
              <div className="entity" key={index}>
                <a href={entity.storeLink} target="blank">
                  <img
                    className="entity-image"
                    src={entity.imgUrl}
                    alt={entity.storeName}
                  />
                </a>
                <div className="entity-content">
                  <div className='entityStore'>{entity.storeTitle}</div>
                  <div>가격 : {entity.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CrawlingPage;
