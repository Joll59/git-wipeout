function getRepos() {
  return fetch(`${BASEURL}/user/repos?access_token=${TOKEN}`)
  .then(resp => resp.json())
  .then(r => filterRepos(r))
}

function filterRepos(repos) {
  repos.filter(function(repo) {
    return repo.fork === true
  })
}

function deleteRepos(repoName) {
  fetch(`${BASEURL}/repos/nikymorg/${repoName}?access_token=${TOKEN}`, {
    method: 'DELETE'
  })
}

getRepos()
