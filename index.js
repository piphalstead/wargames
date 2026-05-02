import readline from 'readline';
import { log } from "./typewriter.js";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

await log("logon: ");

rl.question("", async function(answer) {
  if(answer == "joshua"){
    await log("greetings professor Falken");
  } else {
    await log("logon incorrect");
    await log("[connetion terminated]");
  }
   rl.close();
});