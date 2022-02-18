import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'
import "./Officers.css";

function Officers() {

  const location = useLocation();
  const [officers, setOfficers] = useState([])

  useEffect(()=>{
     axios.get('/api/now/table/x_regso_sn_react_officers')
          .then(res => {
            setOfficers(res.data.result)
          })
  },[])

  const Officers = () => {
      return (
        officers.map((i) => { 
          return (
            <tr key={i.sys_id}>
              <Link
              to="/x_regso_sn_react_sn-react-app.do/officerForm"
              state={{ id: i.sys_id, toggle: true }}
              className={location.pathname === "/officerForm" ? "nav-link active" : "nav-link"}
              >
              <td>{i.serno}</td>
              </Link>
              <td>{i.rank}</td>
              <td>{i.full_name}</td>
              <td>{i.agency}</td>
              <td>{i.deployed}</td>
            </tr>
          )
        })
      )
  }

  return (
    <div className="tableDiv">
      <div className="tableHeader">All Officers <span id="officerCount">{officers.length}</span></div>
      <hr></hr>
      <table>
        <tr>
          <th>Serno</th>
          <th>Rank</th>
          <th>Full Name</th>
          <th>Agency</th>
          <th>Deployed</th>
        </tr>
        <Officers/>
      </table>    
    </div>
  );
}

export default Officers;