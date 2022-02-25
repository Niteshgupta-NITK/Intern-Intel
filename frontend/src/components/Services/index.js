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
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>
                            We help reduce your feesour overall revenue
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>
                            you can access our platform from anywhere in the
                            world
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benifits</ServicesH2>
                        <ServicesP>
                            Unlock our premium card to get instant cashback
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;
