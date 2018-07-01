import React, { Component } from 'react';
import Find from 'array.prototype.find';

class CreateAccount extends Component{

    deleteAccount = (index) => {
        let accounts = this.state.accounts;

        // let account = accounts.find(function(account){
        //     return account.uid === index
        // });

        accounts.splice(index, 1);

        this.setState({
            accounts: accounts
        });
    }



    constructor(){
        super();
        this.addAccount = this.addAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.state = {
          accounts: [],
          uid: 0,
          index: ''
        }
      }



     addAccount(event) {
     event.preventDefault();

     let accounts = this.state.accounts;


     let uname = this.refs.uname.value;
     let psw = this.refs.psw.value;
     let name = this.refs.name.value;
     let surname = this.refs.surname.value;
     let accno = this.refs.accno.value;
     let uid = this.state.uid;
     uid += 1;

     let account = {
    //    uid,
    //    uname,
    //    psw,
       name, 
       surname,
       accno
     };


     accounts.push(account);

     this.setState({
       accounts: accounts
    //    ,uid: uid
     });

     this.refs.accountForm.reset();
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
                            <button type="submit" className="btn btn-primary" id="submit-btn" onClick={(event)=> this.addAccount(event)}>Submit</button>
                        </div>
                    </form>
                    <pre>
                        {accounts.map((account, index) => 
                            <li key={index}>
                                {index+1}. {account.name}, {account.surname}, {account.accno}
                                <button onClick={() => this.deleteAccount(index)} className="delete-btn">Delete Account</button>
                                <button onClick={() => this.editAccount(index)} className="edit-btn">Edit Account</button>
                        </li>)}
                        
                    </pre>
                   
                    </div>
        )
    }
}

export default CreateAccount;