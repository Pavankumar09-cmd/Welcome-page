import React from 'react';
import '../styles/SuccessPopup.css';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>🎉 <span>Congratulations!</span></h2>
        <p>Your account has been created<br />Successfully</p>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
