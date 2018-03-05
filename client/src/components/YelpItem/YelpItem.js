import React, { Component } from "react";
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { GridTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import { fullWhite, red500 } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
import YelpIcon from '../../images/Yelp_trademark_RGB_outline.png';
import API from "../../utils/API";
import YelpHelper from "../../utils/YelpHelper";

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

  render() {

    return (
      <div key={this.props.itemId}>
        <GridTile key={this.props.yelpId} style={{ height: "80px" }}>
          <div style={{ marginBotton: "0px", }}>
            <div>
              <div className="row" style={{ marginBotton: "15px", }}>
                <Avatar
                  onClick={(e) => this.props.handleAddVote(e, this.props.itemId)}
                  icon={< ArrowUpward style={{ margin: "0" }} />}
                  color={fullWhite}
                  backgroundColor={red500}
                  size={30}
                  className="col s4"
                  style={
                    {
                      height: "30px",
                      width: "30px",
                      padding: "5px",
                      position: "absolute",
                      left: "0px",
                      top: "0px"
                    }
                  }
                />
                <h6 className="col s8 offset-s2" style={{ fontSize: "16px", padding: "0 0 0 10px" }}>
                  {this.props.itemName}
                </h6>
              </div>
              <div className="row">
                <img className="col s4 offset-s2 yelpStars" src={YelpHelper.getYelpRatingImage(this.state.rating)} />
                <b style={{ fontWeight: "bold" }} className="col s1 offset-s1">{this.state.price}</b>
                <a target="_blank" href={this.props.itemUrl}>
                  <img
                    className="col s3 offset-s1"
                    style={
                      {
                        height: "40px",
                        width: "auto",
                        padding: "5px",
                        position: "absolute",
                        right: "0px",
                        bottom: "40px"
                      }
                    }
                    src={YelpIcon} />
                </a>
              </div>
              <div className="col s8 offset-s2 noMargin"> Based on
                {this.state.reviewCount} reviews</div>
            </div>
          </div>
        </GridTile>
        <LinearProgress mode="determinate" value={this.state.votePercentage} style={{ height: "8px" }} />
        <Divider style={{ marginTop: "10px" }} />
      </div>
    );
  }

}

export default YelpItem;