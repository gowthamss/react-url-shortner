import React from "react";
import { ActionButton } from "../../../styled-components/styled.component";
import "./links.styles.css";

const Links = React.forwardRef((props, ref) => {
    const { shortLink, onCopyClick } = props;
    const { copyLinkRef, copyBtnRef } = ref;
    return (
        <div className="result-container">
            <div className="provided-link">{shortLink.original_link}</div>
            <div className="long-short-btn">
                <span className="generated-short-link" ref={copyLinkRef}>
                    {shortLink.full_short_link2}
                </span>
                <ActionButton
                    className="copy-btn"
                    onClick={onCopyClick}
                    ref={copyBtnRef}
                >
                    Copy
                </ActionButton>
            </div>
        </div>
    );
});

export default Links;
