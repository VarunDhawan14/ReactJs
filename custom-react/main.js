const { Children } = require("react");

const domElement = document.createElement("div");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "blank",
  },
  Children: "Click me to visit google",
};
