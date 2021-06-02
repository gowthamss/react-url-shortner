import React from "react";
import {
    MainInput,
    ActionButton,
} from "../../styled-components/styled.component";
import "./link-input.styles.css";

class LinkInput extends React.Component {
    constructor() {
        super();

        this.state = {
            error: "",
            linkContent: "",
            copyState: false,
            shortUrl: "",
            generateState: "Shorten It!",
            apiResult: {},
            apiResolved: false,
        };
    }

    multipleShortLinks = [];

    onLinkChange = (e) => {
        this.setState({ linkContent: e.target.value, error: "" });
    };

    handleShortLink = () => {
        const { linkContent } = this.state;
        if (!linkContent) {
            this.setState({ error: "Please add a link" });
        } else if (
            !linkContent.includes("http") &&
            !linkContent.includes("https") &&
            !linkContent.includes("www")
        ) {
            this.setState({ error: "Please enter a valid URL" });
        } else {
            this.setState({ generateState: "Shortening..." });
            this.getShortLink();
            this.setState({ error: "" });
        }
    };

    getShortLink = async () => {
        const longUrl = `https://api.shrtco.de/v2/shorten?url=${this.state.linkContent}`;

        const response = await fetch(longUrl);
        const fetchedShortUrl = await response.json();
        if (fetchedShortUrl.ok) {
            this.setState({ apiResult: fetchedShortUrl.result });
        } else {
            this.setState({
                error: "The short code API is unavailbale at the moment",
            });
        }
        console.log(fetchedShortUrl);
        this.setState({ generateState: "Shorten It!" });
        this.setState({ apiResolved: true });
    };

    render() {
        const { error, linkContent, copyState, shortUrl, generateState } =
            this.state;
        const { full_short_link2, original_link } = this.state.apiResult;
        return (
            <div className="container">
                <div className="input-btn-container">
                    <div className="link-input-container">
                        <MainInput
                            className={`${!error ? "" : "error"} shorten-input`}
                            type="text"
                            name="shorten-link"
                            placeholder="Shorten a link here..."
                            onChange={this.onLinkChange}
                        ></MainInput>
                        {error ? (
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
                            generateState.toLowerCase().includes("shortening")
                                ? "disabled"
                                : ""
                        } shorten-btn`}
                        onClick={this.handleShortLink}
                    >
                        {generateState}
                    </ActionButton>
                </div>
                {this.state.apiResolved ? (
                    <div className="result-container">
                        <div className="provided-link">{original_link}</div>
                        <div className="long-short-btn">
                            <span className="generated-short-link">
                                {full_short_link2}
                            </span>
                            <ActionButton
                                className="copy-btn"
                                onClick={() =>
                                    this.setState({ copyState: true })
                                }
                            >
                                {copyState ? "Copied" : "Copy"}
                            </ActionButton>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default LinkInput;
