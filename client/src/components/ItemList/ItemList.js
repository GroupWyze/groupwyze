import React from "react";
import Item from '../Item';

const ItemList = props => {

    const items = props.items.map(item => {


        // Determine if this is a yelp item
        // const isYelpItem = item.yelpId ? true : false;

        // if (isYelpItem) {
        //     return (
        //         <YelpItem
        //             itemId={item.id}
        //             itemName={item.name}
        //             yelpId={item.yelpId}
        //             description={item.description}
        //             isVoteEnabled={true}
        //         />
        //     );
        // } else {
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
        // };
    });

    return (
        <div>
            {items}
        </div>
    );
}


export default ItemList;
