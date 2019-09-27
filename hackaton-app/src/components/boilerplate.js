// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import * as firebase from 'firebase';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Avatar from 'material-ui/Avatar';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import TabsExampleSimple from './practice';

// class App extends Component {
// constructor() {
//   super();
//   this.state={
//     userName:'a',
//     image: 'a'
//    }
// }

//   login = () => {
//     var that = this;
//     // Sign in using a popup.
// var provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('user_friends');
// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
  
// console.log(user
  
// )
// console.log(that.state.a)
// that.setState({image: user.photoURL})
// that.setState({userName: user.displayName})
// console.log(that.state.a)
// });


//   }
//   signout = () => {
//     firebase.auth().signOut().then(function() {
//       // Sign-out successful.
//     }).catch(function(error) {
//       // An error happened.
//     });
//     console.log(`user have signed out`)
//   }
//   render() {
//     return (
//       <MuiThemeProvider >
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <h1 onClick={this.login}>Login</h1>
//         <h1 onClick={this.signout}>SignOut</h1>

//       </div>
//       <List>
//     <ListItem
//       disabled={true}
//       leftAvatar={
//         <Avatar src={this.state.image} />
//       }
//     >
//       {this.state.userName}
//     </ListItem>
//     </List>
//     <TabsExampleSimple />
//       </MuiThemeProvider>
//     );
//   }
// }

// export default App;
