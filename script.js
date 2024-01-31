let practice = "Her er en JavaScripts øvelse side 2";
console.log(practice);

const uret = document.querySelector("#uret");
uret.addEventListener("click", checkTime);

function checkTime() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 10) {
    console.log("Godmorgen");
  } else if (currentHour >= 10 && currentHour < 18) {
    console.log("Goddag");
  } else if (currentHour >= 18 && currentHour < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}
