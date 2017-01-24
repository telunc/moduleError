const moduleError = require('./module.js');

try{
    const ascii = require('ascii-art');
}catch(e){
    moduleError(e).then(result => {
        console.log(result);
    }).catch(console.log);
};
