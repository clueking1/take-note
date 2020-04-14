import React from 'react'
import UserOps from './userOps'
import Inspiration from './inspiration'

function SideNav() {
    return (
        <div className="sideContainer">
            <div className="topHalf">
            <UserOps />
            </div>
            <div className="botHalf">
            <Inspiration />
            </div>
        </div>
    )
}

export default SideNav