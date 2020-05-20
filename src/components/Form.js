import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component{
    
    render(){    
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Contact Form"/>
                    <TextField 
                        hintText="Enter Your Name"
                        floatingLabelText="Name"
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                    />
                    <br/>
                    <TextField
                        multiline='true'
                        rows={4}
                        hintText="Enter Your Message"
                        floatingLabelText="Message"
                    />
                    <br/>
                    <RaisedButton
                        label="submit"
                        primary={true}
                        style={StyleSheet.button}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}