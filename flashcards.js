"use strict"

let fs = require("fs");
let readData = JSON.parse(fs.readFileSync("data.json", "utf8"));
let count = 0;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(`Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!\n\nDefinition\n${readData[0].definition}\n\nGuess: `)
rl.prompt();

rl.on('line', (answer) => {
  if (count === readData.length-1) {
    console.log('Selamat jawaban anda betul semua!');
    rl.close();
  }
  else if(answer.trim().toLowerCase() === readData[count].term.toLowerCase()){
    console.log('Correct!');
    rl.setPrompt(`\nDefinition:\n${readData[count+1].definition}\n\nGuess: `);
    rl.prompt();
    count++;
  }
  else {
    console.log("Incorrect! Try again.");
    rl.prompt();
  }
});
