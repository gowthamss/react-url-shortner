import React from "react";
import "./statastics.styles.css";
import StatasticsList from "./statastics-list/statastics-list.component";
import brandRecognition from "../../../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../../../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../../../assets/images/icon-fully-customizable.svg";

const content = [
    [
        brandRecognition,
        "Brand Recognition",
        `Boost your brand recognition with each click. Generic links
don't mean a thing. Branded links help instil confidence in your
content.`,
    ],
    [
        detailedRecords,
        "Detailed Reports",
        `Gain insights into who is clicking your links. Knowing when and
where people engage with your content helps inform better
decisions.`,
    ],
    [
        fullyCustomizable,
        "Fully Customizable",
        `Improve brand awareness and content discoverability through
customizable links, supercharching audience engagement.`,
    ],
];

const Statastics = () => (
    <div className="statastics-container">
        <h2 className="statastics-title">Advanced Statastics</h2>
        <p className="description">
            Track how your links are performing across the web with out advanced
            statastics dashboard.
        </p>
        {content.map((cardData) => (
            <StatasticsList cardData={cardData} />
        ))}
    </div>
);

export default Statastics;
