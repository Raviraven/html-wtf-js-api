"use strict";

const container = document.querySelector(".container--js");
var containerHTML = "";

function createArticle(name, url){
  containerHTML += `<article class='repo'><header class='repo_header'><h3>${name}</h3></header><p class='repo_description'><a href='${url}'>Click here to view repository online</a></p></article>`;
}

fetch("https://api.github.com/users/raviraven/repos")
  .then((response) => response.json())
  .then((response) => {
    for (const repo of response) {
      createArticle(repo.name, repo.html_url);
      console.log(repo);
      console.log('jaidias')
    }
    container.innerHTML = containerHTML;
  })
  .catch((error) => {
    console.log(error);
  });
