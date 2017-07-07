//import ZeTokenizer, {
let {
  $ASI,
  $EOF,
  $ERROR,
  $IDENT,
  $NUMBER,
  $NUMBER_HEX,
  $NUMBER_DEC,
  $NUMBER_BIN,
  $NUMBER_OCT,
  $NUMBER_OLD,
  $PUNCTUATOR,
  $REGEX,
  $REGEXU,
  $SPACE,
  $STRING,
  $STRING_DOUBLE,
  $STRING_SINGLE,
  $TAB,
  $TICK,
  $TICK_BODY,
  $TICK_HEAD,
  $TICK_PURE,
  $TICK_TAIL,
} = require('../../../src/zetokenizer');
//} from '../../../src/zetokenizer';

let precedents = [
  '  precedent',
  {
    code: 'a + b + c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '+',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '+',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: 'same level +',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a * b + c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '*',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '+',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '* is higher than +',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a + b * c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '+',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '*',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '* is higher than +',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a + b * c * d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '+',
        right: {
          type: 'BinaryExpression',
          left: {
            type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'b'},
            operator: '*',
            right: {type: 'Identifier', name: 'c'},
          },
          operator: '*',
          right: {type: 'Identifier', name: 'd'},
        },
      }},
    ]},
    desc: '* is higher than +',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a * b + c * d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '*',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '+',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'c'},
          operator: '*',
          right: {type: 'Identifier', name: 'd'},
        },
      }},
    ]},
    desc: '* is higher than +',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: '(a * b + c) * d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'a'},
            operator: '*',
            right: {type: 'Identifier', name: 'b'},
          },
          operator: '+',
          right: {type: 'Identifier', name: 'c'},
        },
        operator: '*',
        right: {type: 'Identifier', name: 'd'},
      }},
    ]},
    desc: 'parenthesis override regular precedent (AST doesnt reflect them explicitly)',
    tokens: [$PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a=b+=c-=d**=e*=f/=g%=h<<=i>>=j>>>=k&=l^=m|=n',
    ast: {type: 'Program', body: [{type: 'ExpressionStatement', expression: {
      type: 'AssignmentExpression',
      left: {type: 'Identifier', name: 'a'},
      operator: '=',
      right: {type: 'AssignmentExpression',
        left: {type: 'Identifier', name: 'b'},
        operator: '+=',
        right: {type: 'AssignmentExpression',
          left: {type: 'Identifier', name: 'c'},
          operator: '-=',
          right: {type: 'AssignmentExpression',
            left: {type: 'Identifier', name: 'd'},
            operator: '**=',
            right: {type: 'AssignmentExpression',
              left: {type: 'Identifier', name: 'e'},
              operator: '*=',
              right: {type: 'AssignmentExpression',
                left: {type: 'Identifier', name: 'f'},
                operator: '/=',
                right: {type: 'AssignmentExpression',
                  left: {type: 'Identifier', name: 'g'},
                  operator: '%=',
                  right: {type: 'AssignmentExpression',
                    left: {type: 'Identifier', name: 'h'},
                    operator: '<<=',
                    right: {type: 'AssignmentExpression',
                      left: {type: 'Identifier', name: 'i'},
                      operator: '>>=',
                      right: {type: 'AssignmentExpression',
                        left: {type: 'Identifier', name: 'j'},
                        operator: '>>>=',
                        right: {type: 'AssignmentExpression',
                          left: {type: 'Identifier', name: 'k'},
                          operator: '&=',
                          right: {type: 'AssignmentExpression',
                            left: {type: 'Identifier', name: 'l'},
                            operator: '^=',
                            right: {type: 'AssignmentExpression',
                              left: {type: 'Identifier', name: 'm'},
                              operator: '|=',
                              right: {type: 'Identifier', name: 'n'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }}]},
    desc: 'assignment precedent test 1/2 (should all chain to the right)',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a|=b^=c&=d>>>=e>>=f<<=g%=h/=i*=j**=k-=l+=m=n',
    ast: {type: 'Program', body: [{type: 'ExpressionStatement', expression: {type: 'AssignmentExpression',
      left: {type: 'Identifier', name: 'a'},
      operator: '|=',
      right: {type: 'AssignmentExpression',
        left: {type: 'Identifier', name: 'b'},
        operator: '^=',
        right: {type: 'AssignmentExpression',
          left: {type: 'Identifier', name: 'c'},
          operator: '&=',
          right: {type: 'AssignmentExpression',
            left: {type: 'Identifier', name: 'd'},
            operator: '>>>=',
            right: {type: 'AssignmentExpression',
              left: {type: 'Identifier', name: 'e'},
              operator: '>>=',
              right: {type: 'AssignmentExpression',
                left: {type: 'Identifier', name: 'f'},
                operator: '<<=',
                right: {type: 'AssignmentExpression',
                  left: {type: 'Identifier', name: 'g'},
                  operator: '%=',
                  right: {type: 'AssignmentExpression',
                    left: {type: 'Identifier', name: 'h'},
                    operator: '/=',
                    right: {type: 'AssignmentExpression',
                      left: {type: 'Identifier', name: 'i'},
                      operator: '*=',
                      right: {type: 'AssignmentExpression',
                        left: {type: 'Identifier', name: 'j'},
                        operator: '**=',
                        right: {type: 'AssignmentExpression',
                          left: {type: 'Identifier', name: 'k'},
                          operator: '-=',
                          right: {type: 'AssignmentExpression',
                            left: {type: 'Identifier', name: 'l'},
                            operator: '+=',
                            right: {
                              type: 'AssignmentExpression',
                              left: {type: 'Identifier', name: 'm'},
                              operator: '=',
                              right: {type: 'Identifier', name: 'n'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }}]},
    desc: 'assignment precedent test 2/2 (should all chain to the right)',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a || b || c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {
          type: 'LogicalExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '||',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '||',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '|| should veer to the left',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a && b && c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {
          type: 'LogicalExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '&&',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '&&',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '&& should veer to the left',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a && b || c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {
          type: 'LogicalExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '&&',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '||',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '&& || precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a || b && c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '||',
        right: {
          type: 'LogicalExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '&&',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '&& || precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a | b && c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '|',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '&&',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '&& | precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a && b | c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'LogicalExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '&&',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '|',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '&& | precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a ^ b | c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '^',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '|',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '| ^ precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a | b ^ c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '|',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '^',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '| ^ precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a & b ^ c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '&',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '^',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '^ & precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a ^ b & c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '^',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '&',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '^ & precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a == b & c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '==',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '&',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '& == precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a & b == c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '&',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '==',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '& == precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a == b != c === d !== e',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'BinaryExpression',
              left: {type: 'Identifier', name: 'a'},
              operator: '==',
              right: {type: 'Identifier', name: 'b'},
            },
            operator: '!=',
            right: {type: 'Identifier', name: 'c'},
          },
          operator: '===',
          right: {type: 'Identifier', name: 'd'},
        },
        operator: '!==',
        right: {type: 'Identifier', name: 'e'},
      }},
    ]},
    desc: 'equality precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a !== b === c != d == e',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'BinaryExpression',
              left: {type: 'Identifier', name: 'a'},
              operator: '!==',
              right: {type: 'Identifier', name: 'b'},
            },
            operator: '===',
            right: {type: 'Identifier', name: 'c'},
          },
          operator: '!=',
          right: {type: 'Identifier', name: 'd'},
        },
        operator: '==',
        right: {type: 'Identifier', name: 'e'},
      }},
    ]},
    desc: 'equality precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a == b & c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '==',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '&',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '& == precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a & b == c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '&',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '==',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '& == precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a < b == c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '<',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '==',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '== < precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a == b < c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '==',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '<',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '== < precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a < b <= c > d >= e in f instanceof g',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'BinaryExpression',
              left: {type: 'BinaryExpression',
                left: {type: 'BinaryExpression',
                  left: {type: 'Identifier', name: 'a'},
                  operator: '<',
                  right: {type: 'Identifier', name: 'b'},
                },
                operator: '<=',
                right: {type: 'Identifier', name: 'c'},
              },
              operator: '>',
              right: {type: 'Identifier', name: 'd'},
            },
            operator: '>=',
            right: {type: 'Identifier', name: 'e'},
          },
          operator: 'in',
          right: {type: 'Identifier', name: 'f'},
        },
        operator: 'instanceof',
        right: {type: 'Identifier', name: 'g'},
      }},
    ]},
    desc: 'comparison precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $IDENT, $IDENT, $IDENT, $ASI],
  },
  {
    code: 'a instanceof b in c >= d > e <= f < g',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'BinaryExpression',
              left: {type: 'BinaryExpression',
                left: {type: 'BinaryExpression',
                  left: {type: 'Identifier', name: 'a'},
                  operator: 'instanceof',
                  right: {type: 'Identifier', name: 'b'},
                },
                operator: 'in',
                right: {type: 'Identifier', name: 'c'},
              },
              operator: '>=',
              right: {type: 'Identifier', name: 'd'},
            },
            operator: '>',
            right: {type: 'Identifier', name: 'e'},
          },
          operator: '<=',
          right: {type: 'Identifier', name: 'f'},
        },
        operator: '<',
        right: {type: 'Identifier', name: 'g'},
      }},
    ]},
    desc: 'comparison precedent test 2/2',
    tokens: [$IDENT, $IDENT, $IDENT, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a << b < c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '<<',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '<',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '< << precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a < b << c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '<',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '<<',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '< << precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a << b >> c >>> d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'a'},
            operator: '<<',
            right: {type: 'Identifier', name: 'b'},
          },
          operator: '>>',
          right: {type: 'Identifier', name: 'c'},
        },
        operator: '>>>',
        right: {type: 'Identifier', name: 'd'},
      }},
    ]},
    desc: 'bit shift precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a >>> b >> c << d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'a'},
            operator: '>>>',
            right: {type: 'Identifier', name: 'b'},
          },
          operator: '>>',
          right: {type: 'Identifier', name: 'c'},
        },
        operator: '<<',
        right: {type: 'Identifier', name: 'd'},
      }},
    ]},
    desc: 'comparison precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a + b << c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '+',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '<<',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '<< + precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a << b + c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '<<',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '+',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '<< + precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a + b - c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '+',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '-',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: 'addition/subtraction precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a - b + c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '-',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '+',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: 'addition/subtraction precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a * b + c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '*',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '+',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '+ * precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a + b * c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '+',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '*',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '+ * precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a * b / c % d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'a'},
            operator: '*',
            right: {type: 'Identifier', name: 'b'},
          },
          operator: '/',
          right: {type: 'Identifier', name: 'c'},
        },
        operator: '%',
        right: {type: 'Identifier', name: 'd'},
      }},
    ]},
    desc: 'mul precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a % b / c * d',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'BinaryExpression',
        left: {type: 'BinaryExpression',
          left: {type: 'BinaryExpression',
            left: {type: 'Identifier', name: 'a'},
            operator: '%',
            right: {type: 'Identifier', name: 'b'},
          },
          operator: '/',
          right: {type: 'Identifier', name: 'c'},
        },
        operator: '*',
        right: {type: 'Identifier', name: 'd'},
      }},
    ]},
    desc: 'mul precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a ** b * c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'a'},
          operator: '**',
          right: {type: 'Identifier', name: 'b'},
        },
        operator: '*',
        right: {type: 'Identifier', name: 'c'},
      }},
    ]},
    desc: '* ** precedent test 1/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a * b ** c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '*',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '**',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '* ** precedent test 2/2',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
  {
    code: 'a ** b ** c',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {
        type: 'BinaryExpression',
        left: {type: 'Identifier', name: 'a'},
        operator: '**',
        right: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'b'},
          operator: '**',
          right: {type: 'Identifier', name: 'c'},
        },
      }},
    ]},
    desc: '** right-associative',
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $ASI],
  },
];

module.exports = precedents;