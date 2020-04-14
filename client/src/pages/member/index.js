import React from "react";
import SideNav from '../../components/sideNavComps/sideNav'
import Navbar from '../../components/navBar'
import SearchBar from '../../components/memsComps/searchBar'

import "./member.css"




function Member() {

    return (
  
        <div className="memberWrapper">
           
            <Navbar />
        
            <SideNav />

            <SearchBar />
          
            
        </div>
    )   
}

export default Member