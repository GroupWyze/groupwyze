import React from 'react';
import { List} from 'material-ui/List';
import './Sidebar.css';
import moment from 'moment';

const Sidebar = (props) => (
    <div className="">
        <List>
             <h5>{props.name}</h5> 
            {/* <ListItem className="shindig-name" disabled="true" primaryText={props.name} /> */}

            <blockquote>
                {props.description}
            </blockquote>
            <h6 className="sidebar-header">Date</h6>
            <p>{moment(props.shindigTime).format("MMMM Do YYYY, h:mm a")}</p>
            <h6 className="sidebar-header">Voting Ends</h6>
            <p>{moment(props.collapseTime).format("MMMM Do YYYY, h:mm a")}</p>
            <h6 className="sidebar-header">Location</h6>
            <p>{props.location}</p>
             {/* <ListItem disabled="true" primaryText={"Date: " + props.shindigTime} /> 
            <ListItem disabled="true" primaryText={"Voting Ends: " + props.collapseTime} />
            <ListItem disabled="true" primaryText={"Location: " + props.location} /> */}
        </List>
    </div>
);

export default Sidebar;