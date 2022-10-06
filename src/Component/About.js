import React from "react";
import aboutimg from "../Images/aboutimg.png";
import Same from "./Same";

const About=()=>{
    return(
        <>
            <Same 
            title="Know More about us"
            text="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Proin sodales iaculis velit,
            ac lobortis dui.
            Donec ultrices ante eu augue imperdiet pulvinar.
            Aliquam in magna sit amet justo posuere ornare nec nec quam."
            imgsrc={aboutimg}
            btn="Know More"
            goTo="/services"
            />
        </>
    )

}

export default About;