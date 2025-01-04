const inputField = document.getElementById("input");
const listContainer = document.getElementById("tasks");

function addInput() {
  if (inputField.value === "") {
    alert("Please write something to add!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputField.value = "";
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.ClassList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
