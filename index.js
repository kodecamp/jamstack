console.log("-> loaded javascript");

const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log("Repos : " + repos);
  const markup = repos
    .map(
      (repo) => `<li>
                      <a href="${repo.html_url}">${repo.name}</a>(+ ${repo.stargazers_count})
                 </li>
      `
    )
    .join("");
  const content = document.querySelector("#content");
  content.innerHTML = `<ul>${markup}<ul>`;
};

console.log("Helo World");

const para = document.querySelector("#para");
listRepos("kodecamp");
