import React, { Component } from 'react';
import Find from 'array.prototype.find';

class CreateAccount extends Component{


    constructor(){
        super();
        this.addAccount = this.addAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.editAccount = this.editAccount.bind(this);
        this.state = {
          accounts: [],
          index: '',
          act: 0
        }
      }

    addAccount(e) {
        e.preventDefault();
   
        var accounts = this.state.accounts;
   
        var name = this.refs.name.value;
        var surname = this.refs.surname.value;
        var accno = this.refs.accno.value;
   
        // let act = 0;
   
        if(this.state.act === 0){ //new
           let account = {
               //    uid,
               //    uname,
               //    psw,
               name, 
               surname,
               accno
           }
        //    let index = this.state.index;
           // accounts[index].name = name;
           // accounts[index].surname = surname;
           // accounts[index].accno = accno;
           accounts.push(account);
        //    act = 1;
        //    console.log("hello world")
        //    console.log("hello world")
       }
       else{  //update
           let index = this.state.index;
           accounts[index].name = name;
           accounts[index].surname = surname;
           accounts[index].accno = accno;
           console.log("baba");
       }
   
        this.setState({
          accounts: accounts,
          act:0
        });
   
        this.refs.accountForm.reset();
        this.refs.name.focus();
      }

    deleteAccount = (i) => {
        let accounts = this.state.accounts;

        // let account = accounts.find(function(account){
        //     return account.uid === index
        // });

        accounts.splice(i, 1);

        this.setState({
            accounts: accounts
        });

        this.refs.accountForm.reset();
        this.refs.name.focus();
    }

    editAccount = (i) => {

        var accounts = this.state.accounts;

        let account = this.state.accounts[i];

        // let j = index;

        this.refs.name.value = account.name;
        this.refs.surname.value = account.surname;
        this.refs.accno.value = account.accno;

        this.setState({
            // accounts: accounts,
            act: 1,
            index: i
        });
        // this.refs.accountForm.reset();
        this.refs.name.focus();

        // console.log("hello world")
        // console.log("hello world")


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
                            <button type="submit" className="btn btn-primary" id="submit-btn" onClick={(e)=> this.addAccount(e)}>Submit</button>
                        </div>
                    </form>
                    <pre>
                        {accounts.map((account, i) => 
                            <li key={i}>
                                {i+1}. {account.name}, {account.surname}, {account.accno}
                                <button onClick={() => this.deleteAccount(i)} className="delete-btn">Delete Account</button>
                                <button onClick={() => this.editAccount(i)} className="edit-btn">Edit Account</button>
                        </li>)}
                        
                    </pre>
                   
                    </div>
        )
    }
}

export default CreateAccount;