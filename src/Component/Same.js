import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../Images/homeimg.png";
import '../Css/HomeAbout.css';

const Same=(props)=>{
    return(
        <>
            <div className="mainSection">
                <div className="contentBox">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <div className="btnBox">
                        <div className="btn">
                            <NavLink to={props.goTo} className="readMore">{props.btn}</NavLink>
                        </div>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={props.imgsrc} alt="home" />
                </div>
            </div>
        </>
    )

}

export default Same;