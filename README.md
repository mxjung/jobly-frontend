## BASE_URL

In JoblyApi.js, the default BASE_URL for local Testing Environment is:

const BASE_URL = "http://localhost:3001";

When in Production Environment, the BASE_URL is listed as:

const BASE_URL = "https://jobly-server.herokuapp.com";

## Play Around with website

In order to access job board, either:
1. Use dummy account: Username (testuser), Password (password)
2.  Create an account using the signup feature

## Debugging Issues
Netlify recently made a change where the CI environment variable changed. This led to my app not being able to deploy because CI was set to true and any warnings were logging as errors. The solution to this problem was setting npm build script in package.json to be "build": "CI= react-scripts build". Please view post https://community.netlify.com/t/build-command-just-started-failing-create-react-app/17188/2
