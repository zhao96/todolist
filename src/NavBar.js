import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import AlarmIcon from '@material-ui/icons/Alarm'
// import AlarmSharpIcon from '@material-ui/icons/AlarmSharp'

import { purple } from '@material-ui/core/colors'

const primary = purple[600];

const NavBar = () => {
    return (
        <div>
        <AppBar position="static">
            <Toolbar color="secondary">
                <IconButton color="inherit" arial-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title">
                React & Material-UI
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default NavBar;
