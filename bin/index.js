#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

program.name("lpt").description("自己实现的git").version("0.0.1");

program
  .command("add [file...]")
  .description("执行 git add")
  .action((file) => {
    console.log(file, "file");
  });

program.parse();
// console.log(program);
