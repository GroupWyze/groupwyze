import React from 'react';
import { List, ListItem } from 'material-ui/List';
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