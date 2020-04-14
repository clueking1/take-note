import React from "react";
import SideNav from '../../components/sideNavComps/sideNav'
import Navbar from '../../components/navBar'


import "./member.css"




function Member() {

    return (
  
        <div className="memberWrapper">
            <div>
            <Navbar />
            </div>
            <div className="sideWrap">
            <SideNav />
            </div>
            
        </div>
    )   
}

export default Member