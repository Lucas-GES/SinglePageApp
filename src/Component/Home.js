import React from "react";
import homeimg from "../Images/homeimg.png";
import Same from "./Same";
const Home = () => {
    return (
        <>
            <Same 
            title="Learning made easy"
            text="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Proin sodales iaculis velit,
            ac lobortis dui.
            Donec ultrices ante eu augue imperdiet pulvinar.
            Aliquam in magna sit amet justo posuere ornare nec nec quam."
            imgsrc={homeimg}
            btn="Read More"
            goTo="/about"
            />
        </>
    )

}

export default Home;