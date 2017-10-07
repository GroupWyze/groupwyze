import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import YelpSearchResultList from '../YelpSearchResultList';

const styles = {
    buttonStyle: {
        marginRight: 20,
    },
    checkbox: {
        marginBottom: 16,
    }
}

class YelpSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryId: props.categoryData.id,
            term: "",
            location: props.location
        };

    }

    onInputChange = term => {
        this.setState({ term });
    }

    render() {

        return (
            <div>
                <form>
                    <div className="row">
                        <Subheader>Search Yelp</Subheader>
                        <label>Term</label>
                        <input
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)}
                        />

                    </div>
                    <RaisedButton
                        style={styles.buttonStyle}
                        label="Search"
                        primary={true}
                        onClick={(e) => this.props.handleYelpSearch(e, this.state.location, this.state.term)}
                    />
                </form>
                
                <YelpSearchResultList
                    shindigId={this.state.shindigId}
                    categoryId={this.state.categoryId}
                    searchTerm={this.state.term}
                    businesses={this.props.businesses}
                    onItemAdd={this.props.onItemAdd}

                />
            </div>
        );

    }
}


export default YelpSearch;
