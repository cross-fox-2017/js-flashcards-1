"use strict"
// write your code here
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

let data = JSON.parse(fs.readFileSync('data.json','UTF-8'));

function write(array){
  fs.writeFileSync('data.json', JSON.stringify(array), 'UTF-8')
}

let count = 0
console.log(data[count].definition)
rl.on('line', (line) => {
  if(count < data.length - 1){
    if(line.toLowerCase() == data[count].term.toLowerCase()){
      rl.prompt()
      console.log("Jawaban Anda Benar")
      count++
    } else {
      console.log("Jawaban Anda Salah");
    }
    console.log(data[count].definition)
    } else {
      rl.close()
    }

}).on('close', () => {
  console.log("Terima Kasih");
  process.exit(0);
});
