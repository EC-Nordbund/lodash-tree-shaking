const _ = require("lodash");
const fs = require("fs");

let file = "";

Object.keys(_).forEach(module => {
  if (
    module === "_" ||
    module === "VERSION" ||
    module === "noConflict" ||
    module === "runInContext"
  ) {
    return;
  }

  file += `export * as ${module} from "lodash/${module}"\n`;
});

fs.writeFileSync("./index.ts", file);
// console.log(file);
