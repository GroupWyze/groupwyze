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
                <div className="col s6 offset-s3">
                    <h1>Welcome to Groupwyze!</h1>
                </div>
                <br />
                <br />
                <div className="col s2 offset-s5">
                    <ShindigForm />
                </div>
            </div>
        );
    }
}


export default UserPage;