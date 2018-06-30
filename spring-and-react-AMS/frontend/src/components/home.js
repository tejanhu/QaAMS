import React, { Component } from 'react';

class Home extends Component{
    render(){
        return (
           
                <form ref="userForm">
                        <div class="container">
                            <label for="uname"><br/>Username:<br/></label>
                            <input type="text" class="form-control" id="uname" ref="uname" placeholder="Enter Username" required/>
                            <label for="psw"><br/>Password:<br/></label>
                            <input type="password" class="form-control" id="psw" ref="psw" placeholder="Enter Password" required/>                         
                            <button type="submit" class="btn btn-primary" role="button" id="login-btn" onClick={this.addAccount}>Login</button>
                         </div>
                </form>
            
        )
    }
}

export default Home;