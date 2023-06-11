import React from "react";
import Header from '../Components/Header';
import HeaderThree from "../Components/HeaderThree";
import ComRegFormCom from "../Components/ComRegFormCom";


const ComRegForm  = () =>{
    return(
        <>
        <Header/>
        <HeaderThree tittle="CoMPANY REGISTER FORM" />
        <ComRegFormCom/>
        </>
    )
}

export default ComRegForm;
