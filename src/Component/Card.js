import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ServiceStyle.css';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <h2>{props.title1}</h2>
                <img src={props.imgSource} alt="service1" className="serviceImg" />
                <p>{props.desc1}</p>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to='/about' className="readMore">{props.btnService}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card;