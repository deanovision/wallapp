# Getting Started

Run `npm start` to start development server

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Setup Authorizer For User Authentication

Deploy an instance of Authorizer to Heroku [see docs](https://docs.authorizer.dev/deployment/heroku#create-instance) after deploying visit the app to retreive your `AUTH_CLIENT_ID` for your environment variables, use the url of your Heroku app as your `AUTH_URL`.

## Environment Variables

```
REACT_APP_AUTH_URL //url of Authorizer app
REACT_APP_AUTH_CLIENT_ID //get from Authorizer dashboard
REACT_APP_API_URL //http://localhost:8080
REACT_APP_SITE_URL //http://localhost:3000
GENERATE_SOURCEMAP=false //to ignore source map errors caused by latest CRA
```
