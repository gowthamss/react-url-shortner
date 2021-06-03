import React from "react";
import { ActionButton } from "../../../styled-components/styled.component";
import "./links.styles.css";

const Links = ({ shortLink, copyState, onCopyClick }) => (
    <div className="result-container">
        <div className="provided-link">{shortLink.original_link}</div>
        <div className="long-short-btn">
            <span className="generated-short-link">
                {shortLink.full_short_link2}
            </span>
            <ActionButton className="copy-btn" onClick={onCopyClick}>
                {copyState ? "Copied" : "Copy"}
            </ActionButton>
        </div>
    </div>
);

export default Links;
