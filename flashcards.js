// "use strict"
// // write your code here
// const fs = require('fs')
// const readline = require('readline');
//
// var dataFile = JSON.parse(fs.readFileSync('data.json','UTF-8'))
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let i = 0
// while (i < 6 ) {
// rl.question(`${dataFile[i]['definition']}\n\nJawaban : `, (input) => {
//
//       switch (input) {
//       case dataFile[i]['term']:
//         console.log('jawaban benar!');
//         i++
//         break;
//       default:
//         console.log('jawaban salah!');
//     }
//   }
//   console.log('selamat anda menang!');
//   rl.close();
// })

/////////////////////////////////////

const readline = require('readline');
var colors = require('colors');
const fs = require('fs')
var dataFile = JSON.parse(fs.readFileSync('data.json','UTF-8'))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0
console.log('Welcome to FlashCards Game\n'.trap.america);
rl.setPrompt(`${dataFile[i]['definition']}\n\nJawaban : \n`)
rl.prompt();
//let temp = []
rl.on('line', (input) => {
  switch(input.trim().toLowerCase()) {
    case dataFile[i]['term'].toLowerCase():
      console.log('\nJawaban Benar\n'.green);
      if (i < 5) {
        rl.setPrompt(`${dataFile[i+1]['definition']}\n\nJawaban : \n`)
        i++
      }
      else {
        rl.close()
      }
      break;
    default:
      console.log(`jawaban salah`.red);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('\nSelamat anda menang!'.rainbow);
  process.exit(0);
});
