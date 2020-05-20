import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Success extends React.Component{
    
    render(){    
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h2>Thank You For Your Submission</h2>
                    <p>You will get an email shortly</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}