window.addEventListener("keydown", function (event) {
  let h1 = document.getElementById("which");
  h1.textContent = `${event.which}`;
  let key = document.getElementById("key");
  key.textContent = `Key: ${event.key}`;
  let code = document.getElementById("code");
  code.textContent = `Code: ${event.code}`;
  let nums = document.getElementById("nums");
  nums.textContent = `which: ${event.which}`;
});
