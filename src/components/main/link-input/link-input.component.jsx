import React from "react";
import "./link-input.styles.css";
import Links from "./links/links.component";
import LinkForm from "./link-form/link-form.component";

class LinkInput extends React.Component {
    constructor() {
        super();

        this.state = {
            error: "",
            linkContent: "",
            btnText: "Shorten It!",
            multipleShortLinks: [],
            copyState: true,
        };

        this.copyLinkRef = React.createRef();
        this.copyBtnRef = React.createRef();
    }

    onCopyClick = () => {
        const copiedText = this.copyLinkRef.current.innerText;
        navigator.clipboard.writeText(copiedText);
        const btnValue = this.copyBtnRef.current.innerText;
        if (btnValue === "Copy") {
            this.copyBtnRef.current.innerText = "Copied!";
            this.copyBtnRef.current.style.background = "hsl(260, 8%, 14%)";
        }
    };

    onLinkChange = (e) => {
        this.setState({ linkContent: e.target.value, error: "" });
    };

    handleShortLink = (e) => {
        e.preventDefault();
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
            this.getShortLink();
        }
    };

    getShortLink = async () => {
        const { multipleShortLinks, linkContent } = this.state;
        const longUrl = `https://api.shrtco.de/v2/shorten?url=${linkContent}`;
        const existingLink = multipleShortLinks.find(
            (shortLink) => shortLink["original_link"] === linkContent
        );
        if (!existingLink) {
            this.setState({ btnText: "Shortening..." });
            const response = await fetch(longUrl);
            const fetchedShortUrl = await response.json();
            if (fetchedShortUrl.ok) {
                fetchedShortUrl.result["copy"] = true;
                this.setState({
                    multipleShortLinks: [
                        ...this.state.multipleShortLinks,
                        fetchedShortUrl.result,
                    ],
                });
            } else {
                this.setState({
                    error: "The short code API is unavailbale at the moment",
                });
            }
            this.setState({ btnText: "Shorten It!" });
        } else {
            this.setState({ error: "You already have this link generated." });
        }
    };

    render() {
        const { error, btnText, multipleShortLinks } = this.state;
        return (
            <div className="container">
                <LinkForm
                    error={error}
                    btnText={btnText}
                    onLinkChange={this.onLinkChange}
                    handleShortLink={this.handleShortLink}
                />
                {multipleShortLinks.map((shortLink, index) => (
                    <Links
                        key={index}
                        shortLink={shortLink}
                        onCopyClick={this.onCopyClick}
                        ref={{
                            copyLinkRef: this.copyLinkRef,
                            copyBtnRef: this.copyBtnRef,
                        }}
                    />
                ))}
            </div>
        );
    }
}

// {copyState ? "Copy" : "Copied"}
export default LinkInput;
