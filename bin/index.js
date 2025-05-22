#!/usr/bin/env node

const { Command } = require("commander");
const { add } = require("../add");
const { commit } = require("../commit");
const { push } = require("../push");

const program = new Command();

program.name("lit").description("自己实现的git").version("0.0.1");

program
  .command("add [files...]")
  .description("执行 git add")
  .action((files) => {
    add(files);
  });

program
  .command("commit [files...]")
  .description("执行 git commit")
  .action((files) => {
    commit(files);
  });

program
  .command("push")
  .description("执行 git push")
  .action(() => {
    push();
  });

program.parse();
// console.log(program);
