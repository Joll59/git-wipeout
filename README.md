# Git Wipeout

This is a simple script I wrote to erase the assignments I completed as a coding boot camp student. Each student "lab" was completed by forking a Flatiron repository and submitting a pull request to the original repo once finished.

## Getting Started

#### API Access

To access the Github API, you will need to create an access token [here](https://github.com/settings/tokens). Make sure to give this access token permission to delete repositories, only thing the access token needs actually.
In the scripts folder, create a new file named `key.js`. In this file add `exports.TOKEN = "your_github_token"`, making sure to substitute your own token in for the underscored text. Also add your Github username with `exports.userName = "YOUR_Github_USERNAME"`, making sure to substitute your own Github username in the underscored text.
This file is `.gitignored`, so you won't be able to accidentally push your token to Github.

#### Set-Up

Defined at the top of index.j the `CLASSNAMES const` at the top of index.js is an array of common demarcations Flatiron labs contain in the titles. Add any others which apply to your labs. If you were in the 040317 class, your labs will probably end in "web-040317", so add that to the array. This will filter our search so we can make sure we are only removing forked labs.


#### Running the Script

Clone this repo, cd into its directory, run `npm install`, `npm start`, It initiates a search for all repos owned by the owner of the Github token which contain any of the strings from CLASSNAMES in the repo name. A separate delete request is then sent for each of these repos.

The API call returns a max of 100 repositories at a time (before the filtering step). It will execute the API call 5 times which should be more than enough to remove all the Flatiron labs (~350).


#### Useful git commands, I used.

`git rm -r --cached node_modules`

Why? `node_modules` was not in `.gitignore` after adding `node_modules/` to `.gitignore`, I needed to remove the files from git control. `-r` flag made it a recursive call so we get subfolders too, `--cached` included the cached versions of the files as well. Stackoverflow was very helpful here.
