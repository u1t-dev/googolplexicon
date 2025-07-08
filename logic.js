import systems from "./systems.js";
import prefixes from "./prefixes.js";

function latin(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Not an array.");
  if (numbers.length === 0 || numbers.length > 3)
    throw new Error("Too many or too little elements.");

  for (const n of numbers) {
    if (typeof n !== "number" || !Number.isInteger(n) || n <= 0)
      throw new Error("All entries must be positive integers.");
  }

  if (numbers.length === 1) {
    return prefixes.eng_standalone[numbers[0]] ?? null;
  }

  const p = [];
  numbers.sort((a, b) => a - b);
  for (const num of numbers) {
    if (num === numbers[numbers.length - 1])
      p.push(prefixes.eng_standalone[num]);
    else p.push(prefixes.eng_mult[num]);
  }

  return p.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const exponentElem = document.getElementById("exp");
  const numberElem = document.getElementById("num");
  const resultElem = document.getElementById("result");

  const button = document.querySelector("button");
  if (!button || !exponentElem || !numberElem || !resultElem)
    return (document.body.innerHTML =
      "<h1>ERROR</h1>: <p>important elements are missing!</p>");

  button.addEventListener("click", () => {
    const items = {
      eng: [],
      grk: [],
      arb: [],
      chn: [],
      hnd: [],
      tbt: [],
      skt: [],
    };
    resultElem.textContent = latin([3, 20, 400]);
  });
});
