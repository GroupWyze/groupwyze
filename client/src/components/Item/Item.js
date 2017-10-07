import React from "react";
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import { fullWhite, red500 } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';



const Item = props => {

    const itemDetails = [];

    let votePercentage;

    props.votes.forEach(v => {
        if (props.itemId === v.itemId) {
            votePercentage = v.percent
        }
    })

    // Adds http:// to user provided urls if they weren't provided.
    // Required for href's to be functional
    function addhttp(url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    // Determines the length of the item description, and limits the length
    const createSubtitle = itemDescription => {
        if (itemDescription.length > 25) {
            return itemDescription.substring(0, 24) + "...";
        } else {
            return itemDescription;
        }
    }

    // Adds itemDescription to the itemDetails array if it exists
    props.itemDescription ? itemDetails.push(props.itemDescription) : console.log("No description");

    // Adds itemUrl to the itemDetails array if it exists
    props.itemUrl ? itemDetails.push(addhttp(props.itemUrl)) : console.log("No url");


    // Creates the items that will be displayed in the dropdown for the item
    const nestedItems = itemDetails.map(item => {

        // Determine if this is a url, first is original, second is removing 'unecessary escape characters'
        // const isUrl = item.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
        const isUrl = item.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/);
        if (isUrl) {
            return (
                <a key={item} target="_blank" href={item}>{item}</a>
            );
        } else {
            return (
                <p key={item.substring(0, 10)}>{item}</p>
            );
        }
    });

    return (
        <div key={props.itemId} className="row">
            <Card>
                <CardHeader
                    title={props.itemName}
                    subtitle={props.itemDescription ? createSubtitle(props.itemDescription) : undefined}
                    actAsExpander={false}
                    showExpandableButton={true}
                    avatar={<Avatar
                        onClick={(e) => props.handleAddVote(e, props.itemId)}
                        icon={<ArrowUpward />}
                        color={fullWhite}
                        backgroundColor={red500}
                        size={30}
                    />}
                />
                <CardText expandable={true}>{nestedItems}</CardText>
                <LinearProgress
                    mode="determinate"
                    value={votePercentage}
                    style={{
                        height: "8px"
                    }}
                />
            </Card>
        </div >
    );
}


export default Item;
