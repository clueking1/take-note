import React from "react";
import SideNav from '../../components/sideNavComps/sideNav'
import Navbar from '../../components/navBar'
import SearchBar from '../../components/memsComps/searchBar'
import RecentFolders from '../../components/memsComps/recentFolders'
import RecentNotes from '../../components/memsComps/recentNotes'

import "./member.css"




function Member() {

    return (
  
        <div className="memberWrapper">
           
            <Navbar />
        
            <SideNav />

            <SearchBar />

            <RecentFolders />

            <RecentNotes />
          
            
        </div>
    )   
}

export default Member