import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
    FooterContainer,
    FooterLink,
    FooterLinkTitle,
    FooterLinksContaier,
    FooterLinksItems,
    FooterLinksWrapper,
    FooterWrap,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContaier>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">
                                    How it Works
                                </FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            </FooterLinksItems>
                            
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                           
                        </FooterLinksWrapper>
                    </FooterLinksContaier>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                Internship Intel
                            </SocialLogo>
                            <WebsiteRights>
                                {" "}
                                 © {new Date().getFullYear()}
                                All rights reserved
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
