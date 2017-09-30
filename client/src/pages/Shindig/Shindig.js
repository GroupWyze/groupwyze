import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Categories from "../../components/Categories";
import API from "../../utils/API";


class Shindig extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: "",
            name: "",
            description: "",
            address: "",
            city: "",
            zip: "",
            shindigTime: "",
            collapseTime: "",
            categories: []
        };
    }

    componentDidMount() {
        let pathname = window.location.pathname;
        let id = pathname.substring(pathname.indexOf("shindig/") + 8);
        this.loadShindig(id);
    }

    loadShindig = (id) => {
        API.getShindig(id)
            .then(res => this.setState({
                shindigId: res.data.id,
                name: res.data.name,
                description: res.data.description,
                address: res.data.address,
                city: res.data.city,
                zip: res.data.zip,
                shindigTime: res.data.shindigTime,
                collapseTime: res.data.collapseTime
            }))
            .then(API.getAllCategories(this.state.shindigId)
                .then(res => this.setState({
                    categories: res.data
                }))
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l3">
                    <Sidebar
                        name={this.state.name}
                        description={this.state.description}
                        shindigId={this.state.shindigId}
                        location={this.state.address ? this.state.address + ", " + this.state.city + ", " + this.state.zip : this.state.city}
                        shindigTime={this.state.shindigTime}
                        collapseTime={this.state.collapseTime}
                    />
                </div>
                {/* <div className="col s12 m8 l9">
                    <Categories
                        categories={this.state.categories}
                    />
                </div> */}
            </div>
        );
    }
}


export default Shindig;
