import "./style.css"
import { select, range } from "d3"

// console.log(select);

const width = window.innerWidth
const height = window.innerHeight

// const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg.setAttribute('width', width);
// svg.setAttribute('height', height);
// document.body.appendChild(svg);

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
// mask.setAttribute('id', 'circle-mask');
// svg.appendChild(mask);

const mask = svg.append("mask").attr("id", "circle-mask")

// const maskRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
// maskRect.setAttribute('width', width);
// maskRect.setAttribute('height', height);
// maskRect.setAttribute('fill', 'black');
// mask.appendChild(maskRect);

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black")

// const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// circle.setAttribute('cx', width / 2);
// circle.setAttribute('cy', height / 2);
// circle.setAttribute('r', 200);
// circle.setAttribute('fill', 'white');
// mask.appendChild(circle);

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white")

// const mask2 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
// mask2.setAttribute('id', 'circle-mask-2');
// svg.appendChild(mask2);

const mask2 = svg.append("mask").attr("id", "circle-mask-2")

// const maskRect2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect'
// );
// maskRect2.setAttribute('width', width);
// maskRect2.setAttribute('height', height);
// maskRect2.setAttribute('fill', 'white');
// mask2.appendChild(maskRect2);

mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white")

// const circle2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle'
// );
// circle2.setAttribute('cx', width / 2);
// circle2.setAttribute('cy', height / 2);
// circle2.setAttribute('r', 200);
// circle2.setAttribute('fill', 'black');
// mask2.appendChild(circle2);

mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black")

const n = 100
const marks = []
for (let i = 0; i < n; i++) {
  marks.push({
    y: i * 20,
    width: width,
    height: 10,
    mask: "url(#circle-mask)",
  })
}
// console.log(range(5))
// console.log(marks);

// svg
//   .selectAll("rect")
//   .data(marks)
//   .join("rect")
//   .attr("y", (d) => d.y)
//   .attr("width", (d) => d.width)
//   .attr("height", (d) => d.height)
//   .attr("mask", (d) => d.mask)

svg
  .selectAll("rect.horizontal")
  .data(range(n)) //var rectangles
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("class", "horizontal")
  .attr("mask", "url(#circle-mask)")

// const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

// rect.setAttribute('y', i * 20);
// rect.setAttribute('width', width);
// rect.setAttribute('height', 10);
// rect.setAttribute('mask', 'url(#circle-mask)');
// svg.appendChild(rect);

svg
  .selectAll("rect.vertical")
  .data(range(n)) //var rectangles
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("class", "vertical")
  .attr("mask", "url(#circle-mask-2)")

// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//   rect.setAttribute('x', i * 20);
//   rect.setAttribute('width', 10);
//   rect.setAttribute('height', height);
//   rect.setAttribute('mask', 'url(#circle-mask-2)');
//   svg.appendChild(rect);
// }
