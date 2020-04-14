import React from 'react' 

function UserOps() {
    return (
        <div className="sidebar-sticky">

            <h3 className="exploreTitle">Explore</h3>

            <ul>
                <li className="nav-item">
                <a className="nav-link active" href="#">
                <span data-feather="home"></span>
                Dashboard <span className="sr-only">(current)</span>
                </a>
             </li>
            </ul>
        </div>
    )
}

export default UserOps