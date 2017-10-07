import React, { Component } from "react";
// import Sidebar from "../components/Sidebar";
// import Categories from "../components/Categories";
import Navbar from "../../components/Navbar";
// import UserSidebar from "../components/UserSidebar";
import ShindigForm from "../../components/ShindigForm";


class UserPage extends Component {


    constructor(props) {
        super(props);
        const profile = this.props.userProfile
    }

    render() {
        const profile = this.props.userProfile
        /*const userId = this.user_id */

        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <h1>Welcome to Groupwyze!</h1>
                </div>
                <div className="col s4 offset-s4">
                    <h3>Click button below to get started</h3>
                </div>
                <div className="col s2 offset-s5">
                    <ShindigForm />
                </div>
            </div>
        );
    }
}


export default UserPage;


// What do we want the user to see on their page?
    // prior events,
    // how social they've been
    // who else they've been to events with (an event counter)
    //

// So I need to figure out how to:
    // call the user database
    // get the current user
    // pull past events and list them

//     <div className="col grid-xs-4">
//     {/* <ShindigForm /> */}
// </div>
// <div className="col xgrid-xs-6 s12 m4 l3 grey lighten-5">
//     <h3>Column 2</h3>
// </div>
// <div>
//     <h3> Column 3  </h3>
// </div>

// <div className="col s12 m8 l9">
//     {/* insert calendar */}
//     <h3>Column 4 </h3>
// </div>