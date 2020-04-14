import React from 'react' 
import LogOutBut from '../logOutBut'

function UserOps() {
    return (
        <div className="sidebar-sticky">

            <h3 className="exploreTitle">Explore</h3>

            <ul>
                <li className="nav-item">
                <a className="a" href="#">
                <span data-feather="home"></span>
                Create Note <span className="sr-only">(current)</span>
                </a>
             </li>

             <li className="nav-item">
                <a className="a" href="#">
                <span data-feather="home"></span>
                View Folders <span className="sr-only">(current)</span>
                </a>
             </li>

             <li className="nav-item">
                <a className="a" href="#">
                <span data-feather="home"></span>
                View Notes <span className="sr-only">(current)</span>
                </a>
             </li>

             <li className="nav-item">
               <LogOutBut />
             </li>

             
             </ul>
             
             
        </div>
    )
}

export default UserOps