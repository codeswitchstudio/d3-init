import "./style.css";
import { select, selectAll } from "d3";

// document.querySelector('#app').innerHTML = `

// <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
document.body.appendChild(svg);

const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
mask.setAttribute("id", "circle-mask");
svg.appendChild(mask);

const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
maskRect.setAttribute("width", width);
maskRect.setAttribute("height", height);
maskRect.setAttribute("fill", "black");
mask.appendChild(maskRect);

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", width / 2);
circle.setAttribute("cy", height / 2);
circle.setAttribute("r", 200);
circle.setAttribute("fill", "white");
mask.appendChild(circle);

const mask2 = document.createElementNS("http://www.w3.org/2000/svg", "mask");
mask2.setAttribute("id", "circle-mask-2");
svg.appendChild(mask2);

const maskRect2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect"
);
maskRect2.setAttribute("width", width);
maskRect2.setAttribute("height", height);
maskRect2.setAttribute("fill", "white");
mask2.appendChild(maskRect2);

const circle2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
circle2.setAttribute("cx", width / 2);
circle2.setAttribute("cy", height / 2);
circle2.setAttribute("r", 200);
circle2.setAttribute("fill", "black");
mask2.appendChild(circle2);

const n = 100;
for (let i = 0; i < n; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("y", i * 20);
  rect.setAttribute("width", width);
  rect.setAttribute("height", 10);
  rect.setAttribute("mask", "url(#circle-mask)");
  svg.appendChild(rect);
}

for (let i = 0; i < n; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", i * 20);
  rect.setAttribute("width", 10);
  rect.setAttribute("height", height);
  rect.setAttribute("mask", "url(#circle-mask-2)");
  svg.appendChild(rect);
}
