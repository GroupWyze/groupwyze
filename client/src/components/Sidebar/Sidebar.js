import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import './Sidebar.css';

const Sidebar = (props) => (
    <div className="side-bar">
        <List>
            {/* <h5>{props.name}</h5> */}
            <ListItem className="shindig-name" disabled="true" primaryText={props.name} />
            <ListItem
                primaryText="Description"
                nestedItems={[
                    <ListItem>{props.description}</ListItem>
                ]}
            />
            <ListItem primaryText={"Date: " + props.shindigTime }/>
            <ListItem primaryText={"Voting Ends: " + props.collapseTime } />
            <ListItem primaryText={"Location: " + props.location } />
        </List>
    </div>
);

export default Sidebar;