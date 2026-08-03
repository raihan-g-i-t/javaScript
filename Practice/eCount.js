const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  // Create the promise-based interface
  const rl = readline.createInterface({ input, output });

  try {
    const name = await rl.question('What is your name? ');
    const age = await rl.question('How old are you? ');

    console.log(`Hello ${name}, next year you will be ${Number(age) + 1}!`);
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    rl.close(); // Always close the interface
  }
}

main();