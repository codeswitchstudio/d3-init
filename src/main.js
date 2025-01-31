import "./style.css"
import { select, range } from "d3"

console.log(select)

const width = window.innerWidth
const height = window.innerHeight

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

const mask = svg.append("mask").attr("id", "circle-mask")

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black")

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white")

const mask2 = svg.append("mask").attr("id", "circle-mask-2")

mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white")

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

svg
  // .selectAll("rect.horizontal") corresps to add class below
  .append("g")
  .selectAll("rect")
  .data(range(n)) //var rectangles
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  // .attr("class", "horizontal")
  .attr("mask", "url(#circle-mask)")

svg
  // .selectAll("rect.vertical") corresps to add class below
  .append("g")
  .selectAll("rect")
  .data(range(n)) //var rectangles
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  // .attr("class", "vertical")
  .attr("mask", "url(#circle-mask-2)")
