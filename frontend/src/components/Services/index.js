import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesH2,
    ServicesP,
} from "./ServicesElements";

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Find relevant opportunities </ServicesH2>
                        <ServicesP>
                            We help to match your interest with available
                            opportunities
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Get Notification</ServicesH2>
                        <ServicesP>
                            Get mails about various openings based on your
                            profile
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Hassle Free Tracking </ServicesH2>
                        <ServicesP>
                            We keep an eye on specific universities and
                            professors's research openings on behalf of you
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;
