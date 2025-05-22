const shell = require("shelljs");
const prompts = require("prompts");

const commit = async (files) => {
  if (!shell.which("git")) {
    shell.echo("Sorry this script requires git");
  }
  const prefixMsg = await prefixMsgFn();
  const commitMsg = await commitMsgFn();
  const msg = `${prefixMsg}: ${commitMsg}`;
  const fileNames = files.length > 0 ? files.join(" ") : ".";
  const addRes = shell.exec(`git add ${fileNames}`);
  if (!!addRes) {
    shell.echo(addRes);
  }
  const commitRes = shell.exec(`git commit -m "${msg}"`);
  if (!!commitRes) {
    shell.echo(commitRes);
  }
};

const prefixMsgFn = async () => {
  const questions = [
    {
      type: "select",
      name: "value",
      message: "请选择commit前缀",
      choices: [
        {
          title: "feat",
          description: "新功能（feature）",
          value: "feat",
        },
        { title: "fix", value: "fix", description: "修补bug" },
        { title: "style", value: "style", description: "修改样式" },
        { title: "refactor", value: "refactor", description: "重构代码" },
        { title: "test", value: "test", description: "测试" },
        {
          title: "chore",
          value: "chore",
          description: "构建过程或辅助工具的变动",
        },
      ],
      initial: 0,
    },
  ];
  const res = await prompts(questions);
  return res.value;
};

const commitMsgFn = async (prefixMsg) => {
  const text = [
    {
      type: "text",
      name: "value",
      message: "请输入提交的commit信息",
    },
  ];
  const res = await prompts(text);
  return res.value;
};

module.exports = {
  commit,
};
