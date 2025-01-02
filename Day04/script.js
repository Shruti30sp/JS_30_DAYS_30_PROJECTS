const api_link = "https://quotes-api-self.vercel.app/quote";
const qoute = document.getElementById("qoute");
const author = document.getElementById("author");

async function getData(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  qoute.innerHTML = data.quote;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      qoute.innerHTML +
      "--- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
