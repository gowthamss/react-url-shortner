import React from "react";
import "./statastics-list.styles.css";
import { LogoAndCardHeading } from "../../../styled-components/styled.component";

const StatasticsList = ({ cardData, index }) => (
    <div className={`card`}>
        <div className="image-container">
            <img src={cardData[0]} alt="icon" />
        </div>
        <h3 className="card-heading">{cardData[1]}</h3>
        <p className="card-content">{cardData[2]}</p>
    </div>
);

export default StatasticsList;
