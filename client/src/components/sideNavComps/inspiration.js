import React from 'react' 

function Inspiration() {
    return (
        <div className="sidebar-sticky">

            <h3 className="inspirTitle">Daily Inspiration</h3>

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

export default Inspiration