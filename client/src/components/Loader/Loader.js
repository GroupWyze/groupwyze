import React, {Component} from 'react';


class Loader extends Component {

    componentWillMount(){
        const {hasAccessToken} = this.props.auth
        if(!hasAccessToken()){
            return
        }
        this.props.getUser() 
    }

    render() {
        const profile = this.props.profile
        return (<div/>);
    }
}
export default Loader;