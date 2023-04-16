import React from 'react';
import ReactDOM from 'react-dom/client';
import  {Auth0Provider }from "@auth0/auth0-react";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-1e512wct314amogi.us.auth0.com"
    clientId="ktEvJtdPNVcN0GhMWSRf7Ko7aoJUGo2c"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <App />
  </Auth0Provider>
);
