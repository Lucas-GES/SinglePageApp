import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import '../Css/ListStyle.css';


const List = () => {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" className="logo"  />
                    </div>
                    <nav>
                        <div className="list">
                            <NavLink exact to='/' className="listItem">Home</NavLink>
                            <NavLink to='/about' className="listItem">About</NavLink>
                            <NavLink to='/services' className="listItem">Services</NavLink>
                            <NavLink to='/contact' className="listItem">Contact</NavLink>
                            <NavLink to='/policy' className="listItem">Policy</NavLink>
                        </div>
                    </nav>
                    <div className="icons">
                        <SearchIcon className="icon"/>
                        <PersonIcon className="icon"/>
                        <CallIcon className="icon"/>    
                    </div>
                </div>
            </header>
        </>
    )

}

export default List;