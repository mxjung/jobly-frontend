1. How should we handle error of server down? We tried terminating our backend, and got API Error: undefined (no status code to inspect)

2. Inside login and logout, we useHistory to redirect users, receiving error: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.

3. Maybe related to question 2: 'React' is defined but never used  no-unused-vars (inside Logout)

<!-- 4. We require correct password inside updating profile, but password is never verified with token, only though login. How would we go about using the password inside Profile form to verify that correct user is patching their own data without making a "dumb" api call to users/login.  -->

4. We are being redirected to the login page upon every refresh

BEFORE NEXT CODE REVIEW

###################
- TODO: add more detailed error handling by updating joblyApi to inspect status code

- TODO: Anywhere alert is rendered, create state for errMsg

- TODO: Make error messages more friendly

- TODO: make password input field ****** private

- TODO: user localStorage to manage the user data