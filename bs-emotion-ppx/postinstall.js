var os = require('os')
var fs = require("fs");
var path = require("path");

var rootDir = __dirname;
var binDir = path.join(rootDir, "bin");

/**
 * Returns OS specific binary to copy to "bin" folder.
 */
function getBinaryDetails() {
  if (process.arch === "ia32") {
    throw (`${process.arch} architecture not supported.`);
  }

  switch (os.type()) {
    case 'Darwin':
      return { src: path.join(binDir, "bs-emotion-ppx-darwin-x64.exe"), dest: path.join(binDir, "bs-emotion-ppx.exe") };

    case 'Linux':
      return { src: path.join(binDir, "bs-emotion-ppx-linux-x64.exe"), dest: path.join(binDir, "bs-emotion-ppx.exe") }

    case 'Windows_NT':
      return { src: path.join(binDir, "bs-emotion-ppx-win-x64.exe"), dest: path.join(binDir, "bs-emotion-ppx.exe") }

    default:
      throw (`${os.type()} OS Not supported`);
  }
}

var binaryDetails = getBinaryDetails();
fs.copyFileSync(binaryDetails.src, binaryDetails.dest);