import React from "react";
import {
    SearchContainer,
    DropdownContainer,
    DropdownItem,
    DropdownContent,
    DropdownButton,
    DropdownP,
    DummyContainer,
} from "./SearchElements";
import Search from "./Search.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const SearchContent = () => {
    return (
        <>
            <SearchContainer>
                <DummyContainer>
                    <DropdownContainer>
                        <DropdownButton>
                            <DropdownP>Colleges</DropdownP>
                        </DropdownButton>
                        <DropdownContent>
                            <DropdownItem to="/search/">
                                University of Illions & Urbana-Campaign
                            </DropdownItem>
                            <DropdownItem to="/search/mit">
                                Massachusetts Institute Of Technology: MIT
                            </DropdownItem>
                            <DropdownItem to="/search/cambridge">
                                Cambridge University
                            </DropdownItem>
                            <DropdownItem to="/search/stanford">
                                Stanford University
                            </DropdownItem>
                            <DropdownItem to="/search/ucberkeley">
                                University of California, Berkeley
                            </DropdownItem>
                            <DropdownItem to="/search/oxford">
                                University of Oxford
                            </DropdownItem>
                            <DropdownItem to="/search/caltech">
                                California Institute Of Technology
                            </DropdownItem>
                        </DropdownContent>
                    </DropdownContainer>
                </DummyContainer>
                <Outlet />
            </SearchContainer>
        </>
    );
};

export default SearchContent;
