# moduleError
If a module is not installed, it will install the missing modules for you.

## Installation
install `npm i ZelAk312/moduleError`

## Example Usage
```js
const moduleError = require('./module.js');// you should be requirering 'moduleerror'

try{
    const ascii = require('ascii-art');
}catch(e){
    moduleError(e).then(result => {
        console.log(result);
    }).catch(console.log);
};
```
