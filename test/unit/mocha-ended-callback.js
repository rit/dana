var n = 1

function ended () {
  const counter = () => n++
  console.log(`Mocha Completed #: ${counter()}`);
}

global.mochaEndedCallback = ended
module.exports = ended
