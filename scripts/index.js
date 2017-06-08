const BASEURL = "https://api.github.com"
const USERNAME = ""
const CLASSNAMES = [
  "js-apply",
  "ruby-apply",
  "bootcamp-prep",
  "intro-js",
  "intro-ruby"
]

// retrieves 100 owned repos at a time
function getRepos(pageNum) {
  let url = `${BASEURL}/user/repos?page=${pageNum}&per_page=100&type=owner&access_token=${TOKEN}`
  return fetch(url)
  .then(resp => resp.json())
}


// filters out Flatiron repos
function filterRepos(repos) {
  return repos.filter(repoCheck)
}

function repoCheck (repo) {
  if (repo.fork && CLASSNAMES.some(name => repo.name.includes(name))) {
    return repo
  }
}


// deletes filtered repos
function deleteRepo(repo) {
  let repoName = repo.name
  let url = `${BASEURL}/repos/${USERNAME}/${repoName}?access_token=${TOKEN}`
  fetch(url, {
    method: 'DELETE'
  })
}


// runner function
function gitRun() {
  for (let pageNum=1; pageNum<=5; pageNum++) {
    getRepos(pageNum)
    .then(repos => {
      return filterRepos(repos)
    })
    .then(repos => {
      if (repos.length === 0) {
        console.log(`Nothing to delete on page ${pageNum}`)
      } else {
        let repoNames = repos.map(repo => repo.name)
        repos.forEach(deleteRepo)
        console.log(`Page ${pageNum} deleted:`, repoNames)
      }
    })
    .catch(data => {
      console.log(`There were errors on page ${pageNum}. Please try again.`, data)
    })
  }
}
