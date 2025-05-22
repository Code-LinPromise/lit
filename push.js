const shell = require("shelljs");
const { commit } = require("./commit");

const push = async () => {
  await commit(["."]);
  const pushRes = shell.exec(`git push`);
  if (!!pushRes) {
    shell.echo(pushRes);
  }
};
module.exports = {
  push,
};
