import { Component } from 'react';
import { setIdToken, setAccessToken } from '../../utils/AuthService';

class Callback extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/user";
  }

  render() {
    return null;
  }
}

export default Callback;