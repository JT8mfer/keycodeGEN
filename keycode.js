// const code = document.getElementsByid("code");

// code.addEventListener("keydown",(event){
//   div.textContent = input.value;
// });

window.addEventListener("keydown", function (event) {
  let h1 = document.getElementById("which");
  h1.textContent = `${event.which}`;
});

window.addEventListener("keydown", function (event) {
  let div = document.getElementById("key");
  div.textContent = `Key: ${event.key}`;
});

window.addEventListener("keydown", function (event) {
  let div = document.getElementById("code");
  div.textContent = `Code: ${event.code}`;
});

window.addEventListener("keydown", function (event) {
  let div = document.getElementById("nums");
  div.textContent = `which: ${event.which}`;
});
