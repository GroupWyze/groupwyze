import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Snackbar from 'material-ui/Snackbar';
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
            itemDescription: "",
            itemUrl: "",
            snackbarOpen: false
        };

    }

    handleAddItem = e => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryId = this.state.categoryId;
        const itemData = {
            name: this.state.itemName,
            description: this.state.itemDescription,
            url: this.state.itemUrl
        }

        API.createItem(shindigId, categoryId, itemData)
            .then(this.props.onItemAdd(shindigId))
            .then(this.setState({
                snackbarOpen: true
            }))
            .then(this.setState({
                itemName: "",
                itemDescription: "",
                itemUrl: ""
            }))
            .catch(err => console.log(err));
    }

    handleRequestClose = () => {
        this.setState({
            snackbarOpen: false,
        });
    };

    onNameChange = itemName => {
        this.setState({ itemName });
    }

    onDescriptionChange = itemDescription => {
        this.setState({ itemDescription });
    }

    onUrlChange = itemUrl => {
        this.setState({ itemUrl });
    }

    render() {

        return (
            <form>
                <div className="row">
                    <Subheader>Add Item</Subheader>
                    <label>Item Name</label>
                    <input
                        value={this.state.itemName}
                        onChange={event => this.onNameChange(event.target.value)}
                    />
                    <label>Why {this.state.itemName}?</label>
                    <input
                        value={this.state.itemDescription}
                        onChange={event => this.onDescriptionChange(event.target.value)}
                    />
                    <label>URL</label>
                    <input
                        value={this.state.itemUrl}
                        onChange={event => this.onUrlChange(event.target.value)}
                    />
                </div>
                <RaisedButton style={styles.buttonStyle} label="Submit" primary={true} onClick={(e) => this.handleAddItem(e)} />
                <Snackbar
                    open={this.state.snackbarOpen}
                    message={"Item added successfully"}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </form>
        );

    }
}


export default AddItem;
