import React from 'react'


class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="form_container">
                    <form action="">
                        <input type="username" name="username" onChange={ (event) => {this.handleInputChange(event)}}id="" placeholder="username"/>

                        
                        <input type="password" name="password" onChange={ (event) => {this.handleInputChange(event)}}id="" placeholder="password"/>

                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login