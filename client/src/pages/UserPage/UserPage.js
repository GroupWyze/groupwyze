import React, { Component } from "react";
import ShindigForm from "../../components/ShindigForm";
import { getProfile } from "../../utils/AuthService";


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

	getFirstName = () => {
		const { profile } = this.state;

	}

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