import logo from './assets/imgs/logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Officers from "./components/pages/Officers";
import AddOfficer from "./components/pages/AddOfficer";
import Deployments from './components/pages/Deployments';
import CreateDeployment from './components/pages/CreateDeployment';
import OfficerForm from './components/pages/OfficerForm';
import Component3 from "./components/pages/Component3";

import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
        <div id="texture">
          <h1 id="mainHeader">Deployment Management Portal</h1>
            <Routes>
              <Route path="/*" element={<NavTabs/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/" element={<NavTabs/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/officers" element={<Officers/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/addOfficer" element={<AddOfficer/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/deployments" element={<Deployments/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/createDeployment" element={<CreateDeployment/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/officerForm" element={<OfficerForm/>} />
              <Route exact path="/x_regso_sn_react_sn-react-app.do/component3" element={<Component3/>} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
