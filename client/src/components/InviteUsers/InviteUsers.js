import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class InviteUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            email: "",
            error: false
        };
    }


    // asserts that given email matches the standard email format
    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handleSendEmail = () => {
        var subject = "You've been invited to join GroupWyze";
        var emailBody = "Hello, you have been invited to join GroupWyze! Click here to get started: https://groupwyze.herokuapp.com/shindig/" + this.state.shindigId;
        document.location = "mailto:" + this.state.email + "?subject=" + subject + "&body=" + emailBody;
    }

    render() {

        return (
            <Card>
                <CardHeader
                    title="Invite Friends"
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText expandable={false}>
                    <TextField
                        hintText="Email"
                        fullWidth={true}
                        onChange={this.handleChange}
                    />
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Send Email Invite"
                        primary={true}
                        onClick={this.handleSendEmail}
                    />
                </CardActions>
            </Card>
        );
    }

}


export default InviteUsers;
