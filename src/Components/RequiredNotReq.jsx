import React from "react";
import Form from 'react-bootstrap/Form';


const RequiredNotReq =(props)=>{

    const opentab = document.getElementById('opentab');
    const targetedelement =document.getElementById('targetedelement');
    let result;
    var styleforextra;

    // console.log(opentab.value);

    let extractval =(e)=>{
      result = e.target.value;
      console.log(result);
    }

    styleforextra = {
        height:"0",
        background:"pink",
        overflow:"hidden"
    }

    if(result == "open")
    {
styleforextra = {
        height:"auto",
        background:"pink",
        overflow:"hidden"
    }
    }




    return(
        <>
        <div>  
       <Form className="f_chunch" >
       <Form.Check  type="radio" id="opentab" name="f_chunch" value="open" onClick={extractval} label={props.name1} /> 
       <Form.Check  type="radio" id="notopen" name="f_chunch" value="close" onClick={extractval}  label={props.name2}  /> 
       </Form>
        </div>

        <div id="targetedelement" style={styleforextra}>
        <Form.Control type="text" placeholder="Normal text" />
        </div>
        </>
    )
}

export default RequiredNotReq;