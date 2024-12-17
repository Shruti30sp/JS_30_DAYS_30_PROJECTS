const button = document.querySelector(".btn");
const meme_title = document.querySelector(".meme-title");
const meme_image = document.querySelector(".meme-img");
const author_name = document.querySelector(".author span");

button.addEventListener("click", () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      
      meme_title.innerText = title;
      meme_image.src = url;
      author_name.innerText = author;

      console.log(author, title, url);
    });
});
