import Auth0Lock from 'auth0-lock';
import auth0 from "auth0-js"
// import { AUTH_CONFIG } from './auth0-variables';
import history from '../history';


export default class Auth {
  


  lock = new Auth0Lock('FfGbfN2mOaonCe41rMxNObLHuL2Jij8D', 'groupwyze.auth0.com', {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUrl: 'http://groupwyze.com/callback', //'http://localhost:3000/callback', //
      responseType: 'token id_token',
      audience: `https://groupwyze.auth0.com/userinfo`,
      params: {
        scope: 'openid profile email'
      }
    },
    defaultDatabaseConnection: 'Username-Password-Authentication',
    theme: {
        logo: './favicon.ico',
        primaryColor: '#F44336',
        labeledSubmitButton: false
    },
    socialButtonStyle: 'small',
    languageDictionary: {
        title: 'GroupWyze'
    }

  });


  auth0 = new auth0.WebAuth({
    domain: 'groupwyze.auth0.com',
    clientID: 'h-db3TKF59gFCVMNPSxO02CmPvQHL9Nq',
    redirectUri: 'http://localhost:3000/callback',
    audience: `https://groupwyze.auth0.com/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  userProfile;


  constructor() {
    this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }


  // Auth Lock Functions
  // Handles Signup and Log in. 
  // ===================================================
  login() {
    // Call the show method to display the widget.
    this.lock.show({
        autoParseHash: true
    });
  }

  handleAuthentication() {
    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
      history.replace('/home');
    });
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      history.replace('/user');

    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;

  }

  // Auth0 JS
  //

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  hasAccessToken() {
    const accessToken = localStorage.getItem('access_token') ;
    if (!accessToken){
      return false;
    } else { return true;}
  }


    



}