let {$ASI, $IDENT, $NUMBER_DEC, $PUNCTUATOR, $REGEX, $STRING_DOUBLE, $TICK_HEAD, $TICK_TAIL} = require('../../../src/zetokenizer');

module.exports = (describe, test) =>
  describe('parens', _ => {
    describe('group', _ => {
      test('silly group', {
        code: '(x);',
        ast: {
          type: 'Program',
          body: [{type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'x'}}],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('silly double group', {
        code: '((x));',
        ast: {
          type: 'Program',
          body: [{type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'x'}}],
        },
        tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('oh come on', {
        code: '((((((((((x))))))))));',
        ast: {
          type: 'Program',
          body: [{type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'x'}}],
        },
        tokens: [
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $IDENT,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
          $PUNCTUATOR,
        ],
      });

      test('group of two vars', {
        code: '(a, b);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [{type: 'Identifier', name: 'a'}, {type: 'Identifier', name: 'b'}],
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('group of some simple values', {
        code: '(a, 1, "c", d, e, f);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [
                  {type: 'Identifier', name: 'a'},
                  {type: 'Literal', value: '<TODO>', raw: '1'},
                  {type: 'Literal', value: '<TODO>', raw: '"c"'},
                  {type: 'Identifier', name: 'd'},
                  {type: 'Identifier', name: 'e'},
                  {type: 'Identifier', name: 'f'},
                ],
              },
            },
          ],
        },
        tokens: [
          $PUNCTUATOR,
          $IDENT,
          $PUNCTUATOR,
          $NUMBER_DEC,
          $PUNCTUATOR,
          $STRING_DOUBLE,
          $PUNCTUATOR,
          $IDENT,
          $PUNCTUATOR,
          $IDENT,
          $PUNCTUATOR,
          $IDENT,
          $PUNCTUATOR,
          $PUNCTUATOR,
        ],
      });

      test('group of some two assignments', {
        code: '(a = 1, b = 2);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [
                  {type: 'AssignmentExpression', left: {type: 'Identifier', name: 'a'}, operator: '=', right: {type: 'Literal', value: '<TODO>', raw: '1'}},
                  {type: 'AssignmentExpression', left: {type: 'Identifier', name: 'b'}, operator: '=', right: {type: 'Literal', value: '<TODO>', raw: '2'}},
                ],
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $PUNCTUATOR],
      });

      describe('regular assignment to group', _ => {
        test('assignment to a wrapped identifier, silly but valid', {
          // https://tc39.github.io/ecma262/#sec-semantics-static-semantics-isvalidsimpleassignmenttarget
          code: '(a) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'Identifier', name: 'a'},
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped property, silly but valid', {
          code: '(a.b) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: false},
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped property, silly but valid', {
          code: '(a[b]) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: true},
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped complex value that ends in a property, silly but valid', {
          code: '(a.b().c().d) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        object: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            object: {type: 'Identifier', name: 'a'},
                            property: {type: 'Identifier', name: 'b'},
                            computed: false,
                          },
                          arguments: [],
                        },
                        property: {type: 'Identifier', name: 'c'},
                        computed: false,
                      },
                      arguments: [],
                    },
                    property: {type: 'Identifier', name: 'd'},
                    computed: false,
                  },
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $NUMBER_DEC,
            $PUNCTUATOR,
          ],
        });

        test('assignment to a wrapped super property, silly but valid', {
          code: '(super.a) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'Super'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: false,
                  },
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped super property, silly but valid', {
          code: '(super[a]) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'Super'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: true,
                  },
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped this property, silly but valid', {
          code: '(this.a) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'ThisExpression'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: false,
                  },
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped this property, silly but valid', {
          code: '(this[b]) = 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'ThisExpression'},
                    property: {type: 'Identifier', name: 'b'},
                    computed: true,
                  },
                  operator: '=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to array is destructuring', {
          code: '[x, y] = z;',
          desc: 'while not a prod, the assignment to array/object is an explicit exception (search for `assignmentpattern`)',
          // https://tc39.github.io/ecma262/#_ref_10683
          //   AssignmentExpression: LeftHandSideExpression = AssignmentExpression
          //     It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and LeftHandSideExpression is not covering an AssignmentPattern.
          //     It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
          //   AssignmentExpression: LeftHandSideExpression AssignmentOperator AssignmentExpression
          //     It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'ArrayPattern',
                    elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                  },
                  operator: '=',
                  right: {type: 'Identifier', name: 'z'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
        });

        test('assignment to grouped array is not okay', {
          code: '([x, y]) = z;',
          desc: 'while not a prod, the assignment to array/object is an explicit exception (search for `assignmentpattern`)',
          throws: 'Invalid assignment',
        });

        test('assignment to array grouped is destructuring', {
          code: '([x, y] = z);',
          desc: 'the group is fine otherwise',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'ArrayPattern',
                    elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                  },
                  operator: '=',
                  right: {type: 'Identifier', name: 'z'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('assignment to array grouped can be arrow', {
          code: '([x, y] = z) => x;',
          desc: 'the group is fine otherwise',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrowFunctionExpression',
                  params: [
                    {
                      type: 'AssignmentPattern',
                      left: {
                        type: 'ArrayPattern',
                        elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                      },
                      right: {type: 'Identifier', name: 'z'},
                    },
                  ],
                  id: null,
                  generator: false,
                  async: false,
                  expression: true,
                  body: {type: 'Identifier', name: 'x'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
        });

        test('assignment to array in array can have no arrow', {
          code: '([[x, y] = z]);',
          desc: 'the group is fine otherwise',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'ArrayPattern',
                        elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                      },
                      operator: '=',
                      right: {type: 'Identifier', name: 'z'},
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('assignment to array in array can have arrow', {
          code: '([[x, y] = z]) => x;',
          desc: 'the group is fine otherwise',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrowFunctionExpression',
                  params: [
                    {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'AssignmentPattern',
                          left: {
                            type: 'ArrayPattern',
                            elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                          },
                          right: {type: 'Identifier', name: 'z'},
                        },
                      ],
                    },
                  ],
                  id: null,
                  generator: false,
                  async: false,
                  expression: true,
                  body: {type: 'Identifier', name: 'x'},
                },
              },
            ],
          },
          tokens: [
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
          ],
        });

        test('assignment to array in array must destructuring', {
          code: '([[x, y] = z]) => x;',
          desc: 'the group is fine otherwise',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrowFunctionExpression',
                  params: [
                    {
                      type: 'ArrayPattern',
                      elements: [
                        {
                          type: 'AssignmentPattern',
                          left: {
                            type: 'ArrayPattern',
                            elements: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                          },
                          right: {type: 'Identifier', name: 'z'},
                        },
                      ],
                    },
                  ],
                  id: null,
                  generator: false,
                  async: false,
                  expression: true,
                  body: {type: 'Identifier', name: 'x'},
                },
              },
            ],
          },
          tokens: [
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
          ],
        });

        test('assignment to object as statmeent is error', {
          code: '{x, y} = z;',
          desc: 'top level object is parsed as a block',
          throws: 'can not start with object destructuring',
        });

        test('assignment to object as expression is destructuring', {
          code: '({x, y} = z);',
          desc: 'while not a prod, the assignment to array/object is an explicit exception (search for `assignmentpattern`)',
          // https://tc39.github.io/ecma262/#_ref_10683
          //   AssignmentExpression: LeftHandSideExpression = AssignmentExpression
          //     It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and LeftHandSideExpression is not covering an AssignmentPattern.
          //     It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
          //   AssignmentExpression: LeftHandSideExpression AssignmentOperator AssignmentExpression
          //     It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'ObjectPattern',
                    properties: [
                      {
                        type: 'Property',
                        computed: false,
                        kind: 'init',
                        method: false,
                        shorthand: true,
                        key: {type: 'Identifier', name: 'x'},
                        value: {type: 'Identifier', name: 'x'},
                      },
                      {
                        type: 'Property',
                        computed: false,
                        kind: 'init',
                        method: false,
                        shorthand: true,
                        key: {type: 'Identifier', name: 'y'},
                        value: {type: 'Identifier', name: 'y'},
                      },
                    ],
                  },
                  operator: '=',
                  right: {type: 'Identifier', name: 'z'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('assignment to grouped array is not okay', {
          code: '({x, y}) = z;',
          desc: 'while not a prod, the assignment to array/object is an explicit exception (search for `assignmentpattern`)',
          throws: 'Invalid assignment',
        });
      });

      describe('compound assignment to group', _ => {
        test('assignment to a wrapped identifier, silly but valid', {
          // https://tc39.github.io/ecma262/#sec-semantics-static-semantics-isvalidsimpleassignmenttarget
          code: '(a) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'Identifier', name: 'a'},
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped property, silly but valid', {
          code: '(a.b) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: false},
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped property, silly but valid', {
          code: '(a[b]) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: true},
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped complex value that ends in a property, silly but valid', {
          code: '(a.b().c().d) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        object: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            object: {type: 'Identifier', name: 'a'},
                            property: {type: 'Identifier', name: 'b'},
                            computed: false,
                          },
                          arguments: [],
                        },
                        property: {type: 'Identifier', name: 'c'},
                        computed: false,
                      },
                      arguments: [],
                    },
                    property: {type: 'Identifier', name: 'd'},
                    computed: false,
                  },
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $IDENT,
            $PUNCTUATOR,
            $PUNCTUATOR,
            $NUMBER_DEC,
            $PUNCTUATOR,
          ],
        });

        test('assignment to a wrapped super property, silly but valid', {
          code: '(super.a) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'Super'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: false,
                  },
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped super property, silly but valid', {
          code: '(super[a]) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'Super'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: true,
                  },
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped this property, silly but valid', {
          code: '(this.a) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'ThisExpression'},
                    property: {type: 'Identifier', name: 'a'},
                    computed: false,
                  },
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });

        test('assignment to a wrapped this property, silly but valid', {
          code: '(this[b]) += 1;',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'MemberExpression',
                    object: {type: 'ThisExpression'},
                    property: {type: 'Identifier', name: 'b'},
                    computed: true,
                  },
                  operator: '+=',
                  right: {type: 'Literal', value: '<TODO>', raw: '1'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
        });
      });

      describe('sans arr', _ => {
        test('new inside array', {
          code: '(new x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'NewExpression',
                  arguments: [],
                  callee: {type: 'Identifier', name: 'x'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('delete inside array', {
          code: '(delete foo.bar);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'UnaryExpression',
                  operator: 'delete',
                  prefix: true,
                  argument: {
                    type: 'MemberExpression',
                    object: {type: 'Identifier', name: 'foo'},
                    property: {type: 'Identifier', name: 'bar'},
                    computed: false,
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('objlit inside array', {
          code: '({});',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {type: 'ObjectExpression', properties: []},
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('division inside array', {
          code: '(a / b);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'BinaryExpression',
                  left: {type: 'Identifier', name: 'a'},
                  operator: '/',
                  right: {type: 'Identifier', name: 'b'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('div newline inside array', {
          code: '(a \n/b/g);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'BinaryExpression',
                    left: {type: 'Identifier', name: 'a'},
                    operator: '/',
                    right: {type: 'Identifier', name: 'b'},
                  },
                  operator: '/',
                  right: {type: 'Identifier', name: 'g'},
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('div newline 2 inside array', {
          code: '(a \n/b/);',
          throws: 'Expected to parse a value',
        });

        test('regex case 1', {
          code: '(delete /a/.x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'UnaryExpression',
                  operator: 'delete',
                  prefix: true,
                  argument: {
                    type: 'MemberExpression',
                    object: {type: 'Literal', value: '<TODO>', raw: '/a/'},
                    property: {type: 'Identifier', name: 'x'},
                    computed: false,
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('regex case 2', {
          code: '(delete /a/g.x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'UnaryExpression',
                  operator: 'delete',
                  prefix: true,
                  argument: {
                    type: 'MemberExpression',
                    object: {type: 'Literal', value: '<TODO>', raw: '/a/g'},
                    property: {type: 'Identifier', name: 'x'},
                    computed: false,
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 1', {
          code: '(foo /=g/m.x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  left: {type: 'Identifier', name: 'foo'},
                  operator: '/=',
                  right: {
                    type: 'BinaryExpression',
                    left: {type: 'Identifier', name: 'g'},
                    operator: '/',
                    right: {
                      type: 'MemberExpression',
                      object: {type: 'Identifier', name: 'm'},
                      property: {type: 'Identifier', name: 'x'},
                      computed: false,
                    },
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 2', {
          code: '(void /=g/m.x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'UnaryExpression',
                  operator: 'void',
                  prefix: true,
                  argument: {
                    type: 'MemberExpression',
                    object: {type: 'Literal', value: '<TODO>', raw: '/=g/m'},
                    property: {type: 'Identifier', name: 'x'},
                    computed: false,
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 3', {
          code: '(void /=/g/m.x);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'UnaryExpression',
                    operator: 'void',
                    prefix: true,
                    argument: {type: 'Literal', value: '<TODO>', raw: '/=/g'},
                  },
                  operator: '/',
                  right: {
                    type: 'MemberExpression',
                    object: {type: 'Identifier', name: 'm'},
                    property: {type: 'Identifier', name: 'x'},
                    computed: false,
                  },
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
        });
      });

      describe('with arr', _ => {
        test('new inside array', {
          code: '([new x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'NewExpression',
                      arguments: [],
                      callee: {type: 'Identifier', name: 'x'},
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('delete inside array', {
          code: '([delete foo.bar]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'UnaryExpression',
                      operator: 'delete',
                      prefix: true,
                      argument: {
                        type: 'MemberExpression',
                        object: {type: 'Identifier', name: 'foo'},
                        property: {type: 'Identifier', name: 'bar'},
                        computed: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('objlit inside array', {
          code: '([{}]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [{type: 'ObjectExpression', properties: []}],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('division inside array', {
          code: '([a / b]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'BinaryExpression',
                      left: {type: 'Identifier', name: 'a'},
                      operator: '/',
                      right: {type: 'Identifier', name: 'b'},
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('div newline inside array', {
          code: '([a \n/b/g]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'BinaryExpression',
                      left: {
                        type: 'BinaryExpression',
                        left: {type: 'Identifier', name: 'a'},
                        operator: '/',
                        right: {type: 'Identifier', name: 'b'},
                      },
                      operator: '/',
                      right: {type: 'Identifier', name: 'g'},
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('div newline 2 inside array', {
          code: '([a \n/b/]);',
          throws: 'Expected to parse a value',
        });

        test('regex case 1', {
          code: '([delete /a/.x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'UnaryExpression',
                      operator: 'delete',
                      prefix: true,
                      argument: {
                        type: 'MemberExpression',
                        object: {type: 'Literal', value: '<TODO>', raw: '/a/'},
                        property: {type: 'Identifier', name: 'x'},
                        computed: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('regex case 2', {
          code: '([delete /a/g.x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'UnaryExpression',
                      operator: 'delete',
                      prefix: true,
                      argument: {
                        type: 'MemberExpression',
                        object: {type: 'Literal', value: '<TODO>', raw: '/a/g'},
                        property: {type: 'Identifier', name: 'x'},
                        computed: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 1', {
          code: '([foo /=g/m.x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'AssignmentExpression',
                      left: {type: 'Identifier', name: 'foo'},
                      operator: '/=',
                      right: {
                        type: 'BinaryExpression',
                        left: {type: 'Identifier', name: 'g'},
                        operator: '/',
                        right: {
                          type: 'MemberExpression',
                          object: {type: 'Identifier', name: 'm'},
                          property: {type: 'Identifier', name: 'x'},
                          computed: false,
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 2', {
          code: '([void /=g/m.x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'UnaryExpression',
                      operator: 'void',
                      prefix: true,
                      argument: {
                        type: 'MemberExpression',
                        object: {type: 'Literal', value: '<TODO>', raw: '/=g/m'},
                        property: {type: 'Identifier', name: 'x'},
                        computed: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });

        test('first char after ident is unsufficient 3', {
          code: '([void /=/g/m.x]);',
          ast: {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'ArrayExpression',
                  elements: [
                    {
                      type: 'BinaryExpression',
                      left: {
                        type: 'UnaryExpression',
                        operator: 'void',
                        prefix: true,
                        argument: {type: 'Literal', value: '<TODO>', raw: '/=/g'},
                      },
                      operator: '/',
                      right: {
                        type: 'MemberExpression',
                        object: {type: 'Identifier', name: 'm'},
                        property: {type: 'Identifier', name: 'x'},
                        computed: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
          tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $REGEX, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
        });
      });

      test('unary ++ prefix', {
        code: '(++x);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'UpdateExpression',
                operator: '++',
                prefix: true,
                argument: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('sequence of unary ++ prefix', {
        code: '(++x, y);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [
                  {
                    type: 'UpdateExpression',
                    operator: '++',
                    prefix: true,
                    argument: {type: 'Identifier', name: 'x'},
                  },
                  {type: 'Identifier', name: 'y'},
                ],
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('unary -- suffix', {
        code: '(x--);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'UpdateExpression',
                argument: {type: 'Identifier', name: 'x'},
                operator: '--',
                prefix: false,
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
      });

      test('sequence of unary -- suffix', {
        code: '(x--, y);',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'SequenceExpression',
                expressions: [
                  {
                    type: 'UpdateExpression',
                    argument: {type: 'Identifier', name: 'x'},
                    operator: '--',
                    prefix: false,
                  },
                  {type: 'Identifier', name: 'y'},
                ],
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      });

      // (); (empty group is error)
      // (a=1)=2; (grouped assignment is _not_ a valid assignment target) https://tc39.github.io/ecma262/#sec-assignment-operators-static-semantics-isvalidsimpleassignmenttarget
      // assignment to eval and arguments in strict mode should throw (even wrapped)
      // assignment to `yield` and `await` is valid (even wrapped)
      // wrapped reserved words are still a syntax error
      // non-destructible should throw when attempted anyways `([a + b] = x);`, `([a + b] = x) => a;`
    });

    describe('arrow', _ => {
      test('arrow, one arg without parens, expr', {
        code: 'x=>x;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [{type: 'Identifier', name: 'x'}],
                id: null,
                generator: false,
                async: false,
                expression: true,
                body: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      test('arrow, no args, expr', {
        code: '()=>x;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [],
                id: null,
                generator: false,
                async: false,
                expression: true,
                body: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      test('arrow, one arg, expr', {
        code: '(x)=>x;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [{type: 'Identifier', name: 'x'}],
                id: null,
                generator: false,
                async: false,
                expression: true,
                body: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      test('arrow, one arg, block', {
        code: '(x)=>{x}',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [{type: 'Identifier', name: 'x'}],
                id: null,
                generator: false,
                async: false,
                expression: false,
                body: {type: 'BlockStatement', body: [{type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'x'}}]},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI, $PUNCTUATOR, $ASI],
      });

      test('arrow, one arg, block with a regex literal', {
        code: '(x)=>{/x/}',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [{type: 'Identifier', name: 'x'}],
                id: null,
                generator: false,
                async: false,
                expression: false,
                body: {
                  type: 'BlockStatement',
                  body: [{type: 'ExpressionStatement', expression: {type: 'Literal', value: '<TODO>', raw: '/x/'}}],
                },
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $REGEX, $ASI, $PUNCTUATOR, $ASI],
      });

      test('arrow, one arg, expr', {
        code: '(x, y)=>x;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [{type: 'Identifier', name: 'x'}, {type: 'Identifier', name: 'y'}],
                id: null,
                generator: false,
                async: false,
                expression: true,
                body: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      //{ error
      //  code: '((x)) => x;',
      //  ast: {type: 'Program', body: [
      //    {type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'x'}},
      //  ]},
      //  desc: 'silly double group',
      //  tokens: [$PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
      //},
      //{ error
      //  code: '(a, 1, "c", d, e, f) => x;',
      //  ast: {type: 'Program', body: [
      //    {type: 'ExpressionStatement', expression: {type: 'SequenceExpression', expressions: [
      //      {type: 'Identifier', name: 'a'},
      //      {type: 'Literal', value: '<TODO>', raw: '1'},
      //      {type: 'Literal', value: '<TODO>', raw: '"c"'},
      //      {type: 'Identifier', name: 'd'},
      //      {type: 'Identifier', name: 'e'},
      //      {type: 'Identifier', name: 'f'},
      //    ]}},
      //  ]},
      //  desc: 'group of some simple values',
      //  tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $STRING_DOUBLE, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
      //});

      test('group of some two assignments', {
        code: '(a = 1, b = 2) => x;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrowFunctionExpression',
                params: [
                  {
                    type: 'AssignmentPattern',
                    left: {type: 'Identifier', name: 'a'},
                    right: {type: 'Literal', value: '<TODO>', raw: '1'},
                  },
                  {
                    type: 'AssignmentPattern',
                    left: {type: 'Identifier', name: 'b'},
                    right: {type: 'Literal', value: '<TODO>', raw: '2'},
                  },
                ],
                id: null,
                generator: false,
                async: false,
                expression: true,
                body: {type: 'Identifier', name: 'x'},
              },
            },
          ],
        },
        tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      //{ error
      //  code: '(a.b) => x;',
      //  ast: {type: 'Program', body: [
      //    {type: 'ExpressionStatement', expression: {type: 'AssignmentExpression',
      //      left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: false},
      //      operator: '=',
      //      right: {type: 'Literal', value: '<TODO>', raw: '1'},
      //    }},
      //  ]},
      //  desc: 'assignment to a wrapped property, silly but valid',
      //  tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
      //},
      //{ error
      //  code: '(a[b]) => x;',
      //  ast: {type: 'Program', body: [
      //    {type: 'ExpressionStatement', expression: {type: 'AssignmentExpression',
      //      left: {type: 'MemberExpression', object: {type: 'Identifier', name: 'a'}, property: {type: 'Identifier', name: 'b'}, computed: true},
      //      operator: '=',
      //      right: {type: 'Literal', value: '<TODO>', raw: '1'},
      //    }},
      //  ]},
      //  desc: 'assignment to a wrapped property, silly but valid',
      //  tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR],
      //},
      //{ error
      //  code: '/i/ * ()=>j',
      //  ast: {type: 'Program', body: [
      //    {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
      //      left: {type: 'Literal', value: '<TODO>', raw: '/i/'},
      //      operator: '*',
      //      right: {type: 'ArrowFunctionExpression',
      //        params: [],
      //        id: null,
      //      }
      //    }},
      //  ]},
      //  desc: 'this is invalid because you cannot match an arrow (in the grammar) on the rhs of a non-assignment operator',
      //  tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      //}

      test('group of some two assignments', {
        code: 'var a = (b) => c;',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'VariableDeclaration',
              kind: 'var',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  id: {type: 'Identifier', name: 'a'},
                  init: {
                    type: 'ArrowFunctionExpression',
                    params: [{type: 'Identifier', name: 'b'}],
                    id: null,
                    generator: false,
                    async: false,
                    expression: true,
                    body: {type: 'Identifier', name: 'c'},
                  },
                },
              ],
            },
          ],
        },
        tokens: [$IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
      });

      test('arrow inside template disambiguation test 1', {
        code: '`X${a => b}Y`',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'TemplateLiteral',
                expressions: [
                  {
                    type: 'ArrowFunctionExpression',
                    params: [{type: 'Identifier', name: 'a'}],
                    id: null,
                    generator: false,
                    async: false,
                    expression: true,
                    body: {type: 'Identifier', name: 'b'},
                  },
                ],
                quasis: [
                  {type: 'TemplateElement', tail: false, value: {raw: '`X${', cooked: '<TODO>'}},
                  {type: 'TemplateElement', tail: true, value: {raw: '}Y`', cooked: '<TODO>'}},
                ],
              },
            },
          ],
        },
        tokens: [$TICK_HEAD, $IDENT, $PUNCTUATOR, $IDENT, $TICK_TAIL, $ASI],
      });

      test('arrow inside template disambiguation test 1', {
        code: '`X${a => b + c}Y`',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'TemplateLiteral',
                expressions: [
                  {
                    type: 'ArrowFunctionExpression',
                    params: [{type: 'Identifier', name: 'a'}],
                    id: null,
                    generator: false,
                    async: false,
                    expression: true,
                    body: {type: 'BinaryExpression', left: {type: 'Identifier', name: 'b'}, operator: '+', right: {type: 'Identifier', name: 'c'}},
                  },
                ],
                quasis: [
                  {type: 'TemplateElement', tail: false, value: {raw: '`X${', cooked: '<TODO>'}},
                  {type: 'TemplateElement', tail: true, value: {raw: '}Y`', cooked: '<TODO>'}},
                ],
              },
            },
          ],
        },
        tokens: [$TICK_HEAD, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $TICK_TAIL, $ASI],
      });

      test('arrow inside template disambiguation test 2; regular curlies in the arrow', {
        code: '`X${a => b + {}}Y`',
        ast: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'TemplateLiteral',
                expressions: [
                  {
                    type: 'ArrowFunctionExpression',
                    params: [{type: 'Identifier', name: 'a'}],
                    id: null,
                    generator: false,
                    async: false,
                    expression: true,
                    body: {
                      type: 'BinaryExpression',
                      left: {type: 'Identifier', name: 'b'},
                      operator: '+',
                      right: {type: 'ObjectExpression', properties: []},
                    },
                  },
                ],
                quasis: [
                  {type: 'TemplateElement', tail: false, value: {raw: '`X${', cooked: '<TODO>'}},
                  {type: 'TemplateElement', tail: true, value: {raw: '}Y`', cooked: '<TODO>'}},
                ],
              },
            },
          ],
        },
        tokens: [$TICK_HEAD, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $TICK_TAIL, $ASI],
      });

      test('unary ++ prefix', {
        code: '(++x) => x;',
        throws: 'Unable to ASI',
      });

      test('sequence of unary ++ prefix', {
        code: '(++x, y) => x;',
        throws: 'Unable to ASI',
      });

      test('unary -- suffix', {
        code: '(x--) => x;',
        throws: 'not destructible',
      });

      test('sequence of unary -- suffix', {
        code: '(x--, y) => x;',
        throws: 'not destructible',
      });

      describe('regex edge case', _ => {
        describe('with expr', _ => {
          test('sans flag', {
            code: '_ => _\n/foo/',
            throws: 'Expected to parse a value',
            desc: 'the expression becomes a division which fails to parse properly in this case',
            tokens: [],
          });

          test('sans flag', {
            code: '_ => _\n/foo/g',
            ast: {
              type: 'Program',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'ArrowFunctionExpression',
                    params: [{type: 'Identifier', name: '_'}],
                    id: null,
                    generator: false,
                    async: false,
                    expression: true,
                    body: {
                      type: 'BinaryExpression',
                      left: {
                        type: 'BinaryExpression',
                        left: {type: 'Identifier', name: '_'},
                        operator: '/',
                        right: {type: 'Identifier', name: 'foo'},
                      },
                      operator: '/',
                      right: {type: 'Identifier', name: 'g'},
                    },
                  },
                },
              ],
            },
            desc: 'the expression becomes a division which is fine ((_/foo)/g) (make sure tree is correct)',
            tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
          });
        });

        describe('with block', _ => {
          test('division', {
            code: '_ => {}\n/foo',
            ast: {
              type: 'Program',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'ArrowFunctionExpression',
                      params: [{type: 'Identifier', name: '_'}],
                      id: null,
                      generator: false,
                      async: false,
                      expression: false,
                      body: {type: 'BlockStatement', body: []},
                    },
                    operator: '/',
                    right: {type: 'Identifier', name: 'foo'},
                  },
                },
              ],
            },
            desc: `
          this is a prelude to the regex test

            MultiplicativeExpression(
              ExponentiationExpression(
                UnaryExpression(
                  UpdateExpression(
                    LeftHandSideExpression(
                      NewExpression(
                        MemberExpression(
                          MemberExpression(
                            CoverParenthesizedExpressionAndArrowParameterList
            )))))))))
            /
            foo
          `,
            tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
          });

          test('sans flag', {
            code: '_ => {}\n/foo/',
            throws: 'Expected to parse a value',
            desc: `
          The "arrow/foo" bit would parse as follows:

            MultiplicativeExpression(
              ExponentiationExpression(
                UnaryExpression(
                  UpdateExpression(
                    LeftHandSideExpression(
                      NewExpression(
                        MemberExpression(
                          MemberExpression(
                            CoverParenthesizedExpressionAndArrowParameterList
            )))))))))
            /
            foo
            /
            {error} because missing rhs of second divison

            And ASI explicitly fails because next line starts with forward slash (and the block can not parse as division)
          `,
            tokens: [],
          });

          test('sans flag', {
            code: '_ => {}\n/foo/g',
            ast: {
              type: 'Program',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'BinaryExpression',
                      left: {
                        type: 'ArrowFunctionExpression',
                        params: [{type: 'Identifier', name: '_'}],
                        id: null,
                        generator: false,
                        async: false,
                        expression: false,
                        body: {type: 'BlockStatement', body: []},
                      },
                      operator: '/',
                      right: {type: 'Identifier', name: 'foo'},
                    },
                    operator: '/',
                    right: {type: 'Identifier', name: 'g'},
                  },
                },
              ],
            },
            desc: `
          ASI explicitly fails because next line starts with forward slash, in effect the whole arrow is the lhs for the division (((_=>{})/foo)/g)

            MultiplicativeExpression(
              ExponentiationExpression(
                UnaryExpression(
                  UpdateExpression(
                    LeftHandSideExpression(
                      NewExpression(
                        MemberExpression(
                          MemberExpression(
                            CoverParenthesizedExpressionAndArrowParameterList
            )))))))))
            /
            foo
            /
            g
          `,
            tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
          });
        });
      });

      // should error: `a => {} + x` because arrow with block cannot be lhs of binary expression
    });
  });

// arrow params and arrow can not have newline (asi breaks an arrow into group and syntax error)
// cannot have yield or await in the params
// cannot destructure when body contains "use strict"
// cant redeclare existing vars
// `async(a, ...b);` vs `async (a, ...b) => a;`