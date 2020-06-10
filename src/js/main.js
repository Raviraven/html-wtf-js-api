"use strict";

const container = document.querySelector(".container--js");
var containerHTML = "";

function createArticle(name, url){
  var repo_description = `<p class='repo_description'><a href='${url}' class='repo_url' target='blank'>Click here to view repository online</a></p>`;
  var repo_header = `<header class='repo_header'><p class='repo_header--paragraph'>${name}</p></header>`;
  var article = `<article class='repo'>${repo_header}${repo_description}</article>`;
  containerHTML += article;
}

fetch("https://api.github.com/users/raviraven/repos")
  .then((response) => response.json())
  .then((response) => {
    for (const repo of response) {
      createArticle(repo.name, repo.html_url);
    }
    container.innerHTML = containerHTML;
  })
  .catch((error) => {
    console.log(error);
  });
