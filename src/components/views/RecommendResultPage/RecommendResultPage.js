import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecommendResultPage.css';
import Modal from 'react-modal';
import { useNavigate  } from 'react-router-dom';

// axios.defaults.withCredentials = true;

function RecommendResultPage() {

    const [result, setResult] = useState(['']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlantName, setSelectedPlantName] = useState('');
    const [selectedPlants, setSelectedPlants] = useState([''])

    const navigate = useNavigate();

    const openModal = (plantsName) => {
        setSelectedPlantName(plantsName);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPlantName('');
        setModalIsOpen(false);
    };

    useEffect(() => {

        const plantsData = async () => {
            try {
                const response = await axios.get("/api/resulting");
                //백엔드랑 맞춰야 되는 부분
                
                setSelectedPlants(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching additional data:', error);
            }
        };
        plantsData();
    }, []);

    return (
        <div className='recommend'>      
            <div>
                <ul className='recommendResultul'>
                    <li className='recommendResultli'>온도 : {selectedPlants[0].plantsTemperature}</li>
                    <li className='recommendResultli'>조도 : {selectedPlants[0].plantsLight}</li>
                    <li className='recommendResultli'>물 : {selectedPlants[0].plantsWater}</li>
                    <li className='recommendResultli'>레벨 : {selectedPlants[0].plantsLevel}</li>
                </ul>
            </div>

            
            {selectedPlants.map((comments, index) => (
                <><div className='recommendResultWi' key={comments.index}>{index+1}위</div>
                <div className='recommendResultRanking' key={comments.index} onClick={() => openModal(comments.plantsName)}>{comments.plantsName}</div></>
            ))}
            <button className='recommendResultButton' onClick={() => navigate('/RecommendPage')}>질문지로</button>


            <Modal className='recommendResultModal' isOpen={modalIsOpen}>
                {/* <div>Selected Plant: {selectedPlants.plantsName}</div> */}
                {selectedPlants.map((plant) => {
                    if (plant.plantsName === selectedPlantName) {
                        return (
                            <div key={plant.id}>
                            <ul className='plantExplain'>
                                <li className='plantExplainTitle'>식물명</li>
                                <li>{plant.plantsName}</li>
                                <li className='plantExplainTitle'>사진</li>
                                <li>{plant.plantsPic}</li>
                                <li className='plantExplainTitle'>난이도</li>
                                <li >{plant.plantsLevel}</li>
                                <li className='plantExplainTitle'>물</li>
                                <li>{plant.plantsWater}</li>
                                <li className='plantExplainTitle'>효과</li>
                                <li>{plant.plantsEffect}</li>
                                <li className='plantExplainTitle'>주의점</li>
                                <li>{plant.plantsNotice}</li>
                            </ul>
                            </div>
                        );
                        }
                        return null;
                    })}
                <button className='modalCloseButton' onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}

export default RecommendResultPage;