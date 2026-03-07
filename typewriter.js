import sleep from './sleep.js';

/**
 * @param {string} logText - Text to print
 */
const log = async (logText) => {
    for(let i=0; i < logText.length; i++){
        process.stdout.write(logText[i])
        await sleep(2000);
    }
    process.stdout.write("\\n");
}

export {log};