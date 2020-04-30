1. State of applied jobs (where would state exist). Given that allied status on each job is shared amongst jobs and companies component. 

2. Login: how to tell useEffect to make call to API without an extra state (e.g. submitted state)? And with that extra state, how to set it to a different value without just incrementing (since setting to false then true then back to false would initiate an infinite loop)?

3. Do we need to redirect on each component where token is needed? Or is there a way to centralize this? Right now we are redirecting via history object inside the try/catch for each API call.

4. What should we be doing with the error we get back from try / catch around joblyAPI? How should we handle error of server down? We tried terminating our backend, and got API Error: undefined (no status code to inspect)

5. We started on step 7 (not realizing that it was a part of step 7), and ended up passing down username as context to profile (and eventually to jobs page so we can show which jobs they've applied to). We had planned to use the username to then make a get request to get profile data once we reached profile, instead of passing the entire user obj around. 


BEFORE NEXT CODE REVIEW

- TODO: wrap every API request in a try / catch

- TODO: Anywhere alert is rendered, create state for errMsg and add ternary to ensure that err.message is an array (if not, pass it in via brackets so that msg.map works inside Alert)


###################

- TODO: Make error messages more friendly

- TODO: diff color for buttons based on which is selected for login / signup