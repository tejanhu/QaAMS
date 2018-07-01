import React, { Component } from 'react';

class CreateAccount extends Component{
    render(){
        return (

                    <div>
                        <h1>Create an Account</h1>
                    <form ref="accountForm">
                        <div className="container">
                            <label for="uname" className="cred"><br/>Username:<br/></label>
                            <input type="text" className="form-control" id="uname" ref="uname" placeholder="Enter username" />
                            
                            <label for="psw" className="cred"><br/>Password:<br/></label>
                            <input type="password" className="form-control" id="psw" ref="psw" placeholder="Enter password" />

                            <label for="fname" className="cred"><br/>First-name:<br/></label>
                            <input type="text" className="form-control" id="fname" ref="name" placeholder="Enter firstname" />
                            
                            <label for="sname" className="cred"><br/>Surname:<br/></label>
                            <input type="text" className="form-control" id="lname" ref="surname" placeholder="Enter surname"/>
                            
                            <label for="accno" className="cred"><br/>Account number<br/></label>
                            <input type="text" className="form-control" id="acc_no" ref="accno" placeholder="Enter account number"/>
                            <button type="submit" className="btn btn-primary" id="submit-btn" onClick={this.addAccount}>Submit</button>
                        </div>
                    </form>
                    </div>
        )
    }
}

export default CreateAccount;