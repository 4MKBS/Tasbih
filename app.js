const element = document.getElementsByTagName("button")[0];
let i = 0, j = 1;
function inp() {
  const main = document.querySelector('#main');
  const arr = ["আস্তাগফিরুল্লাহ ", "সুবহানাল্লাহ  ", "আলহামদুলিল্লাহ ", "আল্লাহু আকবার "];
  let a = document.createElement("div");
  a.setAttribute("class", "forgive");

  a.innerHTML = `${arr[i]}`;
  main.appendChild(a)
  element.innerText = "Stop at " + j;
  i++; j++;
  if (i === 4) i = 0;
  main.scrollBy(0, 60)
}

let interv;
element.addEventListener("click", handlClick);
let sw = false;
function handlClick() {
  if (sw === false) {
    interv = setInterval(inp, 1000);
    sw = true;
  } else {
    clearInterval(interv);
    element.innerText = "Start";
    sw = false;
  }
}