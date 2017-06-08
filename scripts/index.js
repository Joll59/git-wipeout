function getRepos() {
  let url = `${BASEURL}/user/repos?&per_page=100&type=owner&access_token=${TOKEN}`
  return fetch(url)
  .then(resp => resp.json())
}

function filterRepos(repos, className) {
  return repos.filter(function(repo) {
    return repo.fork === true && repo.name.includes(className)
  })
}

function deleteRepo(repo) {
  let repoName = repo.name
  let url = `${BASEURL}/repos/nikymorg/${repoName}?access_token=${TOKEN}`
  fetch(url, {
    method: 'DELETE'
  })
}

function repoNames(repos) {
  return repos.map((repo) => repo.name)
}

function gitRun(className) {
  getRepos()
  .then((repos) => {
    return filterRepos(repos, className)
  })
  .then((repos) => {
    repos.forEach(deleteRepo)
  })
}
