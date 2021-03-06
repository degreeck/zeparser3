let {$ASI, $IDENT, $NUMBER_HEX, $NUMBER_DEC, $NUMBER_BIN, $NUMBER_OCT, $NUMBER_OLD, $PUNCTUATOR, $STRING_DOUBLE, $STRING_SINGLE} = require('../../../src/zetokenizer');

module.exports = (describe, test) =>
  describe('literals', _ => {
    test('null literal', {
      code: 'null',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: null,
              raw: 'null',
            },
          },
        ],
      },
      tokens: [$IDENT, $ASI],
    });

    test('true literal', {
      code: 'true',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: true,
              raw: 'true',
            },
          },
        ],
      },
      tokens: [$IDENT, $ASI],
    });

    test('false literal', {
      code: 'false',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: false,
              raw: 'false',
            },
          },
        ],
      },
      tokens: [$IDENT, $ASI],
    });

    test('super literal', {
      // to be refined...
      code: 'super',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Super',
            },
          },
        ],
      },
      tokens: [$IDENT, $ASI],
    });

    test('double string literal', {
      code: 'x;"foo"',
      desc: 'the x prevents a directive',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {type: 'Identifier', name: 'x'},
          },
          {
            type: 'ExpressionStatement',
            expression: {type: 'Literal', value: '<TODO>', raw: '"foo"'},
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $STRING_DOUBLE, $ASI],
    });

    test('single string literal', {
      code: `x;'foo'`,
      desc: 'the x prevents a directive',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {type: 'Identifier', name: 'x'},
          },
          {
            type: 'ExpressionStatement',
            expression: {type: 'Literal', value: '<TODO>', raw: "'foo'"},
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $STRING_SINGLE, $ASI],
    });

    test('decimal number', {
      code: '123',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: '<TODO>',
              raw: '123',
            },
          },
        ],
      },
      tokens: [$NUMBER_DEC, $ASI],
    });

    test('hexadecimal number', {
      code: '0x123',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: '<TODO>',
              raw: '0x123',
            },
          },
        ],
      },
      tokens: [$NUMBER_HEX, $ASI],
    });

    test('octal number', {
      code: '0o123',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: '<TODO>',
              raw: '0o123',
            },
          },
        ],
      },
      tokens: [$NUMBER_OCT, $ASI],
    });

    test('binary number', {
      code: '0b1010',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: '<TODO>',
              raw: '0b1010',
            },
          },
        ],
      },
      tokens: [$NUMBER_BIN, $ASI],
    });

    test('legacy octal number', {
      code: '0456',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'Literal',
              value: '<TODO>',
              raw: '0456',
            },
          },
        ],
      },
      tokens: [$NUMBER_OLD, $ASI],
    });

    test('this keyword', {
      code: 'this',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ThisExpression',
            },
          },
        ],
      },
      tokens: [$IDENT, $ASI],
    });
  });
