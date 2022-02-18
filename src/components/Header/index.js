import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import usphsLogo from '../../assets/imgs/usphs-logo.svg';
function Header() {
    const location = useLocation();

    return (
        <div id="headerContainer">
            <div className="main">
                <div className="header" alt="logo">
                    <img src={usphsLogo} />
                </div>
                <div className="headerInput">
                    <form>
                        <input id="globalInput" type="text" placeholder="Search..." name="search"></input>
                        <button id="globalSearch" type="submit" className="searchBtn">Search</button>
                    </form>
                </div>
            </div>

            <div className="topnav">
                <Link className="active" to="/x_regso_sn_react_sn-react-app.do">Home</Link>
                <Link to="/x_regso_sn_react_sn-react-app.do/officers">All Officers</Link>
                <Link to="/x_regso_sn_react_sn-react-app.do/addOfficer">Add Officer</Link>
                <Link to="/x_regso_sn_react_sn-react-app.do/deployments">All Deployments</Link>
                <Link to="/x_regso_sn_react_sn-react-app.do/createDeployment">Create Deployment</Link>
                <Link to="/x_regso_sn_react_sn-react-app.do/about">About</Link>
            </div>
        </div>
    );
}

export default Header;