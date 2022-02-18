import React, { Component } from "react";
import { Base64 } from 'js-base64';
import "./AddOfficer.css";

class AddOfficer extends Component {

  constructor() {
    super();
    this.state = {
      full_name: "",
      serno: "",
      agency: "",
      rank: "",
      deployed: ""
    };
  }

  // var submitBtn = document.getElementById("addOfficer");
  // var nameField = document.getElementById("fullname");
  // var sernoField = document.getElementById("serno");
  // var agencyField = document.getElementById("agency");

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // var full_name = nameField.value;
    // var serno = sernoField.value;
    // var agency = agencyField.value;

   

    var requestBody = `{\"full_name\":\"${this.state.full_name}\",\"agency\":\"${this.state.agency}\",\"serno\":\"${this.state.serno}\",\"rank\":\"${this.state.rank}\",\"deployed\":\"${this.state.deployed}\"}`; 
    var username = "armando_osorio";
    var password = "armando_osorio";
  
    var client=new XMLHttpRequest();
    client.open("post","https://regentsolutionsdemo04.service-now.com/api/now/table/x_regso_sn_react_officers");
  
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
      full_name: "",
      serno: "",
      agency: "",
      rank: "",
      deployed: ""
    })
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  //submitBtn.addEventListener("click", sendPost);

  render() {
    return (
      <div className="mainDiv">
        <div className="formDiv">

            <h2>Add an Officer:</h2>

            <form onSubmit={this.onSubmit}>
              <div className="column">
                <label htmlFor="full_name">Full Name:</label><br></br>
                <input type="text" id="full_name" name="full_name" onChange={this.onChange} value={this.state.full_name}></input><br></br>
                <label htmlFor="serno">Serno:</label><br></br>
                <input type="text" id="serno" name="serno" onChange={this.onChange} value={this.state.serno}></input><br></br>
                <label htmlFor="agency">Agency:</label><br></br>
                <input type="text" id="agency" name="agency" onChange={this.onChange} value={this.state.agency}></input><br></br>
              </div>
              <div className="column">
                <label htmlFor="rank">Rank:</label><br></br>
                <input type="text" id="rank" name="rank" onChange={this.onChange} value={this.state.rank}></input><br></br>
                <label htmlFor="deployed">Deployed:</label><br></br>
                <select id="deployed" name="deployed" onChange={this.onChange} value={this.state.deployed}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
              <div className="btnDiv">
                <button type="submit" id="addOfficer">Submit</button>
              </div>
            </form>
        </div>
        
        <div id="response"></div>
      </div>
    );
  }
}

export default AddOfficer;