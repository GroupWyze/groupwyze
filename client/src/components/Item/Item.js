import React from "react";
// import { ListItem } from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import { fullWhite, red500} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';



const Item = props => {

    const itemDetails = [];

    function addhttp(url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    props.itemDescription ? itemDetails.push(props.itemDescription) : console.log("No description");
    props.itemUrl ? itemDetails.push(addhttp(props.itemUrl)) : console.log("No url");

    const nestedItems = itemDetails.map(item => {

        // Determine if this is a url
        const isUrl = item.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);

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
                    subtitle={props.itemDescription ? props.itemDescription.substring(0, 24) + "..." : ""}
                    actAsExpander={false}
                    showExpandableButton={true}
                    avatar={<Avatar
                        icon={<ArrowUpward />}
                        color={fullWhite}
                        backgroundColor={red500}
                        size={30}
                    />}
                />
                <CardText expandable={true}>{nestedItems}</CardText>
                <LinearProgress
                    mode="determinate"
                    value={20}
                    style={{
                        height: "8px"
                    }}
                />
            </Card>
        </div >
    );
}


export default Item;
