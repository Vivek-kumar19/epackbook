import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';


const Sidebar = (props) =>{

    let style;
    
  if(props.permission == 'no_margin')
  {
    style = {
        marginTop:'0',
        borderRadius: '0 0 25px 25px'
    }
  }

    return(
        <>
        <div className="sidebar" style={style} >
            <ul>
                <li className="bold">{<HomeIcon/>} Quick Links</li>
                <li>{<SwitchAccountIcon/>} Profile</li>
                <li>{<ArrowCircleRightIcon/>} Enquiry</li>
                <li>{<ArrowCircleRightIcon/>} Orders</li>
                <li>{<ArrowCircleRightIcon/>} Branch</li>
                <li>{<PersonIcon/>} Customers</li>
                <li>{<CommentIcon/>} Reports</li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;