import React, { useEffect } from 'react';
import './PopupMessage.css';

const PopupMessage = ({ message, onClose }) => {
  
  useEffect(() => {
    const timer = setTimeout(onClose, 1000); // Close the pop-up after 3 seconds
    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [onClose]);
  return (
    <div className="popup-message">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupMessage;