#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const wait = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcomeScreen() {
  const msg = "Parbez";

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  await wait();
}

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Hi, I'm Parbez. \nWelcome to my cli game!\n"
  );
  await wait();
  rainbowTitle.stop();

  console.log(`
  ${chalk.bgGreen(chalk.red("My Introduction"))}
  I'm a ${chalk.green("self-taught")} developer.
  Software Engineer specialized in ${chalk.blue("Node.js")} and ${chalk.bgBlue(
    "Typescript"
  )}.
  Full stack web and app developer.
  Ethical Hacker and Pentester.
  `);
}

async function askName() {
  const answer = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's your name?",
    default() {
      return "Player";
    },
  });
  playerName = answer.playerName;
}

await welcomeScreen();
await welcome();
await askName();

console.log(
  `${chalk.bgGreen(chalk.red(`Hi ${playerName}!`))}
    Nice to meet you!
    `
);

async function chooseOne() {
  const answer = await inquirer.prompt({
    name: "chooseOne",
    type: "list",
    message: "Select a option to go to my profile",
    choices: ["My Github", "My Discord"],
  });
  return handleAnswer(answer.chooseOne);
}

async function handleAnswer(ans) {
  const spinner = createSpinner("Generating profile link...").start();
  await wait();
  const profileLink =
    ans === "My Github" ? "https://github.com/imranbarbhuiya" : "P<z, x>#1572";

  spinner.success({
    text: `Profile link generated successfully!\n${profileLink}`,
  });
}

await chooseOne();
