1. How should we handle error of server down? We tried terminating our backend, and got API Error: undefined (no status code to inspect)



BEFORE NEXT CODE REVIEW

- TODO: private routing to centralize auth

###################
- TODO: add more detailed error handling by updating joblyApi to inspect status code

- TODO: Anywhere alert is rendered, create state for errMsg

- TODO: create protected views using user obj

- TODO: Make error messages more friendly

- TODO: diff color for buttons based on which is selected for login / signup