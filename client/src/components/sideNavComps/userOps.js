import React from 'react' 

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
                <a className="a" href="/logout">
                <span data-feather="home"></span>
                Sign Out <span className="sr-only">(current)</span>
                </a>
             </li>

            </ul>
        </div>
    )
}

export default UserOps