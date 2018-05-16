import React, { Component } from "react";
import ShindigForm from "../../components/ShindigForm";
import { getProfile } from "../../utils/AuthService";
import API from "../../utils/API";


class UserPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			profile: null
		}
	}

	componentDidMount() {
		getProfile((err, profile) => {
			this.setState({ profile });
		});

	}


	componentDidUpdate(prevProps, prevState) {
		this.loadUser();
	}

	loadUser = () => {
		const { sub } = this.state.profile;
		if (sub) {
			API.getUser(encodeURI(sub))
				.then(res => console.log(res))
				.catch(err => console.log(err));
		}
	};
	render() {
		const { profile } = this.state;
		console.log(profile);
		return (
			<div className="row">
				<div className="col s2 offset-s5">
					<ShindigForm user={profile} />
					{profile && <div>Hey, {profile.nickname}!</div>}
				</div>
			</div>
		);
	}
}


export default UserPage;