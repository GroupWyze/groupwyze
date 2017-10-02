import React, { Component } from "react";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ContentAdd from 'material-ui/svg-icons/content/add';
import API from "../../utils/API";
import "./AddCategory.css";

const styles = {
    floatingActionButtonStyle: {
        position: "fixed",
        bottom: "23px",
        right: "23px",
        zIndex: 1
    },
    buttonStyle: {
        marginRight: 20,
    },
    checkbox: {
        marginBottom: 16,
    }
}

class AddCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryName: "",
            userAddEnabled: true,
            yelpEnabled: false,
            isModalOpen: false
        };

    }

    handleAddCategory = e => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryData = {
            name: this.state.categoryName,
            yelpEnabled: this.state.yelpEnabled,
            userAddEnabled: this.state.userAddEnabled
        }

        API.createCategory(shindigId, categoryData)
            .then(this.props.onCategoriesChange(shindigId))
            .then(this.setState({
                isModalOpen: false,
                categoryName: "",
                yelpEnabled: false
            }))
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


    toggleModal = e => {
        e.preventDefault();
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    render() {

        if (this.state.isModalOpen) {

            return (
                <div>
                    <div className="add-category--modal row">
                        <Card className="col s6 offset-s3 add-category--modal-content">
                            <CardTitle title="Create New Category" />
                            <CardText expandable={false}>
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
                                    <RaisedButton style={styles.buttonStyle} label="Submit" primary={true} onClick={(e) => this.handleAddCategory(e)} />
                                    <RaisedButton style={styles.buttonStyle} label="Cancel" onClick={(e) => this.toggleModal(e)} />
                                </form>
                            </CardText>
                        </Card>
                    </div>
                    <FloatingActionButton onClick={(e) => this.toggleModal(e)} disabled={true} style={styles.floatingActionButtonStyle}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            );
        } else {
            return (
                <div>
                    <FloatingActionButton onClick={(e) => this.toggleModal(e)} style={styles.floatingActionButtonStyle}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            );
        }


    }
}


export default AddCategory;
