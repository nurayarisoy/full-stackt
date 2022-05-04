import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>Welcome Page</h1>
            {/* <Routes>
                <Route path='new-user' element={<p>Welcome; new user</p>}/>
            </Routes> */}
            <Outlet/>
        </div>
    )
}

export default Welcome
