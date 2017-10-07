import React, { Component } from "react";
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';
import API from "../../utils/API";
import { blue300, indigo900 } from 'material-ui/styles/colors';


class ShindigUserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            users: []
        };
    }

    componentDidMount() {
        this.loadUsers(this.state.shindigId);
    }

    loadUsers = shindigId => {
        API.getAllUsersForAShindig(shindigId)
            .then(res => 
                {
                    console.log(res);
                    this.setState({
                users: res.data
            })
        })
            .catch(err => console.log(err));
    }

    userResults = () => {
        return this.state.users.map(userData => {
            return (
                <ListItem
                    primaryText={userData.User.name}
                    leftAvatar={<Avatar
                        color={blue300}
                        backgroundColor={indigo900}
                        size={30}
                    >
                        {userData.User.name.charAt(0)}
                    </Avatar>}
                />
            );
        });
    }




    render() {

        const users = this.userResults();

        return (
            <List>
                <Subheader>Members</Subheader>
                {users}
            </List>
        );
    }

}


export default ShindigUserList;
