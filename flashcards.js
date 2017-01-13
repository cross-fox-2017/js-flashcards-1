"use strict"
// write your code here
const fs = require('fs');
const readline = require('readline')
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

let dataList = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// console.log(readFile);

console.log('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Read? Go!');

var i = 0;

rl.setPrompt(`${dataList[i].definition} : `);
rl.prompt()

rl.on('line', (answer) => {
  if (i == dataList.length-1) {
    rl.close()
    console.log("Pertanyaan selesai.. Congratz");
  } else if(answer.toLowerCase() == dataList[i].term.toLowerCase()) {
    console.log('CORRECT!');
    i++
    rl.setPrompt( `${dataList[i].definition} : `);
    rl.prompt();
  } else {
    console.log('GOBLOK LW, BEGO LW, TOLOL LW.. SALAH!!! BEGO');
    rl.setPrompt( `${dataList[i].definition} : `);
    rl.prompt();
  }
})
