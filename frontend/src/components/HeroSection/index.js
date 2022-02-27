import React, { useState } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video2.mp4";
import { Button } from "../ButtonElements";
import SliderAnimation from "./SliderAnimation";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        background: "#232a34",
                        OObjectFit: "cover",
                    }}
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                ></video>
                {/* <SliderAnimation /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Find Research Intersnhip </HeroH1>
                <HeroP>
                    Sign Up for a new account today and explore various research
                    intersnhip opportunities across the globe!
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
