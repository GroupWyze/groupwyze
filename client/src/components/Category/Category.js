import React, { Component } from "react";
import CategorySettings from '../CategorySettings';
import ItemList from '../ItemList';
import AddItem from '../AddItem';
import YelpSearch from '../YelpSearch';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { red500 } from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import Setting from 'material-ui/svg-icons/action/settings';
import Search from 'material-ui/svg-icons/action/search';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Add from 'material-ui/svg-icons/content/add';
import API from "../../utils/API";


const styles = {
    categoryCard: {
        marginBottom: "20px"
    },
    tab: {
        backgroundColor: red500,
    }
}


class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryId: props.categoryData.id,
            items: [],
            votes: [],
            snackbarOpen: false,
            snackbarMessage: "",
            businesses: []
        };
    }

    componentDidMount() {
        this.loadItems();
        this.setVotePolling();
    }

    componentWillUnmount() {
        clearInterval();
    }

    setVotePolling = () => {
        setInterval(() => {
            API.getAllVotesForCategory(this.state.shindigId, this.state.categoryId)
                .then(res => {
                    let totalVoteCount = 0;
                    let votePercentage = [];

                    //Get total votes applied
                    res.data.forEach(item => totalVoteCount += item.count);

                    //
                    res.data.forEach(item => {
                        votePercentage.push({
                            itemId: item.ItemId,
                            percent: Math.round((item.count / totalVoteCount) * 100)
                        })
                    })
                    this.setState({
                        votes: votePercentage
                    });
                })
                .catch(err => console.log(err));
        }, 5000);
    }


    loadItems = () => {
        API.getAllItems(this.state.shindigId, this.state.categoryId)
            .then(res => this.setState({
                items: res.data
            }))
            .catch(err => console.log(err));
    };

    handleAddVote = (e, itemId) => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryId = this.state.categoryId;

        //determine if user still has votes to give for the category

        let votesApplied = this.getVoteCountForUserForCategory(shindigId, categoryId, itemId);
        if (votesApplied < 3) {
            API.createVote(shindigId, categoryId, itemId)
                .then(localStorage.setItem(categoryId, votesApplied + 1))
                .then(this.handleOpenSnackbar("Vote applied"))
                .catch(err => console.log(err));
        } else {
            this.handleOpenSnackbar("You've used all of your votes for this category")
        }

    }

    getVoteCountForUserForCategory = (shindigId, categoryId, itemId) => {
        console.log("Category Id: " + categoryId);
        let votesApplied = parseInt(localStorage.getItem(categoryId), 10);
        console.log("getVoteCountForUserForCategory votesApplied: " + votesApplied);
        if (!votesApplied) {
            console.log("null path");
            return 0;
        } else {
            console.log("return " + votesApplied);
            return votesApplied;
        }

        // TODO: add API.getAllVotesForUser.
        // This is a backup for if the number of votes they have used
        // for a category is no longer in local storage

    }

    onNameChange = itemName => {
        this.setState({
            itemName
        });
    }

    onDescriptionChange = itemDescription => {
        this.setState({
            itemDescription
        });
    }

    handleOpenSnackbar = (message) => {
        this.setState({
            snackbarOpen: true,
            snackbarMessage: message
        });
    };

    handleRequestClose = () => {
        this.setState({
            snackbarOpen: false,
            snackbarMessage: ""
        });
    };

    onYelpSearch = (e, term, location) => {
        e.preventDefault();
        API.searchYelp(term, location)
            .then(res => {
                this.setState({
                    businesses: res.data
                })
                console.log(this.state.businesses)
            });
    }

    render() {

        return (
            <div>
              <Card style={ styles.categoryCard }>
                <CardTitle title={ this.props.categoryData.name } />
                <Tabs>
                  <Tab style={ styles.tab } icon={ <ViewList /> }>
                    <CardText expandable={ false }>
                      <ItemList shindigId={ this.state.shindigId } categoryId={ this.state.categoryId } items={ this.state.items } handleAddVote={ this.handleAddVote } votes={ this.state.votes }
                      />
                    </CardText>
                  </Tab>
                  <Tab style={ styles.tab } icon={ <Add /> }>
                    <CardText expandable={ false }>
                      <AddItem shindigId={ this.props.shindigId } categoryData={ this.props.categoryData } onItemAdd={ this.loadItems } />
                    </CardText>
                  </Tab>
                  <Tab style={ styles.tab } display={ this.props.categoryData.yelpEnabled } icon={ <Search /> }>
                    <CardText expandable={ false }>
                      <YelpSearch shindigId={ this.props.shindigId } categoryData={ this.props.categoryData } onItemAdd={ this.loadItems } handleYelpSearch={ this.onYelpSearch } location={ this.props.location }
                        businesses={ this.state.businesses } />
                    </CardText>
                  </Tab>
                  <Tab style={ styles.tab } icon={ <Setting /> }>
                    <CardText expandable={ false }>
                      <CategorySettings shindigId={ this.props.shindigId } categoryData={ this.props.categoryData } onCategoriesChange={ this.props.onCategoriesChange } />
                    </CardText>
                  </Tab>
                </Tabs>
              </Card>
              <Snackbar open={ this.state.snackbarOpen } message={ this.state.snackbarMessage } autoHideDuration={ 4000 } onRequestClose={ this.handleRequestClose } />
            </div>
            );
    };
}
;

export default Category;