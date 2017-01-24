# moduleError
if a module is not installed it will install it for you

install `npm i ZelAk312/moduleError`

ex:
```js
const moduleError = require('./module.js');// you should be requiring 'moduleerror'

try{
    const ascii = require('ascii-art');
}catch(e){
    moduleError(e).then(result => {
        console.log(result);
    }).catch(console.log);
};
```
