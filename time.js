// setTimeout(() => {
//   console.log("javhlan");
// }, 5 * 1000);
// const id = setInterval(() => {
//   console.log("Javhlan");
// }, 1000);
// setTimeout(() => {}, timeout);
const display = document.getElementById("display");
const laps = document.getElementById("laps");

let timer = null;
let second = 0;

function start() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    return;
    
  }

  timer = setInterval(() => {
    second++;

    let hour = Math.floor(second / 3600);
    let minut = Math.floor(second / 60) % 60;
    let sec = second % 60;

    display.innerHTML =
      String(hour).padStart(2, "0") +
      ":" +
      String(minut).padStart(2, "0") +
      ":" +
      String(sec).padStart(2, "0");
  }, 5);
}

function reset() {
  clearInterval(timer);
  timer = null;
  second = 0;
  display.innerHTML = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.innerText = display.innerHTML;
  li.onclick = () => li.remove();
  laps.appendChild(li);
}
