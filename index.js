const { exec } = require('child_process');

const default_sleeper_timeout = 1; // seconds
const use_native_sleep = false;

/**
 *
 * @param {number} duration the time (in seconds) to sleep for
 * @param {boolean} native_sleep if true, use the native sleep function
 * @returns void
 */
function sleep(duration = default_sleeper_timeout, native_sleep = use_native_sleep) {
  if (native_sleep) {
    return exec(`sleep ${duration}`, (err, stdout, stderr) => {
      if (err || stderr) {
        throw new Error(err.message || stderr);
      }
    });
  }
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}

module.exports = sleep;
