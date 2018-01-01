// requires a clone of https://github.com/tc39/test262.git
// test is skipped if that dir cannot be found

let fs = require('fs');
let path = require('path');

const PATH262 = process.env.HOME + '/apps/test262/test';

if (!fs.statSync(PATH262).isDirectory()) {
  module.exports = () => undefined;
} else {
  let files = {};
  function read(obj, path, file) {
    let combo = path + file;
    if (fs.statSync(combo).isFile()) {
      if (file.slice(-3) === '.js') {
        let lcname = combo.toLowerCase();
        if (
          lcname.indexOf('for-await') < 0 && // for await is not final yet
          lcname.indexOf('this-val-regexp') < 0 && // new regex flags
          lcname.indexOf('unicode-reference') < 0 && // named back references are not final yet
          lcname.indexOf('regexp/y-') < 0 && // y-flag in regexes
          lcname.indexOf('bigint') < 0 && // adds new number syntax
          lcname.indexOf('lookbehind') < 0 && // regex ?<= lookbehind https://github.com/tc39/proposal-regexp-lookbehind
          lcname.indexOf('spread-sngl-obj') < 0 && // object spread is es8 or something, to do
          lcname.indexOf('class-definition-evaluation-scriptbody-duplicate-binding') < 0 && // TODO duplicate bindings are early error
          lcname.indexOf('yield-star-sync-throw') < 0 && // async generators are part of the `for await` proposal
          lcname.indexOf('use-strict-with-non-simple-param') < 0 && // wtf even. TODO. I guess.
          lcname.indexOf('vals-rus') < 0 && // TODO: non-ascii idents
          lcname.indexOf('property-escapes') < 0 // regex \P escape https://github.com/tc39/proposal-regexp-unicode-property-escapes
        ) {
          obj[combo] = {path: combo, contents: fs.readFileSync(combo)};
        }
      }
    } else {
      fs.readdirSync(combo).forEach(s => read(files['#' + file] = {}, combo  + '/', s));
    }
  }
  read(files, PATH262, '');

  module.exports = function f(describe, test, list = files) {
    for (let key in list) if (list.hasOwnProperty(key)) {
      console.log('->', key)
      let obj = list[key];
      if (key[0] === '#') {
        describe(key.slice(1), f.bind(undefined, describe, test, obj))
      } else {
        let code = obj.contents.toString();
        let headerEndMarker = '---*/';
        let headerEnd = code.indexOf(headerEndMarker);
        if (headerEnd < 0) throw new Error('test262: file missing header: ' + key);

        // some 262 tests target stuff still in staging. simply start those lines with ZIGNORE to exclude them.
        if (code.indexOf('ZIGNORE') !== 0) {
          let testObj = {
            code: code.slice(headerEnd + headerEndMarker.length), // dont care so much about the (mandatory) header
            tokens: true,
            debug: 'test6262 file path: ' + obj.path,
          };

          // TODO: can we make this check the opposite instead? throw/pass when that's not expected
          if (code.indexOf('[noStrict]')) {
            testObj.STRICT = {SKIP:true};
            testObj.MODULE = {SKIP:true};
          }
          if (code.indexOf('[onlyStrict]') >= 0) testObj.SLOPPY = {SKIP:true};
          if (code.indexOf('[module]') >= 0) testObj.SCRIPT = {SKIP:true};

          if (code.indexOf('negative:') >= 0) {
            // "negative:" means the test is expected to throw
            testObj.throws = true;
          } else {
            testObj.ast = true;
          }

          test(key, testObj);
        }
      }
    }
  };
}
