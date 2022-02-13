const {readdirSync, renameSync} = require("fs");
const {join, basename} = require("path");
const path = require("path");
const {randomBytes} = require("crypto");


function *walkSync(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(join(dir, file.name));
    } else {
      yield `${basename(dir)}/${file.name}`;
    }
  }
}


function getFiles(folder, folderFind) {
  const allFilesFromFolder = Array.from(walkSync(folder));
  const allExistsFiles = Array.from(walkSync(folderFind));

  const files = []
  allFilesFromFolder.forEach(fol => {
    if (allExistsFiles.includes(fol)) {
      files.push({
        from: path.join(folder, fol),
        to: path.join(folderFind, fol)
      })
    }
  })

  return files;
}

function swap(from, to) {
  if (from === to) {
    return;
  }

  const temp = from + ".tmp-" + randomBytes(16).toString("hex");
  renameSync(from, temp);
  renameSync(to, from);
  renameSync(temp, to);
}

module.exports = (from, to) => {
  const files = getFiles(from, to);
  if (files.length) {
    files.forEach(file => {
      swap(file.from, file.to);
    })
  }
}
