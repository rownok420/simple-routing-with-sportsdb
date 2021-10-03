import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="bg-img">
            <MenuBar />
            <div className="d-flex flex-column justify-content-center align-items-center h-100 my-margin">
                <h1 className="heading">BE THE BASKETBALL STAR AND SHINE</h1>
                <Link to="/club">
                    <button className="home-button">See all Club</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;