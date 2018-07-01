import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Navbar, Footer, Jumbotron, NavItem, MenuItem, NavDropdown, Dropdown } from 'react-bootstrap';
import Main from './components/main';
// import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor(){
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event){
    event.preventDefault();
    this.setState({ displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event){
    event.preventDefault();
    this.setState({ displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

render(){
  return(
    <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <a className="navbar-brand" href="/">AMS</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/createAccount">Create Account <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/viewAccount">View Account <span className="sr-only">(current)</span></a>
           </li>
           {/* <li className="nav-item">
             <a className="nav-link" href="/">Link</a>
           </li> */}
           <li className="nav-item dropdown ">
             <a className="nav-link dropdown-toggle" onClick={this.showDropdownMenu} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Account <span className="sr-only">(current)</span>
             </a>
             {this.state.displayMenu ? (
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <a className="dropdown-item" href="/viewAccount">View Accounts</a>
               <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="/createAccount">Add Account</a>
               {/* <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="/">Something else here</a> */}
             </div>
             ):
             (
               null
             )
             }
           </li>
           <li className="nav-item">
             <a className="nav-link disabled" href="#">Disabled</a>
           </li>
         </ul>
       </div>

     </nav>
           <h1 className="App-title">{}</h1>
         {/* </header> */}
         {/* <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p> */}
         <div className="jumbotron">
         <h1 className="display-3">Welcome to AMS</h1>
           <p className="lead">This is a simple account management system.</p>
           <hr className="my-4"></hr>
           <p>It allows users to create an account, view their account, update their account and save any changes on their account.</p>
       </div>
       <div>
         <Main>
       </Main>
      </div>
      <div>
      {/* <!-- Footer --> */}
      <footer class="page-footer font-small cyan darken-3 mt-4">

        {/* <!-- Footer Elements --> */}
        <div class="container">

          {/* <!-- Grid row--> */}
          <div class="row">

            {/* <!-- Grid column --> */}
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">

                {/* <!-- Github --> */}
                <a class="github-ic">
                  <i class="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/* <!-- Bitbucket --> */}
                  <a class="bitb-ic">
                  <i class="fa fa-bitbucket fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/* <!--Linkedin --> */}
                <a class="li-ic">
                  <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row--> */}

        </div>
        {/* <!-- Footer Elements --> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-3">© 2018 Copyright: AMS
        </div>
        {/* <!-- Copyright --> */}

      </footer>
      {/* <!-- Footer --> */}
    </div>
    </div>
  )
}








// Previous code:
  // addAccount(event) {
  //   event.preventDefault();
  //   let name = this.refs.name.value;
  //   let surname = this.refs.surname.value;
  //   let accno = this.refs.accno.value;

  //   let account = {
  //     name, 
  //     surname,
  //     accno
  //   };

  //   let accounts = this.state.accounts;

  //   accounts.push(account);

  //   this.setState({
  //     accounts: accounts
  //   });

  //   this.refs.accountForm.reset();
  // }

  // constructor(){
  //   super();
  //   this.addAccount = this.addAccount.bind(this)
  //   this.state = {
  //     accounts: [],
  //     title: "Welcome to AMS"
  //   }
  // }

  // state = {};

  // componentDidMount() {
  //   setInterval(this.hello, 250);
  // }

  // hello = () => {
  //   fetch('/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //         this.setState({message: message});
  //       });
  // };

//   render() {
//     let title = this.state.title;
//     let accounts = this.state.accounts;
//     return (
//       <div className="App">
//         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a class="navbar-brand" href="#">AMS</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
    
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item active">
//             <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
//           </li>
//           {/* <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//           </li> */}
//           <li class="nav-item dropdown ">
//             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Account <span class="sr-only">(current)</span>
//             </a>
//             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a class="dropdown-item" href="#">View Accounts</a>
//               <div class="dropdown-divider"></div>
//               <a class="dropdown-item" href="#">Add Account</a>
//               <div class="dropdown-divider"></div>
//               <a class="dropdown-item" href="#">Something else here</a>
//             </div>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled" href="#">Disabled</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//           <h1 className="App-title">{this.state.message}</h1>
//         {/* </header> */}
//         {/* <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <div class="jumbotron">
//         <h1 class="display-3">{title}</h1>
//           <p class="lead">This is a simple account management system.</p>
//           <hr class="my-4"></hr>
//           <p>It allows users to create an account, view their account, update their account and save any changes on their account.</p>
//       </div>
//         <div className="App-intro">
//          <div class="container">
//             <form ref="accountForm">
//             <div class="input-group">
//             <label for="fname">First-name:</label><br/>
//             <input type="text" class="form-control" id="fname" ref="name" placeholder="Enter firstname" />
//             </div>
//             <div class="input-group">
//             <label for="sname">Surname:</label><br/>
//             <input type="text" class="form-control" id="lname" ref="surname" placeholder="Enter surname"/>
//             </div>
//             <div class="input-group">
//             <label for="accno">Account number</label><br/>
//             <input type="text" class="form-control" id="acc_no" ref="accno" placeholder="Enter account number"/>
//             </div>
//             <button type="submit" class="btn btn-primary" role="button" id="submit-btn" onClick={this.addAccount}>Submit</button>
//           </form>
           
    
    
//         </div>
//           </div>
//       </div>
//     );
//   }
// }
}
export default App;
