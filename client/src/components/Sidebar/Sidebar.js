import React from 'react';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import ShindigUserList from "../ShindigUserList";
import InviteUsers from "../InviteUsers";
import './Sidebar.css';

const Sidebar = (props) => (
    <div>
        <List>
            <h5>{props.name}</h5>
            <blockquote>
                {props.description}
            </blockquote>
            <h6 className="sidebar-header">Date</h6>
            <p>{moment(props.shindigTime).format("MMMM Do YYYY, h:mm a")}</p>
            <h6 className="sidebar-header">Voting Ends</h6>
            <p>{moment(props.collapseTime).format("MMMM Do YYYY, h:mm a")}</p>
            <h6 className="sidebar-header">Location</h6>
            <p>{props.location}</p>
        </List>
        <Divider style={{ marginTop: "10px" }} />
        <ShindigUserList shindigId={props.shindigId}/>
        <Divider style={{ marginTop: "10px" }} />
        <InviteUsers shindigId={props.shindigId}/>
    </div>
);

export default Sidebar;