const js_api = document.querySelector(".js-api");

fetch("https://api.github.com/users/raviraven/repos")
  .then((response) => response.json())
  .then((response) => {
    for (const repo of response) {
      js_api.innerHTML += `<li><b>${repo.name}</b>  ${repo.html_url}</li>`;
    }
  })
  .catch((error) => {
    console.log(error);
  });
