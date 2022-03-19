import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../../images/img.jpg";

export const SearchContainer = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 100px 150px 100px 150px;
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    margin-top: 3px;
    border-radius: 8px;
    background-color: #f9f9f9;
    min-width: 1075px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const DropdownContainer = styled.div`
    display: inline-block;
    width: 70%;
    border-radius: 8px;
    text-align: center;
    align-items: center;
    background-color: white;
    margin-bottom: 50px;
    &:hover {
        background-color: #b2c0fb;
    }
    &:hover ${DropdownContent} {
        display: block;
    }
`;

export const DropdownItem = styled(NavLink)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 8px;
    text-align: left;
    text-align: center;
    &:hover {
        background-color: #f1f1f1;
    }
`;

export const DropdownButton = styled.div`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

export const DropdownP = styled.p`
    color: black;
`;

export const DummyContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
`;
