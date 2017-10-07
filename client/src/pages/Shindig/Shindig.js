import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Categories from "../../components/Categories";
import API from "../../utils/API";


class Shindig extends Component {
    constructor(props) {
        super(props);

        let pathname = window.location.pathname;
        let id = pathname.substring(pathname.indexOf("shindig/") + 8);

        this.state = {
            shindigId: id,
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
        this.loadShindig(this.state.shindigId);
        this.loadCategories(this.state.shindigId);
    }

    loadShindig = id => {
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
            .catch(err => console.log(err));
    };

    loadCategories = shindigId => {
        API.getAllCategories(this.state.shindigId)
            .then(res => this.setState({
                categories: res.data
            }))
            .catch(err => console.log(err));
    };

    handleCategoryChange = shindigId => {
        this.loadCategories(shindigId);
    }

    render() {

        const handleCategoryChange = this.handleCategoryChange;

        return (
            <div className="row">
                <div className="col s12 m4 l3 grey lighten-5">
                    <Sidebar
                        name={this.state.name}
                        description={this.state.description}
                        shindigId={this.state.shindigId}
                        location={this.state.address ? this.state.address + ", " + this.state.city + ", " + this.state.zip : this.state.city}
                        shindigTime={this.state.shindigTime}
                        collapseTime={this.state.collapseTime}
                    />
                </div>
                <div className="col s12 m8 l9">
                    <Categories
                        onCategoriesChange={handleCategoryChange}
                        categories={this.state.categories}
                        shindigId={this.state.shindigId}
                        location={this.state.address ? this.state.address + ", " + this.state.city + ", " + this.state.zip : this.state.city}
                    />
                </div>
            </div>
        );
    }
}


export default Shindig;
