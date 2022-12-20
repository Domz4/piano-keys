const fs = require("fs");
const dirPath = "../audio";

fs.readdir(dirPath, (err, file) => {
  if (err) {
    console.error("There was an error reading the directory:", err);
    return;
  }

  file.forEach(function (file) {
    console.log(file);
  });
});
