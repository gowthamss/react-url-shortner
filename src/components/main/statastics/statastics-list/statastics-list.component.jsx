import React from "react";
import "./statastics-list.styles.css";

const StatasticsList = ({ cardData, index }) => (
    <div className={`card card${index}`} key={index}>
        <div className="image-container">
            <img src={cardData[0]} alt="icon" />
        </div>
        <h3 className="card-heading">{cardData[1]}</h3>
        <p className="card-content">{cardData[2]}</p>
    </div>
);

export default StatasticsList;
