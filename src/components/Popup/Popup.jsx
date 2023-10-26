import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import htmlImage from '../../assets/htmlImage.png';
import arrowRight from '../../assets/arrow-right.png'
import './Popup.css'

const PopupModel = ({setInfo}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      rank: null,
      percentile: null,
      currentScore: null
    })
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    const submitHandler = (close) =>{
      if(formData.rank !== null && formData.percentile !== null && formData.currentScore !== null && formData.percentile <= 100 && formData.currentScore <=15){
        setInfo(formData)
        close();
        setFormData({
          rank: null,
          percentile: null,
          currentScore: null
        })
      }
    }

    const popupContentStyle = {
        borderRadius: '10px', 
        background: '#ffffff', 
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', 
        height: '521px',
        width: window.innerWidth <= 768 ? '90%' : '880px', 
      
        '@media (maxWidth: 768px)': {
          width: '90%', // Width for mobile screens
        },
      };
      
  
    return (
      <div>
        <button onClick={togglePopup}>Update</button>
  
        <Popup open={isOpen} 
        closeOnDocumentClick
         onClose={togglePopup}
         contentStyle={popupContentStyle}
         >
          {(close) => (
            <div className="popup-container">
              <div className="heading">
                <h1>Update Scores</h1>
                <img src={htmlImage} alt="html" />
              </div>
              <form>
                <div className="inpCon">
                  <label>
                    <div>1</div>
                    <span>Update your </span>
                    <span>rank</span>
                  </label>
                  <input type="number" onChange={(e)=>{setFormData({...formData, rank: e.target.value})}} />
                </div>

                <div className="inpCon">
                  <label>
                    <div>2</div>
                    <span>Update your </span>
                    <span>percentile</span>
                  </label>
                  <input type="number" onChange={(e)=>{setFormData({...formData, percentile: e.target.value})}} />
                </div>

                <div className="inpCon">
                  <label>
                    <div>3</div>
                    <span>Update your </span>
                    <span>current score (out of 15)</span>
                  </label>
                  <input type="number" onChange={(e)=>{setFormData({...formData, currentScore: e.target.value})}} />
                </div>
              </form>
              <div className="btns">
                <button onClick={close}>Cancel</button>
                <button onClick={()=>{submitHandler(close)}}>Save <img src={arrowRight} alt="" /></button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  };
  
  export default PopupModel;
  