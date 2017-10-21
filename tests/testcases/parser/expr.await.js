let {
  $ASI,
  $IDENT,
  $NUMBER_DEC,
  $PUNCTUATOR,
} = require('../../../src/zetokenizer');

// https://tc39.github.io/ecma262/#prod-AwaitExpression
// await is parsed as an AwaitExpression when the [Await] parameter is present. The [Await] parameter is present in the following contexts:
//  -  In an AsyncFunctionBody.
//  -  In the FormalParameters of an AsyncFunctionDeclaration and AsyncFunctionExpression. AwaitExpression in this position is a Syntax error via static semantics.
//
//  When Module is the syntactic goal symbol and the [Await] parameter is absent, await is parsed as a keyword and will be a Syntax error.
//  When Script is the syntactic goal symbol, await may be parsed as an identifier when the [Await] parameter is absent. This includes the following contexts:
//  -  Anywhere outside of an AsyncFunctionBody or FormalParameters of an AsyncFunctionDeclaration or AsyncFunctionExpression.
//  -  In the BindingIdentifier of a FunctionExpression or GeneratorExpression.
//
// Note that `async` can have no line terminator between itself and the next token when it declares a function async

module.exports = (describe, test) => describe('await', _ => {

  test('simplest await',{
    code: 'async function f(){ await foo; }',
    ast: {type: 'Program', body: [{type: 'FunctionDeclaration',
      generator: false,
      async: true,
      expression: false,
      id: {type: 'Identifier', name: 'f'},
      params: [],
      body: {
        type: 'BlockStatement',
        body: [{ type: 'ExpressionStatement', expression: {
          type: 'AwaitExpression',
          argument: {type: 'Identifier', name: 'foo'},
        }}],
      },
    }]},
    tokens: [$IDENT, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('nested await',{
    code: 'async function f(){ await await foo; }',
    ast: {type: 'Program', body: [{type: 'FunctionDeclaration',
      generator: false,
      async: true,
      expression: false,
      id: {type: 'Identifier', name: 'f'},
      params: [],
      body: {
        type: 'BlockStatement',
        body: [{ type: 'ExpressionStatement', expression: {
          type: 'AwaitExpression',
          argument: {
            type: 'AwaitExpression',
            argument: {type: 'Identifier', name: 'foo'},
          },
        }}],
      },
    }]},
    tokens: [$IDENT, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('show that the non-keyword is fine here',{
    code: 'awaiting',
    ast: {type: 'Program', body: [
      {type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'awaiting'}},
    ]},
    tokens: [$IDENT, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'await',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {type: 'Identifier', name: 'await'}},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'await()',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {
          type: 'CallExpression',
          callee: {type: 'Identifier', name: 'await'},
          arguments: [],
        }},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $PUNCTUATOR, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'await[x]',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {
          type: 'MemberExpression',
          object: {type: 'Identifier', name: 'await'},
          property: {type: 'Identifier', name: 'x'},
          computed: true,
        }},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'await = 16',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {
          type: 'AssignmentExpression',
          left: {type: 'Identifier', name: 'await'},
          operator: '=',
          right: {type: 'Literal', value: '<TODO>', raw: '16'},
        }},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $NUMBER_DEC, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'await - 25',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {
          type: 'BinaryExpression',
          left: {type: 'Identifier', name: 'await'},
          operator: '-',
          right: {type: 'Literal', value: '<TODO>', raw: '25'},
        }},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $NUMBER_DEC, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'call(await)',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {type: 'CallExpression', callee: {type: 'Identifier', name: 'call'}, arguments: [{type: 'Identifier', name: 'await'}]}},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'call(await())',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {type: 'CallExpression', callee: {type: 'Identifier', name: 'call'}, arguments: [
          {type: 'CallExpression', callee: {type: 'Identifier', name: 'await'}, arguments: []},
        ]}},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'call(await[1])',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {type: 'CallExpression', callee: {type: 'Identifier', name: 'call'}, arguments: [
          {
            type: 'MemberExpression',
            object: {type: 'Identifier', name: 'await'},
            property: {type: 'Literal', value: '<TODO>', raw: '1'},
            computed: true,
          },
        ]}},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $PUNCTUATOR, $ASI],
  });

  test('await is a valid identifier in script mode',{
    code: 'call(await.foo)',
    SCRIPT: {
      ast: {type: 'Program', body: [
        {type: 'ExpressionStatement', expression: {type: 'CallExpression', callee: {type: 'Identifier', name: 'call'}, arguments: [
          {type: 'MemberExpression', object: {type: 'Identifier', name: 'await'}, property: {type: 'Identifier', name: 'foo'}, computed: false},
        ]}},
      ]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $ASI],
  });

  test('dont throw for await as param name in script mode',{
    code: 'function call(await){}',
    SCRIPT: {
      ast: {type: 'Program', body: [{type: 'FunctionDeclaration',
        generator: false,
        async: false,
        expression: false,
        id: {type: 'Identifier', name: 'call'},
        params: [{type: 'Identifier', name: 'await'}],
        body: {type: 'BlockStatement', body: []},
      }]},
    },
    MODULE: {
      throws: 'Await is illegal outside of async body',
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('dont throw for await in param default value if not an actual await expression and in script mode',{
    code: 'function call(foo=await){}',
    SCRIPT: {
      ast: {type: 'Program', body: [{type: 'FunctionDeclaration',
        generator: false,
        async: false,
        expression: false,
        id: {type: 'Identifier', name: 'call'},
        params: [{type: 'AssignmentPattern',
          left: {type: 'Identifier', name: 'foo'},
          right: {type: 'Identifier', name: 'await'}
        }],
        body: {type: 'BlockStatement', body: []},
      }]},
    },
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('can never use await expression as default arg value',{
    code: 'function call(foo=await bar){}',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Next ord should be 41 ())', // it's by far too much effort to proc a nice message here
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('arg with default that is awaitable that is an assignment (tests assignability check of an await expr)',{
    code: 'function call(foo=await bar=10){}',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Next ord should be 41 ())', // it's by far too much effort to proc a nice message here
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('can never use await expression as default arg value (slightly more complex)',{
    code: 'function call(foo= 5 + (await bar())){}',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Next ord should be 41 ())', // it's by far too much effort to proc a nice message here
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $NUMBER_DEC, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('make failing code is inside async function, should still fail for being in parameter head',{
    code: 'async function x(){ function y(s=await foo){}}',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Next ord should be 41 ())', // it's by far too much effort to proc a nice message here
    },
    tokens: [$IDENT, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('the async property is not inherited from parent functions',{
    code: 'async function f(){ let y = x => await x; }',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Unable to ASI',
    },
    tokens: [$IDENT, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR],
  });

  test('using await inside the arg header of a function inside async should always fail',{
    code: 'let f = () => (y=await foo) => y;',
    MODULE: {
      throws: 'Cannot use `await` outside of `async` functions',
    },
    SCRIPT: {
      throws: 'Next ord should be 41 ())', // it's by far too much effort to proc a nice message here
    },
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $PUNCTUATOR],
  });

  test('an arrow can also be async',{
    code: 'let y = async x => await x',
    ast: {type: 'Program', body: [
      {type: 'VariableDeclaration',
        kind: 'let',
        declarations: [{
          type: 'VariableDeclarator',
          id: {type: 'Identifier', name: 'y'},
          init: {
            type: 'ArrowFunctionExpression',
            params: [{type: 'Identifier', name: 'x'}],
            id: null,
            generator: false,
            async: true,
            expression: true,
            body: {
              type: 'AwaitExpression',
              argument: {type: 'Identifier', name: 'x'},
            },
          },
        }],
      },
    ]},
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $ASI],
  });

  test('await in a body of an async arrow',{
    code: 'let y = async x => { await x; }',
    ast: {type: 'Program', body: [
      {type: 'VariableDeclaration',
        kind: 'let',
        declarations: [{
          type: 'VariableDeclarator',
          id: {type: 'Identifier', name: 'y'},
          init: {
            type: 'ArrowFunctionExpression',
            params: [{type: 'Identifier', name: 'x'}],
            id: null,
            generator: false,
            async: true,
            expression: false,
            body: { type: 'BlockStatement', body: [{
              type: 'ExpressionStatement', expression: {
                type: 'AwaitExpression',
                argument: {type: 'Identifier', name: 'x'},
              },
            }]},
          },
        }],
      },
    ]},
    tokens: [$IDENT, $IDENT, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $IDENT, $IDENT, $PUNCTUATOR, $PUNCTUATOR, $ASI],
  });
});