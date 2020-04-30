1. State of applied jobs (where would state exist). Given that allied status on each job is shared amongst jobs and companies component. 

2. Login: how to tell useEffect to make call to API without an extra state? And with that extra state, how to set it to a different value without just incrementing (since setting to false then true then back to false would initiate an infinite loop)?


4. Do we need to redirect on each component where token is needed? Or is there a way to centralize this? Right now we are redirecting via history object inside the try/catch for each API call.

5. What should we be doing with the error we get back from try / catch around joblyAPI? How should we handle error of server down? We tried terminating our backend, and got API Error: undefined (no status code to inspect)


BEFORE NEXT CODE REVIEW

- TODO: wrap every API request in a try / catch

- TODO: Anywhere alert is rendered, create state for errMsg and add ternary to ensure that err.message is an array (if not, pass it in via brackets so that msg.map works inside Alert)


###################

- TODO: Make error messages more friendly

- TODO: diff color for buttons based on which is selected for login / signup