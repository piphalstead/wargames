import readline from 'readline';
import { log } from "./typewriter.js";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

await log("login: ");

rl.question("", async function(answer) {
  if(answer == "joshua"){
    await log("hello Dr Falkon");
  } else {
    await log("login incorrect");
    await log("[connetion terminated]");
  }
   rl.close();
});