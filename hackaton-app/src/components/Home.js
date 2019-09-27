import React, { Component } from 'react';
import Navbar from './navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class HomePage extends Component {
constructor() {
  super();
  this.state = {
   }
}
render() {
  return(
    <div>
      <MuiThemeProvider>
      <Navbar />
      </MuiThemeProvider>
    </div>
  )
}
}
export default HomePage;
