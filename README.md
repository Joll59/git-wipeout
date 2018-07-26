# Git Wipeout

This is a simple script I wrote to erase the assignments I completed as a coding boot camp student. Each student "lab" was completed by forking a Flatiron repository and submitting a pull request to the original repo once finished.

## Getting Started

#### API Access

To access the Github API, you will need to create an access token [here](https://github.com/settings/tokens). Make sure to give this access token permission to delete repositories. In the scripts folder, create a new file named `key.js`. In this file add `const TOKEN = "your_github_token"`, making sure to substitute your own token in for the underscored text. This file is gitignored, so you won't be able to accidentally push your token to Github.

#### Set-Up

Set your Github username equal to the const USERNAME defined at the top of index.js. The CLASSNAMES const at the top of index.js contains an array of common demarcations Flatiron labs contain in the titles. Add any others which apply to your labs. If you were in the 040317 class, your labs will probably end in "web-040317", so add that to the array. This will filter our search so we can make sure we are only removing forked labs.


#### Running the Script

Clone this repo, cd into its directory, run `npm install`, open up `index.html` in the browser and then run the commands in the developer's console. `gitRun()` (no arguments) is the function which runs all the other functions. It initiates a search for all repos owned by the owner of the Github token which contain any of the strings from CLASSNAMES in the repo name. A separate delete request is then sent for each of these repos.

The API call returns a max of 100 repositories at a time (before the filtering step). `gitRun` will execute the API call 5 times which should be more than enough to remove all the Flatiron labs (~350).
