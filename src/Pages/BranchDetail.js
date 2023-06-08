import React from "react";
import Header from "../Components/Header";
import HeaderTwo from "../Components/HeaderTwo";
import BranchDLayout from "../Components/BranchDLayout";
import Quickcanvas from "../Components/Quickcanvas";



const BranchDetail = () =>{
    return(
        <>
        <Header></Header>
       <HeaderTwo imgSrc="images/letter-v.png" branchName="Miawalinagar" city="Delhi" BranchId="+0156123584" ></HeaderTwo>
       <BranchDLayout> </BranchDLayout>
       <Quickcanvas/>
        </>
    )
}


export default BranchDetail;