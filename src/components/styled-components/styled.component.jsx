import styled from "styled-components";

export const ActionButton = styled.button `
    font-size: 18px;
    font-weight: 500;
    background-color: hsl(180, 66%, 49%);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: ${(props) => (props.pill ? "24px" : "8px")};
    outline: none;
    border: none;
`;

export const LinkButton = styled.a `
    font-size: 14px;
    font-weight: ${(props) => (props.header ? "bold" : "500")};
    color: ${(props) =>
        props.header ? "hsl(0, 0%, 75%)" : "hsl(257, 7%, 63%)"};
    text-transform: capitalize;
`;

export const LogoAndCardHeading = styled.h2 `
    font-size: ${(props) =>
        props.logo ? "32px" : props.footer ? "14px" : "24px"};
    color: ${(props) => (props.header ? "hsl(255, 11%, 22%)" : "white")};
    font-weight: 500;
`;

export const MainInput = styled.input `
    font-size: 14px;
    background: white;
    border: none;
    border-radius: 5px;
    padding-left: 8px;
`;