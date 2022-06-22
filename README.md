# sleep

> sleep command from bash ported to node.js

## Installation

```bash
npm install --save @bash-commands/sleep
```

## Usage

```node
const sleep = require('@bash-commands/sleep');

// .... Your code here ....
function main() {
  try {
    // usage with default options
    sleep().then(() => {
      // ...
    }); // sleep for 1 second

    // usage with custom timeout
    sleep(10).then(() => {
      // ...
    }); // sleep for 10 seconds

    // usage with custom timeout and native_sleep
    sleep(10, true); // sleep for 10 seconds using native_sleep
  } catch (err) {
    console.error(err);
  }
}
```

## Configuration (optional)

| Parameter    | Type      | Default | Description                          |
| ------------ | --------- | ------- | ------------------------------------ |
| duration     | `number`  | `1`     | Number of seconds to sleep for       |
| native_sleep | `boolean` | `false` | Should use native bash sleep command |

## License

[![License: ISC](https://img.shields.io/badge/License-ISC-red.svg)](https://opensource.org/licenses/ISC)
