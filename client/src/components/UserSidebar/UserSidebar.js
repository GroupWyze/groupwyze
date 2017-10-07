import React from 'react';
import { List} from 'material-ui/List';
import './UserSidebar.css';

const UserSidebar = (props) => (
    <div className="">
        <List>
             <h5>{props.name}</h5> 
            {/* <ListItem className="shindig-name" disabled="true" primaryText={props.name} /> */}

            <blockquote>
                {props.description}
            </blockquote>
            <h6 className="sidebar-header">Future Shindigs</h6>
            <p>{props.shindigTime}</p>
            <h6 className="sidebar-header">Shindig Invites</h6>
            <p>{props.collapseTime}</p>
            <h6 className="sidebar-header">Past Shindigs</h6>
            <p>{props.location}</p>
            <h6 className="sidebar-header">Shindig Friends</h6>
            <p>{props.location}</p>
             {/* <ListItem disabled="true" primaryText={"Date: " + props.shindigTime} /> 
            <ListItem disabled="true" primaryText={"Voting Ends: " + props.collapseTime} />
            <ListItem disabled="true" primaryText={"Location: " + props.location} /> */}
        </List>
    </div>
);

export default UserSidebar;