import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavTabs.css";

function NavTabs() {
  const location = useLocation();

  return (
    <div className="card-container">
      <div className="cards">

        <div className="container1">
          <div className="column1">
            <div className="subcontainer1">
                <h4 className="cardHeader">All Officers</h4>
                <p className="cardText">View a list of all Officers</p>
                  <Link 
                    to="/x_regso_sn_react_sn-react-app.do/officers" 
                    className={location.pathname === "/officers" ? "nav-link active" : "nav-link"}>
                      <button className="cardBtn">Officers</button>
                  </Link>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="column1">
            <div className="subcontainer1">        
                <h4 className="cardHeader">Add Officer</h4>
                <p className="cardText">Add an Officer</p>               
                  <Link
                    to="/x_regso_sn_react_sn-react-app.do/addOfficer"
                    className={location.pathname === "/addOfficer" ? "nav-link active" : "nav-link"}>
                      <button className="cardBtn">Add Officer</button>
                  </Link>        
            </div>
          </div>
        </div>

        <div className="container1">
          <div className="column1">
            <div className="subcontainer1">        
                <h4 className="cardHeader">Deployments</h4>
                <p className="cardText">View all Deployments</p>           
                  <Link
                    to="/x_regso_sn_react_sn-react-app.do/deployments"
                    className={location.pathname === "/deployments" ? "nav-link active" : "nav-link"}>
                      <button className="cardBtn">Deployments</button>
                  </Link>        
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="column1">
            <div className="subcontainer1">        
                <h4 className="cardHeader">Create Deployment</h4>
                <p className="cardText">Create a new Deployment</p>           
                  <Link
                    to="/x_regso_sn_react_sn-react-app.do/createDeployment"
                    className={location.pathname === "/createDeployment" ? "nav-link active" : "nav-link"}>
                      <button className="cardBtn">Create Deployment</button>
                  </Link>        
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavTabs;