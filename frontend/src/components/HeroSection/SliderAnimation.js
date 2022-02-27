import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import "./style.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderAnimation = () => {
    return (
        <>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={10000}
            >
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />
            </AutoplaySlider>
        </>
    );
};

export default SliderAnimation;
