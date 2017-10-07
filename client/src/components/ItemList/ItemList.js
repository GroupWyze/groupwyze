import React from "react";
import Item from '../Item';
import YelpItem from '../YelpItem';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "auto",
    height: "auto",
    overflowY: "auto",
  },
};

const ItemList = props => {

    const items = props.items.map(item => {


        // Determine if this is a yelp item
        const isYelpItem = item.yelpId ? true : false;

        if (isYelpItem) {
            return (
                <YelpItem
                    key={item.id}
                    itemId={item.id}
                    itemUrl={item.url}
                    itemName={item.name}
                    yelpId={item.yelpId}
                    isVoteEnabled={true}
                    handleAddVote={props.handleAddVote}
                    votes={props.votes}
                />
            );
        } else {
            return (
                <Item
                    key={item.id}
                    itemId={item.id}
                    itemName={item.name}
                    itemDescription={item.description}
                    itemUrl={item.url}
                    isVoteEnabled={true}
                    handleAddVote={props.handleAddVote}
                    votes={props.votes}
                />
            );
        };
    });

    return (
        <GridList
                cellHeight='auto'
                cols={1}
                style={styles.gridList}
            >
            {items}
        </GridList>
    );
}


export default ItemList;
