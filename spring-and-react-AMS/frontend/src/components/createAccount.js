import React, { Component } from 'react';

class CreateAccount extends Component{

     addAccount(event) {
     event.preventDefault();
     let uname = this.refs.uname.value;
     let psw = this.refs.psw.value;
     let name = this.refs.name.value;
     let surname = this.refs.surname.value;
     let accno = this.refs.accno.value;

     let account = {
      uname,
       psw,
       name, 
       surname,
       accno
     };

     let accounts = this.state.accounts;

     accounts.push(account);

     this.setState({
       accounts: accounts
     });

     this.refs.accountForm.reset();
   }

   constructor(){
     super();
     this.addAccount = this.addAccount.bind(this)
     this.state = {
       accounts: [],
       title: "Welcome to AMS"
     }
   }



    render(){
        let accounts = this.state.accounts;
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
                    <pre>
                        {JSON.stringify(accounts)}
                    </pre>
                    </div>
        )
    }
}

export default CreateAccount;