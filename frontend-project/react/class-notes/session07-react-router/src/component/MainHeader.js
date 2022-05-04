import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul style={{listStyleType:'none'}} >
                    <li >
                        <Link className={(navData)=>navData.isActive ? 'active' : ''} to='/welcome'>
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <NavLink className={(navData)=>navData.isActive && 'active' } to='/products'>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
