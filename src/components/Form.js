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
                        // defaultValue="Message"
                        // variant="outlined"
                        hintText="Enter Your Message"
                        floatingLabelText="Message"
                        // variant="outlined"
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