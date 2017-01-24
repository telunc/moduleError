const RegexWorld = require('regexworld');
const exec = require("child_process").exec;

module.exports = error => {
    return new Promise((resolve, reject) => {
        let string = error.message.split("\n")[0];
        if(string.startsWith('Cannot find module')){
            RegexWorld
              .setStr(string)
              .setRegex(/'(.*)'/gi)
              .regexStart(null, (err, result) => {
                if(err) reject(err);
                exec(`npm i ${result[0][1]}`, (e, stdout, stderr) => {
                    if(e) return reject(e);
                    else {
                      resolve(stdout + '\n' + stderr);
                    }
                });
            });
        }else{
            reject("The error is not a module error");
        }
    });
};
