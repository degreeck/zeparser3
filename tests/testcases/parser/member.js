let {$ASI, $IDENT, $PUNCTUATOR} = require('../../../src/zetokenizer');

module.exports = (describe, test) =>
  describe('member expression', _ => {
    test('function call, no args', {
      code: 'foo.bar',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'MemberExpression',
              object: {type: 'Identifier', name: 'foo'},
              property: {type: 'Identifier', name: 'bar'},
              computed: false,
            },
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('property on call', {
      code: 'a().b',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'MemberExpression',
              object: {
                type: 'CallExpression',
                callee: {type: 'Identifier', name: 'a'},
                arguments: [],
              },
              property: {type: 'Identifier', name: 'b'},
              computed: false,
            },
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });
  });
