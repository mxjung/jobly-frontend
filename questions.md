1. How should we handle error of server down? We tried terminating our backend, and got API Error: undefined (no status code to inspect)

2. Inside login and logout, we useHistory to redirect users, receiving error: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.

3. Maybe related to question 2: 'React' is defined but never used  no-unused-vars (inside Logout)

BEFORE NEXT CODE REVIEW

- TODO: private routing to centralize auth

###################
- TODO: add more detailed error handling by updating joblyApi to inspect status code

- TODO: Anywhere alert is rendered, create state for errMsg

- TODO: create protected views using user obj

- TODO: Make error messages more friendly

- TODO: diff color for buttons based on which is selected for login / signup

- TODO: make password input field ****** private