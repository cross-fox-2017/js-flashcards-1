"use strict"
// write your code here
//config
let fs = require("fs")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Models
function connect() {
  let json = JSON.parse(fs.readFileSync("data.json", "utf-8"))
  return json
}

//View
Menu()

//Controller
function pertanyaan(){
  let json = connect()
  rl.setPrompt("DEFINITION  : \n"+json[0].definition+"\nGUESS : ")
  rl.prompt()
  let count = 0;

  rl.on('line',(answer)=>{

    if((count+1) < json.length){
      if(answer.toLowerCase() == json[count].term.toLowerCase()){
        console.log("ANDA BENAR !\n");
        count++
        rl.setPrompt("DEFINITION  : \n"+json[count].definition+" \nGUESS : ")
        rl.prompt()
      }else{
        console.log("ANDA SALAH !\n");
        rl.setPrompt("DEFINITION  : \n"+json[count].definition+" \nGUESS : ")
        rl.prompt()
      }
    }else{
      rl.close()
      console.log("ANDA BENAR SEMUA !");
    }
  });
}

function Menu(){
  console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready ? Go ! ");
  pertanyaan()
}
