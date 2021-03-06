let {$ASI, $IDENT, $PUNCTUATOR} = require('../../../src/zetokenizer');

module.exports = (describe, test) =>
  describe('mixed array/object destructuring', _ => {
    test('object with shorthand inside array', {
      code: '[a, {b}, c] = obj',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {type: 'Identifier', name: 'a'},
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'b'},
                        kind: 'init',
                        method: false,
                        computed: false,
                        value: {type: 'Identifier', name: 'b'},
                        shorthand: true,
                      },
                    ],
                  },
                  {type: 'Identifier', name: 'c'},
                ],
              },
              operator: '=',
              right: {type: 'Identifier', name: 'obj'},
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('object with property pair inside array', {
      code: '[a, {b:d}, c] = obj',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {type: 'Identifier', name: 'a'},
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'b'},
                        kind: 'init',
                        method: false,
                        computed: false,
                        value: {type: 'Identifier', name: 'd'},
                        shorthand: false,
                      },
                    ],
                  },
                  {type: 'Identifier', name: 'c'},
                ],
              },
              operator: '=',
              right: {type: 'Identifier', name: 'obj'},
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('object with computed property inside array', {
      code: '[a, {[b]:d}, c] = obj',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {type: 'Identifier', name: 'a'},
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'b'},
                        kind: 'init',
                        method: false,
                        computed: true,
                        value: {type: 'Identifier', name: 'd'},
                        shorthand: false,
                      },
                    ],
                  },
                  {type: 'Identifier', name: 'c'},
                ],
              },
              operator: '=',
              right: {type: 'Identifier', name: 'obj'},
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('horrible addition. this could also be a valid array without the assignment suffixed', {
      code: '[please, {[make]: it}, stop] = bwahahahaha',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {type: 'Identifier', name: 'please'},
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'make'},
                        kind: 'init',
                        method: false,
                        computed: true,
                        value: {type: 'Identifier', name: 'it'},
                        shorthand: false,
                      },
                    ],
                  },
                  {type: 'Identifier', name: 'stop'},
                ],
              },
              operator: '=',
              right: {type: 'Identifier', name: 'bwahahahaha'},
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('double assignment in first deconstruction', {
      code: '[pweeze = [pretty] = please, {[make]: it}, stop] = bwahahahaha',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'ArrayPattern',
                elements: [
                  {
                    type: 'AssignmentPattern',
                    left: {type: 'Identifier', name: 'pweeze'},
                    right: {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'ArrayPattern',
                        elements: [{type: 'Identifier', name: 'pretty'}],
                      },
                      operator: '=',
                      right: {type: 'Identifier', name: 'please'},
                    },
                  },
                  {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'make'},
                        kind: 'init',
                        method: false,
                        computed: true,
                        value: {type: 'Identifier', name: 'it'},
                        shorthand: false,
                      },
                    ],
                  },
                  {type: 'Identifier', name: 'stop'},
                ],
              },
              operator: '=',
              right: {type: 'Identifier', name: 'bwahahahaha'},
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
    });

    test('horrible addition. this is a valid array without the assignment suffixed', {
      code: 'log({foo: [bar]});',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              callee: {type: 'Identifier', name: 'log'},
              arguments: [
                {
                  type: 'ObjectExpression',
                  properties: [
                    {
                      type: 'Property',
                      key: {type: 'Identifier', name: 'foo'},
                      kind: 'init',
                      method: false,
                      computed: false,
                      value: {
                        type: 'ArrayExpression',
                        elements: [{type: 'Identifier', name: 'bar'}],
                      },
                      shorthand: false,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
    });

    test('horrible addition. this is a valid array Patttern with an assignment suffixed', {
      code: 'log({foo: [bar]} = obj);',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              callee: {type: 'Identifier', name: 'log'},
              arguments: [
                {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        key: {type: 'Identifier', name: 'foo'},
                        kind: 'init',
                        method: false,
                        computed: false,
                        value: {
                          type: 'ArrayPattern',
                          elements: [{type: 'Identifier', name: 'bar'}],
                        },
                        shorthand: false,
                      },
                    ],
                  },
                  operator: '=',
                  right: {type: 'Identifier', name: 'obj'},
                },
              ],
            },
          },
        ],
      },
      tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
    });

    test('inside must destruct, outside cant', {
      code: '[...{a = b} = c];',
      desc: 'shorthand prop can only appear in Pattern, rest arg can only be an ident, this tests proper nesting',
      ast: {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'ArrayExpression',
              elements: [
                {
                  type: 'SpreadElement',
                  argument: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'ObjectPattern',
                      properties: [
                        {
                          type: 'Property',
                          key: {type: 'Identifier', name: 'a'},
                          kind: 'init',
                          method: false,
                          computed: false,
                          value: {
                            type: 'AssignmentPattern',
                            left: {type: 'Identifier', name: 'a'},
                            right: {type: 'Identifier', name: 'b'},
                          },
                          shorthand: true,
                        },
                      ],
                    },
                    operator: '=',
                    right: {type: 'Identifier', name: 'c'},
                  },
                },
              ],
            },
          },
        ],
      },
      tokens: [$PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
    });

    test('inside must destruct, outside should throw', {
      code: '[...{a = b} = c] = d;',
      desc: 'shorthand prop can only appear in Pattern, rest arg can only be an ident, this tests proper nesting',
      throws: 'not destructible',
    });

    test('inside must destruct, outside cannot be arrow', {
      code: '([...{a = b} = c]) => d;',
      desc: 'shorthand prop can only appear in Pattern, rest arg can only be an ident, this tests proper nesting',
      throws: 'rest arg',
    });
  });
