const path=require("path")
const fs=require("fs")

console.log(__dirname)
//F:\WPT\nodejs\fs-module
console.log(process.cwd())  //cwd() current work directory
//F:\WPT\nodejs\fs-module

const filepath=path.join(__dirname,"files","profile.txt")
console.log(filepath)

fs.readFileSync(filePath,"utf-8")
console.log(data)
//F:\WPT\nodejs\fs-module\files\profile.txt