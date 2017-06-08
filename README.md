# Git Wipeout

This is a simple script I wrote to erase the assignments I completed as a coding boot camp student. Each student "lab" was completed by forking a Flatiron repository and submitting a pull request to the original repo once finished.

## Getting Started

#### API Access

To access the Github API, you will need to create an access token [here](https://github.com/settings/tokens). In the scripts folder, create a new file named `key.js`. In this file create a constant representing the base url for the API calls: `const BASEURL = "https://api.github.com"`. Also create a const TOKEN equal to your token string.

#### Running the Script

You can clone this repo, open up `index.html` in the browser and then run the commands in the developer's console. `gitRun` is the function which runs all the other functions. It takes an argument of the name of the Flatiron class. For example I was class 0916, so most of my repos ended in "web-0916" since the labs are deployed separately to each class. Passing "web-0916" to `gitRun` initiates a search for repos owned by the owner of the Github token (me) which contain the string "web-0916" in the repo name. A separate delete request is then sent for each of these repos.

The API call is currently set to return 100 repositories at a time (before the filtering by name step). You may have to run the script a few times to remove all Flatiron labs.
