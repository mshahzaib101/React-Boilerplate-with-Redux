import React, { Component } from 'react';
import '../index.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {red500} from 'material-ui/styles/colors';


const style = {
    margin: 5,
    color: red500
  };
const Navbar = () => (
    <div >
  <AppBar
    title="Title"
    iconElementRight={<RaisedButton   className="Nav1" label="Login with Facebook" style={style} />}
  />
  </div>
);

export default Navbar