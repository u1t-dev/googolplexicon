import systems from "./systems.js";
import prefixes from "./prefixes.js";

document.addEventListener("DOMContentLoaded", () => {
  const numberElem = document.getElementById("num");
  const exponentElem = document.getElementById("exp");

  const button = document.querySelector("button");
  if (!button)
    return (document.body.innerHTML =
      "<h1>ERROR</h1>: <p>the button is missing!</p>");

  button.addEventListener("click", () => {});
});
