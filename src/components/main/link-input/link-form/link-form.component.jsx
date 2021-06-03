import React from "react";
import "./link-form.styles.css";
import {
    MainInput,
    ActionButton,
} from "../../../styled-components/styled.component";

const LinkForm = ({ handleShortLink, onLinkChange, error, btnText }) => (
    <form className="input-btn-container" onSubmit={handleShortLink}>
        <div className="link-input-container">
            <MainInput
                className={`${!error ? "" : "error"} shorten-input`}
                type="text"
                name="shorten-link"
                placeholder="Shorten a link here..."
                onChange={onLinkChange}
            ></MainInput>
            {error.length ? (
                <span
                    style={{
                        color: "hsl(0, 87%, 67%)",
                        fontStyle: "italic",
                        fontSize: "12px",
                    }}
                >
                    {error}
                </span>
            ) : null}
        </div>
        <ActionButton
            className={`${
                btnText.toLowerCase().includes("shortening") ? "disabled" : ""
            } shorten-btn`}
            type="submit"
        >
            {btnText}
        </ActionButton>
    </form>
);

export default LinkForm;
