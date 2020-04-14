import React, { useEffect } from "react";
import SideNav from '../../components/sideNavComps/sideNav'
import Navbar from '../../components/navBar'
import SearchBar from '../../components/memsComps/searchBar'
import RecentFolders from '../../components/memsComps/recentFolders'
import RecentNotes from '../../components/memsComps/recentNotes'
import "./member.css"




function Member() {

    useEffect(() => {
        document.body.style.backgroundImage = "url()"
        document.body.style.background =  "#b5bdc43d"

        return () => {
            setTimeout(function(){ window.location.reload(false); }, 0);
        }

    })


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