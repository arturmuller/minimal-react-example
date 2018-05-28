const fs = require("fs-extra");
const path = require("path");
const h = require("react-hyperscript");
const rds = require("react-dom/server");

const Page = props => (
  h("html", {lang: "en"}, [
    h("head", [
      h("title", props.title),
      h("meta", {charSet: "utf-8"}),
      h("style", "html {font-family: sans-serif}")
    ]),
    h("body", [
      h("h1", props.title),
      h("p", "React without toolchains is a breeze! 🍃"),
    ]),
  ])
)

fs.outputFile(
  path.resolve("output/index.html"),
  rds.renderToStaticMarkup(h(Page, {title: "Hello World!"})),
  () => console.log("Done!")
);
