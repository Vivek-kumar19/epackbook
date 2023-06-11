import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Routes } from "react-router-dom";


import Addbranch from "./Pages/Addbranch";
import BranchDetail from "./Pages/BranchDetail";
import Login from "./Pages/Login";
import ComRegForm from "./Pages/ComRegForm";
import SubscriptionPlan from "./Pages/SubscriptionPlan";


function App() {
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Login></Login>}></Route>
    <Route exact path="/addbranch" element={<Addbranch></Addbranch>}></Route>
    <Route exact path="/branchdetail" element={<BranchDetail></BranchDetail>}></Route>
    <Route exact path="/companyregister" element={<ComRegForm></ComRegForm>}></Route>
    <Route exact path="/subscription" element={<SubscriptionPlan></SubscriptionPlan>}></Route>
   </Routes>
   </>
  );
}

export default App;



   