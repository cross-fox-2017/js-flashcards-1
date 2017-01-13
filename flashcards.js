"use strict"
const fs = require("fs")

function parse(data){
  let parsed = JSON.parse(fs.readFileSync(data,'utf-8'))
  return parsed
}

console.log(parse('data.json')[0].term)
