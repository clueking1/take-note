import React from 'react'
import LogOut from './logOutBut'

function underLineNav () {

    return (
    <div className="nav-scroller bg-white shadow-sm">
            <nav className="nav nav-underline">
            
                <a className="nav-link" href="/member">
                Friends
                <span className="badge badge-pill bg-light align-text-bottom">27</span>
                </a>
                <a className="nav-link" href="/member">Explore</a>
                <a className="nav-link" href="/member">Suggestions</a>
                <LogOut />
                
            </nav>
    </div>
    )
}

export default underLineNav