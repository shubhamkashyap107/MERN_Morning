// var figlet = require("figlet");
// const chalk = require("chalk")
// import figlet from "figlet"
// import chalk from "chalk"
// import catme from "cat-me"
// import { getRandomCat } from "random-cat-img";
// const getRandomCat = require('random-cat-img');


// console.log(catme('nyan'))




// figlet("Shubham Kashyap", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(chalk.yellow(data));
// });


// (async () => {
//     const data = await getRandomCat();
//     console.log(data.message); // https://cdn.sefinek.net/images/animals/cat/cat-1362565-min.jpg
// })();


// const cowsay = require("cowsay");
// console.log(cowsay.say({
//     text : "Learing Nodejs",
//     e : "👀",
//     T : "👅 "
// }));

// var knockknock = require('knock-knock-jokes')
// console.log(knockknock())



const fs = require("fs") // file system


// const data = fs.readFileSync("./randonText.txt", {encoding : "utf-8"})

// fs.writeFileSync("./randonText.txt", "Hello this is gabbar")

// fs.appendFileSync("./randonText.txt", "\nThis is data 2")

// fs.unlinkSync("./randonText.txt")


// const data = fs.readFile("./ok.txt", "utf-8", (err, data) => {
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     // return data
//     console.log(data)
// })


// fs.writeFile("./ok.txt", "\nHELLO", (err) => {
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log("DONE")
// })



// fs.appendFile("./ok.txt", "\nqwerty", (err) => {
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log("DONE")
// })




// fs.unlink("./ok.txt", (err) => {
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log("DONE")
// })

// console.log("END")


let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

if(randomNumber == 3)
{
    fs.unlinkSync("./os.txt")
}