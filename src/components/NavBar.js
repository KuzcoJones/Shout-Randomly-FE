import React from 'react'

import {NavLink} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <NavLink>
                    Home
                </NavLink>
            </div>
        )
    }
}

export default NavBar