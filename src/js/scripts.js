document.addEventListener("click", clickHandlers);

function clickHandlers(event) {
  if (!event.target.matches("button")) return;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => showData(data));
}

function showData(data) {
  let content = data.map((post) => `<h3>${post.title}</h3><p>${post.body}</p>`);

  document.querySelector(".stories").innerHTML = content;
}