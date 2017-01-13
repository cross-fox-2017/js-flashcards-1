"use strict"
// write your code here
const jsonfile = require('jsonfile')
const file = 'data.json'
const db = jsonfile.readFileSync(file)
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let count = 0
function home() {
  rl.question('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!', (answer) =>{
    if (answer == '') {
      question()
    }else {
      home()
    }
  })
}

function question() {
  if (count < db.length) {
    rl.question(db[count].definition +'\nGuest: ', (answer) =>{
      if (answer == db[count].term) {
        count++
        question()
      }else {
        question()
      }
    })
  }else {
    console.log('selesai');
    rl.close()
  }
}

home()
