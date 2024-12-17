function checkVowel() {
  var text = document.getElementById("input").value.toLowerCase();
  var count = 0;
  var arr = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < text.length; i++) {
    if (arr.includes(text.charAt(i))) {
      count++;
    }
  }
  var result = document.getElementById("result");
  result.textContent = "Total Vowel Count : " + count;
}
