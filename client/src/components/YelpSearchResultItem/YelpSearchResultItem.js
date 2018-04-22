import React, { Component } from "react";
import { fullWhite, red500 } from 'material-ui/styles/colors';
import { GridTile } from 'material-ui/GridList';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import YelpIcon from '../../images/Yelp_trademark_RGB_outline.png';
import YelpSmall0 from '../../images/yelpIcons/small/small_0.png';
import YelpSmall1 from '../../images/yelpIcons/small/small_1.png';
import YelpSmall1Half from '../../images/yelpIcons/small/small_1_half.png';
import YelpSmall2 from '../../images/yelpIcons/small/small_2.png';
import YelpSmall2Half from '../../images/yelpIcons/small/small_2_half.png';
import YelpSmall3 from '../../images/yelpIcons/small/small_3.png';
import YelpSmall3Half from '../../images/yelpIcons/small/small_3_half.png';
import YelpSmall4 from '../../images/yelpIcons/small/small_4.png';
import YelpSmall4Half from '../../images/yelpIcons/small/small_4_half.png';
import YelpSmall5 from '../../images/yelpIcons/small/small_5.png';
import API from "../../utils/API";
import "./YelpSearchResultItem.css";

const styles = {
	businessImage: {
		backgroundColor: "rgba(0, 0, 0, 0.4)"
	},
	subtitle: {
		backgroundColor: undefined
	},
	row: {
		marginBotton: "0px"
	}
}

class YelpSearchResults extends Component {

	constructor(props) {
		super(props);

		this.state = {
			shindigId: props.shindigId,
			categoryId: props.categoryId,
			businessName: props.businessName,
			yelpId: props.yelpId,
			businessUrl: props.businessUrl,
			snackbarOpen: false
		};

	}

	handleAddItem = (e) => {
		e.preventDefault();

		const shindigId = this.state.shindigId;
		const categoryId = this.state.categoryId;
		const itemData = {
			name: this.state.businessName,
			yelpId: this.state.yelpId,
			url: this.state.businessUrl
		}

		API.createItem(shindigId, categoryId, itemData)
			.then(this.props.onItemAdd(shindigId))
			.then(this.setState({
				snackbarOpen: true
			}))
			.then(this.setState({
				itemName: "",
				itemDescription: "",
				itemUrl: ""
			}))
			.catch(err => console.log(err));
	}

	handleRequestClose = () => {
		this.setState({
			snackbarOpen: false,
		});
	};

	// set's the yelp star rating image given the rating
	getYelpRatingImage = (rating) => {
		switch (rating) {
			case 0:
				return YelpSmall0;
				break;
			case 1:
				return YelpSmall1;
				break;
			case 1.5:
				return YelpSmall1Half;
				break;
			case 2:
				return YelpSmall2;
				break;
			case 2.5:
				return YelpSmall2Half;
				break;
			case 3:
				return YelpSmall3;
				break;
			case 3.5:
				return YelpSmall3Half;
				break;
			case 4:
				return YelpSmall4;
				break;
			case 4.5:
				return YelpSmall4Half;
				break;
			case 5:
				return YelpSmall5;
				break;
			default:
				return YelpSmall0;
		}
	}


	render() {

		return (
			<div>
				<GridTile
					key={this.props.yelpId}
					style={{
						height: "130px"
					}}
				>
					<div style={{
						marginBotton: "0px",
						backgroundImage: `url(${this.props.imgUrl})`,
						backgroundSize: 'cover',
						color: { fullWhite }
					}}>
						<div style={{
							backgroundColor: "rgba(0, 0, 0, 0.4)",
							color: { fullWhite }
						}}>
							<div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
								<h5 className="col s12" style={{ color: "white", padding: "5px 0 0 10px" }}>{this.props.businessName}</h5>
							</div>
							<div className="row">
								<img className="col s3 " src={this.getYelpRatingImage(this.props.rating)} />
								<b style={{ color: "white", fontWeight: "bold" }} className="col s1 offset-s1">{this.props.price}</b>
								<a target="_blank" href={this.state.businessUrl}>
									<img
										className="col s3 offset-s1"
										style={{
											height: "50px",
											width: "auto",
											padding: "5px",
											position: "absolute",
											right: "0px",
											bottom: "40px"
										}}
										src={YelpIcon} />
								</a>
							</div>
							<div className="row" >
								<p style={{ color: "white" }} className="col s8 ">Based on {this.props.reviewCount} reviews</p>
								<IconButton
									style={{
										height: "50px",
										width: "auto",
										padding: "10px",
										position: "absolute",
										right: "0px"
									}}
									onClick={this.handleAddItem}
								>
									<AddCircle color="white" />
								</IconButton>
							</div>
						</div>
					</div>
				</GridTile>
				<Snackbar
					open={this.state.snackbarOpen}
					message={"Item added successfully"}
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		);
	}
}


export default YelpSearchResults;
