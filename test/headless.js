const chrome = require('chrome-remote-interface');
const {ChromeLauncher} = require('lighthouse/lighthouse-cli/chrome-launcher');

var _laucher;
var _protocol;

/**
 *  * Launches a debugging instance of Chrome on port 9222.
 *   * @param {boolean=} headless True (default) to launch Chrome in headless mode.
 *    *     Set to false to launch Chrome normally.
 *     * @return {Promise<ChromeLauncher>}
 *      */
function launchChrome(headless = true) {
  const launcher = new ChromeLauncher({
    port: 9222,
    autoSelectChrome: true, // False to manually select which Chrome install.
    additionalFlags: [
      '--window-size=412,732',
      '--disable-gpu',
      headless ? '--headless' : ''
    ]
  });

  return launcher.run().then(() => launcher)
    .catch(err => {
      return launcher.kill().then(() => { // Kill Chrome if there's an error.
        throw err;
      }, console.error);
    });
}

launchChrome(true).then(launcher => {
  _laucher = launcher;
  chrome(protocol => {
    _protocol = protocol;
    const {Page, Runtime} = protocol;
    Promise.all([
        Page.enable(),
        Runtime.enable()
    ]).then(() => {
      Page.navigate({url: 'http://localhost:8088'});
      Page.loadEventFired((timestamp) => {
        Runtime.consoleAPICalled((data) => {
          var args = data.args.map(item => item.value)
          console.log.apply(null, args)
        })
      })
    })
  });
});

process.on('SIGINT', () => {
  _protocol.close();
  _laucher.kill();
});
