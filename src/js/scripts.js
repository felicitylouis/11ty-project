const apiKey = `Aikw2067983OYq1mgYyzogqW9zG8vBWD`;
const API = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;

// document.addEventListener("click", clickHandlers);

function getStories() {
  // if (!event.target.matches("button")) return;
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  var looped = stories
    .map(
      (story) => `
    <div class="item">
    <picture>
        <img src="${story.multimedia[2].url}" alt="" />
        <caption>${story.multimedia[2].caption}</caption>
    </picture>
      <h3><a href="${story.url}">${story.title}</a></h3>
      <p>${story.abstract}</p>
    </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

if (document.querySelector(".p-home")) {
  getStories();
}


