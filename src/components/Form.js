import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Success from './Success'

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            nameError : '',
            email : '',
            emailError : '',
            message : '',
            messageError: '',
            view: 'form'
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleNameChange = e => {
        const nameValidation = RegExp(/^[a-zA-Z]*$/g);

        if(nameValidation.test(e.target.value) && e.target.value.length > 1){
            this.setState({ name : e.target.value})
            this.setState({ nameError : ''})
        }else{
            this.setState({ nameError : 'invalid input'})
        }
    }

    handleEmailChange = e => {
        const emailValidation = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        if(emailValidation.test(e.target.value)){
            this.setState({ email : e.target.value})
            this.setState({ emailError : ''})
        }else{
            console.log('invalid input ')
            this.setState({ emailError : 'invalid input'})
        }
    }

    handleMessageChange = e => {
        if( e.target.value.length > 1 ){
            this.setState({ message : e.target.value})
            this.setState({ messageError : ''})
        }else{
            this.setState({ messageError : "Add more text" })
        }
    }

    handleChangeView = () => {
        this.setState({ view : 'confirmation' })
    
    }
 

    render(){    
        switch( this.state.view ){
            default :
                return(
                    <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="Contact Form"/>
                            <TextField 
                                floatingLabelText="Enter Your Name"
                                label="Name"
                                errorText={ this.state.nameError }
                                onChange={ this.handleNameChange }
                            />
                            <br/>
                            <TextField 
                                floatingLabelText="Enter Your Email"
                                label="Email"
                                errorText={ this.state.emailError }
                                onChange={ this.handleEmailChange }
                            />
                            <br/>
                            <TextField
                                multiline='true'
                                rows={4}
                                floatingLabelText="Enter Your Message"
                                label="Message"
                                maxLength="25"
                                onChange={ this.handleMessageChange }
                                errorText={ this.state.messageError }
                            />
                            <br/>
                            <RaisedButton
                                label="submit"
                                primary={true}
                                style={StyleSheet.button}
                                // onClick = { this.handleChangeView }
                                onSubmit = { this.handleSubmit }
                            />
                        </React.Fragment>
                    </MuiThemeProvider>
                )
                break;
            case 'confirmation':
                return <Success></Success>
                break;
        }
    }
}


