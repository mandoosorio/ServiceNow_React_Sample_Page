import React, { Component } from "react";
import { Base64 } from 'js-base64';
import "./CreateDeployment.css";

class CreateDeployment extends Component {

  constructor() {
    super();
    this.state = {
      full_name: "",
      serno: "",
      agency: ""
    };
  }

  // var submitBtn = document.getElementById("addOfficer");
  // var nameField = document.getElementById("fullname");
  // var sernoField = document.getElementById("serno");
  // var agencyField = document.getElementById("agency");

  onSubmit = e => {
    e.preventDefault();
    // var full_name = nameField.value;
    // var serno = sernoField.value;
    // var agency = agencyField.value;

   

    var requestBody = `{\"officer\":\"${this.state.officer}\",\"short_description\":\"${this.state.short_description}\",\"start_date\":\"${this.state.start_date}\",\"end_date\":\"${this.state.end_date}\",\"length_of_deployment\":\"${this.state.length_of_deployment}\"}`; 
    var username = "armando_osorio";
    var password = "armando_osorio";
  
    var client=new XMLHttpRequest();
    client.open("post","https://regentsolutionsdemo04.service-now.com/api/now/table/x_regso_sn_react_deployments");
  
    client.setRequestHeader('Accept','application/json');
    client.setRequestHeader('Content-Type','application/json');
  
    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic ' + Base64.encode(username + ":" +  password));
  
    client.onreadystatechange = function() { 
      if(this.readyState == this.DONE) {
        document.getElementById("response").innerHTML=this.status + this.response; 
      }
    }; 
    client.send(requestBody);

    this.setState({
      officer: "",
      short_description: "",
      start_date: "",
      end_date: "",
      length_of_deployment: ""
    })
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //submitBtn.addEventListener("click", sendPost);

  render() {
    return (
      <div className="mainDiv">
        <div className="formDiv">

            <h2>Create Deployment:</h2>

            <form onSubmit={this.onSubmit}>
              <div className="column">
                <label htmlFor="officer">Officer:</label><br></br>
                <input type="text" id="officer" name="officer" onChange={this.onChange} value={this.state.officer}></input><br></br>
                <label htmlFor="short_description">Short Description:</label><br></br>
                <input type="text" id="short_description" name="short_description" onChange={this.onChange} value={this.state.short_description}></input><br></br>
                <label htmlFor="start_date">Start Date:</label><br></br>
                <input type="date" id="start_date" name="start_date" onChange={this.onChange} value={this.state.start_date}></input><br></br>
              </div>
              <div className="column">
                <label htmlFor="end_date">End Date:</label><br></br>
                <input type="date" id="end_date" name="end_date" onChange={this.onChange} value={this.state.end_date}></input><br></br>
                <label htmlFor="length_of_deployment">Deployment Length:</label><br></br>
                <input type="text" id="length_of_deployment" name="length_of_deployment" onChange={this.onChange} value={this.state.length_of_deployment}></input><br></br>
              </div>
              <div className="btnDiv">
                <button type="submit" id="createDeployment">Submit</button>
              </div>
            </form>
        </div>
        
        <div id="response"></div>
      </div>
    );
  }
}

export default CreateDeployment;