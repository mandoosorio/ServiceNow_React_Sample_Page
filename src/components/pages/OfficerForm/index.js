import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Base64 } from 'js-base64';
import axios from 'axios'
import "./OfficerForm.css";

//var toggle = true;

function OfficerForm() {

    const location = useLocation()
    // const { id } = location.state;
    // console.log(id);
    const [officers, setOfficers] = useState([]);

    ////////////////////////////////////////////////
    useEffect(() => {
        var requestBody = "";
        var username = "armando_osorio";
        var password = "armando_osorio";

        const { id } = location.state;
        var result;

        var client=new XMLHttpRequest();
        client.open("get",`https://regentsolutionsdemo04.service-now.com/api/now/table/x_regso_sn_react_officers/${location.state.id}`);

        client.setRequestHeader('Accept','application/json');
        client.setRequestHeader('Content-Type','application/json');

        //Eg. UserName="admin", Password="admin" for this code sample.
        client.setRequestHeader('Authorization', 'Basic ' + Base64.encode(username + ":" +  password));

        client.onreadystatechange = function() {
          if(this.readyState == this.DONE) {
            document.getElementById("response").innerHTML=this.status + this.response;
            result = JSON.parse(this.response);
            setOfficers(result.result);
            var nameEl = document.getElementById("full_name");
            var sernoEl = document.getElementById("serno");
            var agencyEl = document.getElementById("agency");
            var rankEl = document.getElementById("rank");
            var deployedEl = document.getElementById("deployed");

            nameEl.value = result.result.full_name;
            nameEl.setAttribute("readonly", true);
            nameEl.style.backgroundColor = "#eeeeee";
            
            sernoEl.value = result.result.serno;
            sernoEl.setAttribute("readonly", true);
            sernoEl.style.backgroundColor = "#eeeeee";
            
            agencyEl.value = result.result.agency;
            agencyEl.setAttribute("readonly", true);
            agencyEl.style.backgroundColor = "#eeeeee";
            
            rankEl.value = result.result.rank;
            rankEl.setAttribute("readonly", true);
            rankEl.style.backgroundColor = "#eeeeee";
            
            deployedEl.value = result.result.deployed;
            deployedEl.setAttribute("disabled", true);
            deployedEl.style.backgroundColor = "#eeeeee";
            //toggle = false;
          }
          
        };

        client.send(requestBody);
    }, []);

    ///////////////////////////////////////////////////

    // useEffect(()=>{
    //     axios.get(`/api/now/table/x_regso_sn_react_officers`)
    //         .then(res => {
    //             const { id } = location.state;
    //              var officerData = res.data.result;
    //              const record = officerData.filter(rec => {
    //                 return rec.sys_id == id;
    //             })
    //             setOfficers(record)
    //             return record;
    //         }).then((res) => {
    //             
    //             nameEl.value = res[0].full_name;
    //             nameEl.setAttribute("readonly", true);
    //             nameEl.style.backgroundColor = "#eeeeee";
    //             
    //             sernoEl.value = res[0].serno;
    //             sernoEl.setAttribute("readonly", true);
    //             sernoEl.style.backgroundColor = "#eeeeee";
    //             
    //             agencyEl.value = res[0].agency;
    //             agencyEl.setAttribute("readonly", true);
    //             agencyEl.style.backgroundColor = "#eeeeee";
    //             
    //             rankEl.value = res[0].rank;
    //             rankEl.setAttribute("readonly", true);
    //             rankEl.style.backgroundColor = "#eeeeee";
    //             
    //             deployedEl.value = res[0].deployed;
    //             deployedEl.setAttribute("disabled", true);
    //             deployedEl.style.backgroundColor = "#eeeeee";
    //         })
    //  },[])

  const onSave = (e) => {
    e.preventDefault();
    var nameEl = document.getElementById("full_name");
    var sernoEl = document.getElementById("serno");
    var agencyEl = document.getElementById("agency");
    var rankEl = document.getElementById("rank");
    var deployedEl = document.getElementById("deployed");

    var newFields = {
      full_name: nameEl.value,
      serno: sernoEl.value,
      agency: agencyEl.value,
      rank: rankEl.value,
      deployed: deployedEl.value
    };

    var requestBody = `{\"full_name\":\"${newFields.full_name}\",\"agency\":\"${newFields.agency}\",\"serno\":\"${newFields.serno}\",\"rank\":\"${newFields.rank}\",\"deployed\":\"${newFields.deployed}\"}`;
    var username = "armando_osorio";
    var password = "armando_osorio";

    var client=new XMLHttpRequest();
    client.open("put",`https://regentsolutionsdemo04.service-now.com/api/now/table/x_regso_sn_react_officers/${location.state.id}`);
    
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

    var btnDiv = document.querySelector(".btnDiv");
    btnDiv.innerHTML = "";
    var newBtn = document.createElement("button");
    newBtn.setAttribute("id", "addOfficer");
    newBtn.classList.add("cmnBtn");
    newBtn.onclick = onEdit;
    newBtn.innerText = "Edit";
    btnDiv.appendChild(newBtn);
           
    nameEl.setAttribute("readonly", true);
    nameEl.style.backgroundColor = "#eeeeee";
            
    sernoEl.setAttribute("readonly", true);
    sernoEl.style.backgroundColor = "#eeeeee";
            
    agencyEl.setAttribute("readonly", true);
    agencyEl.style.backgroundColor = "#eeeeee";
      
    rankEl.setAttribute("readonly", true);
    rankEl.style.backgroundColor = "#eeeeee";
    
    deployedEl.setAttribute("disabled", true);
    deployedEl.style.backgroundColor = "#eeeeee";

    //window.location.reload();
    window.location.replace("/x_regso_sn_react_sn-react-app.do");
  }

  const onChange = (e) => {
    setOfficers({ [e.target.id]: e.target.value });
  };

  const onCancel = (e) => {
    e.preventDefault();
    var btnDiv = document.querySelector(".btnDiv");
    btnDiv.innerHTML = "";
    var newBtn = document.createElement("button");
    newBtn.setAttribute("id", "addOfficer");
    newBtn.classList.add("cmnBtn");
    newBtn.onclick = onEdit;
    newBtn.innerText = "Edit";
    btnDiv.appendChild(newBtn);

    var nameEl = document.getElementById("full_name");
    var sernoEl = document.getElementById("serno");
    var agencyEl = document.getElementById("agency");
    var rankEl = document.getElementById("rank");
    var deployedEl = document.getElementById("deployed");
           
    nameEl.setAttribute("readonly", true);
    nameEl.style.backgroundColor = "#eeeeee";
            
    sernoEl.setAttribute("readonly", true);
    sernoEl.style.backgroundColor = "#eeeeee";
            
    agencyEl.setAttribute("readonly", true);
    agencyEl.style.backgroundColor = "#eeeeee";
      
    rankEl.setAttribute("readonly", true);
    rankEl.style.backgroundColor = "#eeeeee";
    
    deployedEl.setAttribute("disabled", true);
    deployedEl.style.backgroundColor = "#eeeeee";
  }

  const onEdit = (e) => {
    e.preventDefault();
    var btnDiv = document.querySelector(".btnDiv");
    btnDiv.innerHTML = "";
    var newBtn2 = document.createElement("button");
    newBtn2.setAttribute("id", "cancel");
    newBtn2.classList.add("cmnBtn");
    newBtn2.onclick = onCancel;
    newBtn2.innerText = "Cancel";
    btnDiv.appendChild(newBtn2);
    var newBtn = document.createElement("button");
    newBtn.setAttribute("id", "addOfficer");
    newBtn.classList.add("cmnBtn");
    newBtn.onclick = onSave;
    newBtn.innerText = "Save";
    btnDiv.appendChild(newBtn);

    var nameEl = document.getElementById("full_name");
    var sernoEl = document.getElementById("serno");
    var agencyEl = document.getElementById("agency");
    var rankEl = document.getElementById("rank");
    var deployedEl = document.getElementById("deployed");
        
    nameEl.removeAttribute("readonly");
    nameEl.style.backgroundColor = "white";
         
    sernoEl.removeAttribute("readonly");
    sernoEl.style.backgroundColor = "white";
         
    agencyEl.removeAttribute("readonly");
    agencyEl.style.backgroundColor = "white";
         
    rankEl.removeAttribute("readonly");
    rankEl.style.backgroundColor = "white";
         
    deployedEl.removeAttribute("disabled");
    deployedEl.style.backgroundColor = "white";
  }
  
  return (
    <div className="mainDiv">
      <div className="formDiv">

        <h2>Officer Record</h2>

        <form>
          <div className="column">
            <label htmlFor="full_name">Full Name:</label><br></br>
            <input type="text" id="full_name" name="full_name" onChange={onChange}></input><br></br>
            <label htmlFor="serno">Serno:</label><br></br>
            <input type="text" id="serno" name="serno" onChange={onChange}></input><br></br>
            <label htmlFor="agency">Agency:</label><br></br>
            <input type="text" id="agency" name="agency" onChange={onChange}></input><br></br>
          </div>
          <div className="column">
            <label htmlFor="rank">Rank:</label><br></br>
            <input type="text" id="rank" name="rank" onChange={onChange}></input><br></br>
            <label htmlFor="deployed">Deployed:</label><br></br>
            <select id="deployed" name="deployed" onChange={onChange}>
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
          <div className="btnDiv">
            <button type="submit" id="addOfficer" onClick={onEdit}>Edit</button>
            
          </div>
        </form>
      </div>
      
      <div id="response"></div>
    </div>
  );
}

export default OfficerForm;