import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";
// import navigation from "./navigation";

const allJokes = jokes.getJokes().map((joke) => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// Solution 2
document.getElementById("quotebtn").addEventListener("click", function () {
  let id = Math.floor(Math.random() * 46) + 1;
  fetch("https://studypoints.info/jokes/api/jokes/random").then(function (
    response
  ) {
    response.json().then(function (data) {
      document.getElementById("quotes").innerHTML = "Random joke: " + data.joke;
    });
  });
});

function quotes() {
  const quoteprom1 = fetch(
    "https://studypoints.info/jokes/api/jokes/period/hour"
  ).then(function (response) {
    return response.json();
  });
  const quoteprom2 = quoteprom1.then(function (data) {
    console.log(data);
    document.getElementById("quotes").innerHTML =
      "Quote of the hour: " + data.joke;
  });
}
quotes();
setInterval(function () {
  quotes();
}, 3600 * 1000);

// Solution 3
document.getElementById("north").addEventListener("click", function () {
  document.getElementById("fourhearts").innerHTML = "North";
});
document.getElementById("south").addEventListener("click", function () {
  document.getElementById("fourhearts").innerHTML = "South";
});
document.getElementById("east").addEventListener("click", function () {
  document.getElementById("fourhearts").innerHTML = "East";
});
document.getElementById("west").addEventListener("click", function () {
  document.getElementById("fourhearts").innerHTML = "West";
});
