import React from "react";
import Divider from 'material-ui/Divider';
import YelpSearchResultItem from '../YelpSearchResultItem';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const YelpSearchResultList = props => {

    const searchResults = props.businesses.map(business => {
        return (
            <YelpSearchResultItem
                shindigId={props.shindigId}
                categoryId={props.categoryId}
                key={business.id}
                yelpId={business.id}
                businessName={business.name}
                price={business.price}
                rating={business.rating}
                reviewCount={business.review_count}
                businessUrl={business.url}
                displayAddress={business.location.display_address}
                imgUrl={business.image_url}
                onItemAdd={props.onItemAdd}
            />
        );
    });



    return (
        <div>
            <Divider style={{marginTop: "10px"}}/>
            <div style={styles.root}>
            <GridList
                cellHeight={130}
                cols={1}
                style={styles.gridList}
            >
                {searchResults}
            </GridList>
            </div>
        </div>
    );
}


export default YelpSearchResultList;
