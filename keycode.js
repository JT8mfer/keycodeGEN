window.addEventListener("keydown", function (event) {
  let h1 = document.getElementById("set");
  h1.textContent = `key pressed='${event.key}' | code='${event.code}'`;
});
