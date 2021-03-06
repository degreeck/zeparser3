//import {
let {PARSE_MODE_TICK} = require('../../utils');
//} from '../../utils';

//import ZeTokenizer, {
let {$STRING_SINGLE, $TICK_TAIL} = require('../../../src/zetokenizer');
//} from '../../../src/zetokenizer';

//import string_body from './string_body';
let string_body = require('./string_body'); // Λλ
let strings_template_static = string_body.slice(0);

// these test should happen for all string tests but it's just far easier to put them here than make it generic
strings_template_static.push(
  [`Λ a " b λ`, $TICK_TAIL],
  [`Λ a " b " c λ`, $TICK_TAIL],
  [`Λ a \\" b λ`, $TICK_TAIL],
  [`Λ a \\" b \\" c λ`, $TICK_TAIL],
  [`Λ a ' b λ`, $TICK_TAIL],
  [`Λ a ' b ' c λ`, $TICK_TAIL],
  [`Λ a \\' b λ`, $TICK_TAIL],
  [`Λ a \\' b \\' c λ`, $TICK_TAIL],
  //["Λ a ` b λ", $TICK_PURE],
  //["Λ a ` b ` c λ", $TICK_PURE],
  ['Λ a \\` b λ', $TICK_TAIL],
  ['Λ a \\` b \\` c λ', $TICK_TAIL],
);

strings_template_static = strings_template_static.map(([inputs, outs, mode, desc, ...rest]) => {
  let input = typeof inputs === 'string' ? `${inputs.replace(/Λ/g, '}').replace(/λ/g, '`')}` : inputs.map(s => `${s.replace(/Λ/g, '}').replace(/λ/g, '`')}`);
  let output = typeof outs === 'number' ? (outs === $STRING_SINGLE ? $TICK_TAIL : outs) : outs.map(o => (o === $STRING_SINGLE ? $TICK_TAIL : o));
  if (typeof mode === 'string') {
    rest.unshift(desc);
    desc = mode;
    mode = 0;
  }
  mode |= PARSE_MODE_TICK;
  if (!desc) desc = 'template_body';
  else desc = '<template tail> ' + desc;
  return [input, output, mode, desc, ...rest];
});

//export default strings_template_static;
module.exports = strings_template_static;
