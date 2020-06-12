import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider'
import CheckBox from 'material-ui/Checkbox'

import RaisedButton from 'material-ui/RaisedButton';

export default class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Auto Body and Repair"/>
                    <h6>(213)365-6000     |       2501 James M Wood Blvd. Los Angeles, CA 90006</h6>
                    <Divider/>
                    <form>
                    <h2>Your Information</h2>
                       <TextField 
                            floatingLabelText="Enter Your Name"
                              label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                        />
                        <TextField 
                            floatingLabelText="Enter Your Email"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                           
                        />
                       <TextField 
                            floatingLabelText="Phone"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                        />
                        <br/>
                        <TextField 
                            floatingLabelText="Address"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                           
                        />
                        <TextField 
                            floatingLabelText="City"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                           
                        />
                        <TextField 
                            floatingLabelText="State"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                        />
                        <TextField 
                            floatingLabelText="Zip Code"
                            label="Name"
                            errorText={ this.state.nameError }
                            onChange={ this.handleNameChange }
                        />
                        <br/>
                        <h5>In order to ensure you are completely satisfied with your repair experience, we would like to know the best way to keep
                        you informed on the status of your vehicle throughout your repair.
                        </h5>
                        <br/>
                        <h3>
                            My preferred method of communication for Lucky Auto Body on my vehicle's repair is:
                        </h3>
                        <br/>
                        <div>
                            <CheckBox
                                label="Text"    
                                labelPlacement="end"
                                defaultChecked
                            />
                            <CheckBox
                                label="Email"    
                                labelPlacement="end"
                            />
                            <CheckBox
                                label="Cell Phone"    
                                labelPlacement="end"
                            />
                        </div>
                        <br/>
                        <h3>Do you have any concerns about your vehicle repair or claim?</h3>
                        <TextField
                            multiline
                            fullWidth
                            rowsMax={4}
                            floatingLabelText="Notes"
                        />
                        <br/>
                        <h2>Will you be working with an insurance company on your repairs?  </h2>
                        <div>
                        <CheckBox
                            label="Yes"    
                            labelPlacement="end"
                        />
                        <CheckBox 
                            label="No"    
                            labelPlacement="end"
                        />
                        <br/>
                        <span>If Yes,</span>
                        <CheckBox
                            label="Claimant"    
                            labelPlacement="end"
                        />
                        <CheckBox
                            label="Insured"    
                            labelPlacement="end"
                        />
                        <TextField
                            label="Insurance Company:"
                            floatingLabelText="Insurance Company"
                        />
                        <TextField
                            label="Claim #:"
                            floatingLabelText="Claim #"
                        />
                        </div>
                    </form>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }


}