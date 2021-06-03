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
        };
    }

    onCopyClick = () => {
        this.setState({ copyState: true });
    };

    onLinkChange = (e) => {
        this.setState({ linkContent: e.target.value, error: "" });
    };

    handleShortLink = (e) => {
        e.preventDefault();
        const { linkContent } = this.state;
        console.log("handle click link contetn ", linkContent);
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
        console.log(multipleShortLinks, linkContent, longUrl);
        const existingLink = multipleShortLinks.find(
            (shortLink) => shortLink["original_link"] === linkContent
        );
        if (!existingLink) {
            this.setState({ btnText: "Shortening..." });
            const response = await fetch(longUrl);
            const fetchedShortUrl = await response.json();
            if (fetchedShortUrl.ok) {
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
            console.log(fetchedShortUrl);
            this.setState({ btnText: "Shorten It!" });
            console.log(this.state.multipleShortLinks);
        } else {
            this.setState({ error: "You already have this link generated." });
        }
    };

    render() {
        const { error, copyState, btnText, multipleShortLinks } = this.state;
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
                        shortLink={shortLink}
                        key={index}
                        onCopyClick={this.onCopyClick}
                        copyState={copyState}
                    />
                ))}
            </div>
        );
    }
}

export default LinkInput;
