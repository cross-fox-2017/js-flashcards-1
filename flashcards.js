"use strict"
// write your code here
let fs = require('fs');
let i = 0;
var  question = JSON.parse(fs.readFileSync('data.json','utf-8'))
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('Welcome to JS Flash Card. To play, just enter the correct term for each definition. Ready ? GO ! \n')

rl.setPrompt(`${question[i].definition}?\nJawaban :`)
rl.prompt()

rl.on('line', (answer) => {
  if((i+1)<question.length){
    switch(answer.trim().toUpperCase()) {
      case question[i].term.toUpperCase():
        console.log('jawaban benar');
        i++
        break;
      default:
        console.log(`jawaban salah`);
        break;
    }
    rl.setPrompt(`${question[i].definition}?\nJawaban :`)
    rl.prompt();
  }else{
    rl.close()
  }
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
