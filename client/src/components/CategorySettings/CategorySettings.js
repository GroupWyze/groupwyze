import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import API from "../../utils/API";

const styles = {
    buttonStyle: {
        marginRight: 20,
    },
    checkbox: {
        marginBottom: 16,
    }
}

class CategorySettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryId: props.categoryData.id,
            categoryName: props.categoryData.name,
            userAddEnabled: props.categoryData.userAddEnabled,
            yelpEnabled: props.categoryData.yelpEnabled,
        };

    }

    handleUpdateCategory = e => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryId = this.state.categoryId;
        const categoryData = {
            name: this.state.categoryName,
            yelpEnabled: this.state.yelpEnabled,
            userAddEnabled: this.state.userAddEnabled
        }

        API.updateCategory(shindigId, categoryId, categoryData)
            .then(this.props.onCategoriesChange(shindigId))
            .then(this.setState)
            .catch(err => console.log(err));
    }

    onInputChange = categoryName => {
        this.setState({ categoryName });
    }

    onYelpCheck = () => {
        this.setState((oldState) => {
            return {
                yelpEnabled: !oldState.yelpEnabled,
            };
        });
    }

    render() {

        return (
            <form>
                <div className="row">
                    <label>Category Name</label>
                    <input
                        value={this.state.categoryName}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                    <Checkbox
                        label="Yelp Enabled"
                        style={styles.checkbox}
                        checked={this.state.yelpEnabled}
                        onCheck={this.onYelpCheck}
                    />
                </div>
                <RaisedButton style={styles.buttonStyle} label="Submit" primary={true} onClick={(e) => this.handleUpdateCategory(e)} />
            </form>
        );

    }
}


export default CategorySettings;
