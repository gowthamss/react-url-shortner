import React from "react";
import { MainInput, ActionButton } from "../styled-components/styled.component";
import "./link-input.styles.css";

const LinkInput = () => {
    return (
        <div className="input-container">
            <div>
                <MainInput
                    className="shorten-input"
                    placeholder="Shorten a link here..."
                ></MainInput>
                <ActionButton className="shorten-btn">Shorten It!</ActionButton>
            </div>
        </div>
    );
};

export default LinkInput;
