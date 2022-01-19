import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <div className="container">
        <ul>
            <Link className="container__brand" to="/"><li>Home</li></Link>
            <Link className="container__brand" to="/About"><li>About</li></Link>
            <Link className="container__brand" to="/Dashboard"><li>Dashboard</li></Link>
        </ul>
    </div>
    )
}
export {Header}
