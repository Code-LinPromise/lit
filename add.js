const shell = require("shelljs");

const add = (files) => {
  if (!shell.which("git")) {
    shell.echo("Sorry this script requires git");
  }
  const fileNames = files.join(" ");
  const res = shell.exec(`git add ${fileNames}`);
  if (!!res) {
    shell.echo(res);
  }
};

module.exports = { add };
