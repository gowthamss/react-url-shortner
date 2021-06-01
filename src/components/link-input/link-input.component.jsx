import React from "react";
import { MainInput, ActionButton } from "../styled-components/styled.component";
import "./link-input.styles.css";

class LinkInput extends React.Component {
    constructor() {
        super();

        this.state = {
            error: "",
            linkContent: "",
            copyState: "Copy",
        };
    }

    onLinkChange = (e) => {
        this.setState({ linkContent: e.target.value, error: "" });
    };

    handleShortLink = () => {
        if (!this.state.linkContent)
            this.setState({ error: "Please add a link" });
        else this.setState({ error: "" });
    };

    render() {
        return (
            <div className="container">
                <div className="input-btn-container">
                    <div className="link-input-container">
                        <MainInput
                            className={`${
                                !this.state.error ? "" : "error"
                            } shorten-input`}
                            type="text"
                            name="shorten-link"
                            placeholder="Shorten a link here..."
                            onChange={this.onLinkChange}
                        ></MainInput>
                        {this.state.error ? (
                            <span
                                style={{
                                    color: "hsl(0, 87%, 67%)",
                                    fontStyle: "italic",
                                    fontSize: "12px",
                                }}
                            >
                                {this.state.error}
                            </span>
                        ) : null}
                    </div>
                    <ActionButton
                        className="shorten-btn"
                        onClick={this.handleShortLink}
                    >
                        Shorten It!
                    </ActionButton>
                </div>
                <div className="result-container">
                    <span className="provided-link">www.google.com</span>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        <span className="generated-short-link">bit.ly</span>
                        <ActionButton
                            className="copy-btn"
                            onClick={() =>
                                this.setState({ copyState: "Copied!" })
                            }
                        >
                            {this.state.copyState}
                        </ActionButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkInput;
