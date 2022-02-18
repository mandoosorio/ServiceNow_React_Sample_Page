import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Deployments.css";

function Deployments() {

  const [deployments, setDeployments] = useState([])

  useEffect(()=>{
     axios.get('/api/now/table/x_regso_sn_react_deployments')
          .then(res => {
            setDeployments(res.data.result)
            console.log(deployments);
          })
  },[])

  console.log(deployments);

  const Deployments = () => {
      return (
        deployments.map((j) => { 
          return (
            <tr key={j.sys_id}>
              <td>{j.number}</td>
              <td>{j.officer.value}</td>
              <td>{j.short_description}</td>
              <td>{j.start_date}</td>
              <td>{j.end_date}</td>
              <td>{j.length_of_deployment}</td>
            </tr>
          )
        })
      )
  }

  return (
    <div className="tableDiv">
      <div className="tableHeader">All Deployments <span id="deploymentCount">{deployments.length}</span></div>
      <hr></hr>
      <table>
        <tr>
          <th>Number</th>
          <th>Officer</th>
          <th>Short Description</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Deployment Length</th>
        </tr>
        <Deployments/>
      </table>    
    </div>
  );
}

export default Deployments;