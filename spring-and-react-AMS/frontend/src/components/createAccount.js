import React, { Component } from 'react';

class CreateAccount extends Component{





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

        // let uname = this.refs.uname.value;
        // let psw = this.refs.psw.value;
        let name = this.refs.name.value;
        let surname = this.refs.surname.value;
        let accno = this.refs.accno.value;
        // let uid = this.state.uid;
        // uid += 1;

        // console.log("my name is: "+name);
        // console.log("my surname is: "+surname);
        // console.log("my accno is: "+accno);

        if(this.state.act === 0){ //new
            let account = {
                //    uid,
                //    uname,
                //    psw,
                name, 
                surname,
                accno
            }
        // console.log("my name is: "+name);
        // console.log("my surname is: "+surname);
        // console.log("my accno is: "+accno);
            accounts.push(account);
        }
        else{  //update
            let index = this.state.index;
            accounts[index].name = name;
            accounts[index].surname = surname;
            accounts[index].accno = accno;
        }

        this.setState({
        accounts: accounts,
        act: 0
        //    ,uid: uid
        });

        this.refs.accountForm.reset();
   }

   deleteAccount = (index) => {
        let accounts = this.state.accounts;

        // let account = accounts.find(function(account){
        //     return account.uid === index
        // });

        accounts.splice(index, 1);

        this.setState({
            accounts: accounts
        });

        this.refs.accountForm.reset();
        this.refs.name.focus();
}

    editAccount = (index) => {
        let account = this.state.accounts[index];

        this.refs.name.value = account.name;
        this.refs.surname.value = account.surname;
        this.refs.accno.value = account.accno;

        console.log(this.refs.name.value);
        console.log(this.refs.surname.value);
        console.log(this.refs.accno.value);

        this.setState({
            act: 1,
            index: index
        });

        this.refs.name.focus();


    }
  


    render(){
        let accounts = this.state.accounts;
        return (

                    <div>
                        <h1>Create an Account</h1>
                    <form ref="accountForm">
                        <div className="container">
                            <label className="cred"><br/>Username:<br/></label>
                            <input type="text" className="form-control" id="uname" ref="uname" placeholder="Enter username" />
                            
                            <label className="cred"><br/>Password:<br/></label>
                            <input type="password" className="form-control" id="psw" ref="psw" placeholder="Enter password" />

                            <label className="cred"><br/>First-name:<br/></label>
                            <input type="text" className="form-control" id="fname" ref="name" placeholder="Enter firstname" />
                            
                            <label className="cred"><br/>Surname:<br/></label>
                            <input type="text" className="form-control" id="lname" ref="surname" placeholder="Enter surname"/>
                            
                            <label className="cred"><br/>Account number<br/></label>
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