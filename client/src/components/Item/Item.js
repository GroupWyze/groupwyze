import React from "react";
import Avatar from 'material-ui/Avatar';
import { GridTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import { fullWhite, red500 } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';


const Item = props => {

    let votePercentage;

    props.votes.forEach(v => {
        if (props.itemId === v.itemId) {
            votePercentage = v.percent
        }
    })

    // Adds http:// to user provided urls if they weren't provided.
    // Required for href's to be functional
    function addhttp (url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    return (
        <div key={props.yelpId}>
            <GridTile>
                <div style={{marginBotton: "0px"}}>
                    <div>
                        <div className="row" style={{marginBotton: "15px"}}>
                            <Avatar
                                onClick={(e) => props.handleAddVote(e, props.itemId)}
                                icon={<ArrowUpward
                                    style={{
                                        margin: "0"
                                    }}
                                />}
                                color={fullWhite}
                                backgroundColor={red500}
                                size={30}
                                className="col s4"
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    padding: "5px",
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px"
                                }}
                            />
                            <h6 className="col s8 offset-s2" style={{ fontSize: "16px", padding: "0 0 0 10px" }}>{props.itemName}</h6>
                        </div>
                        <div className="row">
                            <blockquote>{props.itemDescription}</blockquote>
                            <a className="col s8 offset-s2" target="_blank" href={addhttp(props.itemUrl)}>See More</a>
                        </div>
                    </div>
                </div>
            </GridTile>
            <LinearProgress
                mode="determinate"
                value={votePercentage}
                style={{
                    height: "8px"
                }}
            />
            <Divider style={{ marginTop: "10px" }} />
        </div >
    );
}


export default Item;
