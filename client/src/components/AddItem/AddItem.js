import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import API from "../../utils/API";

const styles = {
    buttonStyle: {
        marginRight: 20,
    },
    checkbox: {
        marginBottom: 16,
    }
}

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryId: props.categoryData.id,
            itemName: "",
            itemDescription: ""
        };

    }

    handleAddItem = e => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryId = this.state.categoryId;
        const itemData = {
            name: this.state.itemName,
            description: this.state.itemDescription
        }

        API.createItem(shindigId, categoryId, itemData)
            .then(this.props.onCategoriesChange(shindigId))
            .then(this.setState({
                name: "",
                description: ""
            }))
            .catch(err => console.log(err));
    }

    onNameChange = itemName => {
        this.setState({ itemName });
    }

    onDescriptionChange = itemDescription => {
        this.setState({ itemDescription });
    }

    render() {

        return (
            <form>
                <div className="row">
                    <label>Item Name</label>
                    <input
                        value={this.state.itemName}
                        onChange={event => this.onNameChange(event.target.value)}
                    />
                    <label>Description</label>
                    <input
                        value={this.state.itemDescription}
                        onChange={event => this.onDescriptionChange(event.target.value)}
                    />
                </div>
                <RaisedButton style={styles.buttonStyle} label="Submit" primary={true} onClick={(e) => this.handleAddItem(e)} />
            </form>
        );

    }
}


export default AddItem;
