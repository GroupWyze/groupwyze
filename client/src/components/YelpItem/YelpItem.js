import React, { Component } from "react";
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { GridTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import { fullWhite, red500 } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
import YelpIcon from '../../images/Yelp_trademark_RGB_outline.png';
import YelpStar0 from '../../images/yelpIcons/regular/regular_0.png';
import YelpStar1 from '../../images/yelpIcons/regular/regular_1.png';
import YelpStar1Half from '../../images/yelpIcons/regular/regular_1_half.png';
import YelpStar2 from '../../images/yelpIcons/regular/regular_2.png';
import YelpStar2Half from '../../images/yelpIcons/regular/regular_2_half.png';
import YelpStar3 from '../../images/yelpIcons/regular/regular_3.png';
import YelpStar3Half from '../../images/yelpIcons/regular/regular_3_half.png';
import YelpStar4 from '../../images/yelpIcons/regular/regular_4.png';
import YelpStar4Half from '../../images/yelpIcons/regular/regular_4_half.png';
import YelpStar5 from '../../images/yelpIcons/regular/regular_5.png';
import API from "../../utils/API";

const styles = {
    noMargin: {
        margin: "0"
    },
    yelpStars: {
        paddingTop: "5px"
    }
}

class YelpItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            votePercentage: 0,
            rating: 0,
            price: "",
            reviewCount: 0
        };
    }

    componentDidMount() {

        API.yelpBusiness(this.props.yelpId)
            .then(res => {
                this.setState({
                    rating: res.data.rating,
                    reviewCount: res.data.review_count,
                    price: res.data.price
                })
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.votes !== this.props.votes) {
            this.props.votes.forEach(v => {
                if (this.props.itemId === v.itemId) {
                    this.setState({
                        votePercentage: v.percent
                    });
                }
            })
        }
    }

    // set's the yelp star rating image given the rating
    getYelpRatingImage = (rating) => {
        switch (rating) {
            case 0:
                return YelpStar0;
                break;
            case 1:
                return YelpStar1;
                break;
            case 1.5:
                return YelpStar1Half;
                break;
            case 2:
                return YelpStar2;
                break;
            case 2.5:
                return YelpStar2Half;
                break;
            case 3:
                return YelpStar3;
                break;
            case 3.5:
                return YelpStar3Half;
                break;
            case 4:
                return YelpStar4;
                break;
            case 4.5:
                return YelpStar4Half;
                break;
            case 5:
                return YelpStar5;
                break;
            default:
                return YelpStar0;
        }
    }

    render() {

        return ( <div key={ this.props.itemId }>
                   <GridTile key={ this.props.yelpId } style={ { height: "80px" } }>
                     <div style={ { marginBotton: "0px", } }>
                       <div>
                         <div className="row" style={ { marginBotton: "15px", } }>
                           <Avatar onClick={ (e) => this.props.handleAddVote(e, this.props.itemId) } icon={ < ArrowUpward style={ { margin: "0" } } /> } color={ fullWhite } backgroundColor={ red500 } size={ 30 } className="col s4"
                             style={ { height: "30px", width: "30px", padding: "5px", position: "absolute", left: "0px", top: "0px" } } />
                           <h6 className="col s8 offset-s2" style={ { fontSize: "16px", padding: "0 0 0 10px" } }>
                                                                                                    { this.props.itemName }
                                                                                                </h6>
                         </div>
                         <div className="row">
                           < img className="col s4 offset-s2 yelpStars" src={ this.getYelpRatingImage(this.state.rating) } />
                           <b style={ { fontWeight: "bold" } } className="col s1 offset-s1">
                                                                                                                                                                                                               { this.state.price }
                                                                                                                                                                                                               </b>
                           <a target="_blank" href={ this.props.itemUrl }>
                             <img className="col s3 offset-s1" style={ { height: "40px", width: "auto", padding: "5px", position: "absolute", right: "0px", bottom: "40px" } } src={ YelpIcon } />
                           </a>
                         </div>
                         <div className="col s8 offset-s2 noMargin"> Based on
                           { this.state.reviewCount } reviews
                         </div>
                       </div>
                     </div>
                   </GridTile>
                   <LinearProgress mode="determinate" value={ this.state.votePercentage } style={ { height: "8px" } } />
                   <Divider style={ { marginTop: "10px" } } />
                 </div>
            );
    }

}

export default YelpItem;