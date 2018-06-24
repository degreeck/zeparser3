//import {
let {
  $$A_61,
  $$A_UC_41,
  $$B_62,
  $$B_UC_42,
  $$C_63,
  $$C_UC_43,
  $$D_64,
  $$D_UC_44,
  $$E_65,
  $$E_UC_45,
  $$F_66,
  $$F_UC_46,
  $$G_67,
  $$G_UC_47,
  $$H_68,
  $$H_UC_48,
  $$I_69,
  $$I_UC_49,
  $$J_6A,
  $$J_UC_4A,
  $$K_6B,
  $$K_UC_4B,
  $$L_6C,
  $$L_UC_4C,
  $$M_6D,
  $$M_UC_4D,
  $$N_6E,
  $$N_UC_4E,
  $$O_6F,
  $$O_UC_4F,
  $$P_70,
  $$P_UC_50,
  $$Q_71,
  $$Q_UC_51,
  $$R_72,
  $$R_UC_52,
  $$S_73,
  $$S_UC_53,
  $$T_74,
  $$T_UC_54,
  $$U_75,
  $$U_UC_55,
  $$V_76,
  $$V_UC_56,
  $$W_77,
  $$W_UC_57,
  $$X_78,
  $$X_UC_58,
  $$Y_79,
  $$Y_UC_59,
  $$Z_7A,
  $$Z_UC_5A,
  $$0_30,
  $$1_31,
  $$2_32,
  $$3_33,
  $$4_34,
  $$5_35,
  $$6_36,
  $$7_37,
  $$8_38,
  $$9_39,

  $$TAB_09,
  $$LF_0A,
  $$VTAB_0B,
  $$FF_0C,
  $$CR_0D,
  $$SPACE_20,
  $$EXCL_21,
  $$DQUOTE_22,
  $$HASH_23,
  $$$_24,
  $$PERCENT_25,
  $$AND_26,
  $$SQUOTE_27,
  $$PAREN_L_28,
  $$PAREN_R_29,
  $$STAR_2A,
  $$PLUS_2B,
  $$COMMA_2C,
  $$DASH_2D,
  $$DOT_2E,
  $$FWDSLASH_2F,
  $$COLON_3A,
  $$SEMI_3B,
  $$LT_3C,
  $$IS_3D,
  $$GT_3E,
  $$QMARK_3F,
  $$SQUARE_L_5B,
  $$BACKSLASH_5C,
  $$SQUARE_R_5D,
  $$XOR_5E,
  $$LODASH_5F,
  $$TICK_60,
  $$CURLY_L_7B,
  $$CURLY_R_7D,
  $$TILDE_7E,
  $$OR_7C,
  $$NBSP_A0,
  $$ZWS_200B,
  $$ZWNJ_200C,
  $$ZWJ_200D,
  $$LS_2029,
  $$PS_2028,
  $$BOM_FEFF,

  ASSERT,
  THROW: _THROW,
} = require('./utils'); // nodejs doesnt support import and wont for a while, it seems (https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
//} from 'utils';

//import ZeTokenizer, {
let { default: ZeTokenizer,
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

  COLLECT_TOKENS_NONE,
  COLLECT_TOKENS_SOLID,
  COLLECT_TOKENS_ALL,

  FAIL_HARD,

  GOAL_MODULE,
  GOAL_SCRIPT,

  LF_CAN_NEW_TARGET,
  LF_FOR_REGEX,
  LF_IN_ASYNC,
  LF_IN_FUNC_ARGS,
  LF_IN_GENERATOR,
  LF_IN_TEMPLATE,
  LF_NO_FLAGS,
  LF_NO_FUNC_DECL,
  LF_NO_YIELD,
  LF_NO_IN,
  LF_STRICT_MODE,
  INITIAL_LEXER_FLAGS,
  LF_DEBUG,

  RETURN_ANY_TOKENS,
  RETURN_SOLID_TOKENS,

  WEB_COMPAT_OFF,
  WEB_COMPAT_ON,

  debug_toktype,
} = require('../src/zetokenizer'); // nodejs doesnt support import and wont for a while, it seems (https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
//} from '../src/zetokenizer';

// <BODY>

const LHS_NOT_PAREN_START = false;
const LHS_WAS_PAREN_START = true;
const NOT_DESTRUCTURING = false;
const WAS_GET = true;
const NOT_GET = false;
const WAS_SET = true;
const NOT_SET = false;
const WAS_ASYNC = true;
const NOT_ASYNC = false;
const WAS_GENERATOR = true;
const NOT_GENERATOR = false;
const WAS_COMPUTED = true;
const NOT_COMPUTED = false;
const CALLED_FROM_WRAPPER = true;
const CONVERT_ASSIGNMENTS_TOO = true;
const DONT_CONVERT_ASSIGNMENTS = false;
const IS_FUNC_DECL = true;
const NOT_FUNC_DECL = false;
const IDENT_OPTIONAL = true;
const IDENT_REQUIRED = false;
const BODY_IS_EXPR = true;
const BODY_IS_BLOCK = false;
const NOT_FUNCEXPR = false;
const IS_ASSIGNABLE = true;
const NOT_ASSIGNABLE = false;
const HAS_STATIC_MODIFIER = true;
const NO_STATIC_MODIFIER = false;
const PARSE_VALUE_MAYBE = true;
const PARSE_VALUE_MUST = false;
const YIELD_WITHOUT_VALUE = 0;
const WITH_ASSIGNABLE = 1;
const WITH_NON_ASSIGNABLE = 2;
const NOT_NEW_TARGET = false;
const CHECK_NEW_TARGET = true;
const IS_ARROW = true;
const NOT_ARROW = false;
const FROM_STATEMENT_START = 1;
const FROM_FOR_HEADER = 2;
const FROM_EXPORT_DECL = 3;
const FROM_FUNC_ARG = 4;
const FROM_CATCH = 5;
const BINDING_TYPE_NONE = 0;
const BINDING_TYPE_ARG = 1;
const BINDING_TYPE_VAR = 2;
const BINDING_TYPE_LET = 3;
const BINDING_TYPE_CONST = 4;
const BINDING_TYPE_CLASS = 5;
const ASSIGNMENT_IS_INIT = true; // var foo = bar;  (not to be parsed by parseBinding
const ASSIGNMENT_IS_DEFAULT = false; // (foo = bar) => foo  (parsed by parseBinding)
const IS_EXPRESSION = true;
const IS_STATEMENT = false;
const IS_NEW_ARG = true;
const NOT_NEW_ARG = false;
const PARSE_DIRECTIVES = true;
const IGNORE_DIRECTIVES = false;
const CANT_DESTRUCT = 0;
const MIGHT_DESTRUCT = 1;
const MUST_DESTRUCT = 2;
const NO_SPREAD = 0;
const LAST_SPREAD = 1;
const MID_SPREAD = 2;
const PARSE_INIT = false;
const SKIP_INIT = true;
const IS_GROUP_TOPLEVEL = true;
const NOT_GROUP_TOPLEVEL = false;

function ZeParser(code, goalMode = GOAL_SCRIPT, collectTokens = COLLECT_TOKENS_NONE, options = {}) {
  let {
    webCompat: options_webCompat = WEB_COMPAT_ON,
    strictMode: options_strictMode = false,
    trailingArgComma: options_trailingArgComma = true, // :love: , es8+
    astRoot: options_astRoot = null,
    tokenStorage: options_tokenStorage = [],
  } = options;

  let tok = ZeTokenizer(code, collectTokens, options_webCompat, FAIL_HARD, options_tokenStorage);

  let prevtok = null;
  let curtok = null;
  let curtype = 0;
  let curc = 0;

  let webModeWarnings = []; // when parsing anything that is only accepted because of annex B in the spec <token, desc>

  let traceast = false;

  function THROW(desc) {
    console.log('\n');
    console.log('Error in parser:', desc);
    console.log('Error token:', curtok);
    tok.throw('Parser error! ' + desc);
  }

  // https://github.com/estree/estree
  // https://github.com/estree/estree/blob/master/es5.md
  // https://github.com/estree/estree/blob/master/es2015.md
  // https://astexplorer.net/
  let _tree = {
    type: 'Program',
  };
  if (options_astRoot) options_astRoot.root = _tree;
  let _path = [_tree];
  let _pnames = ['ROOT'];
  function AST_open(prop, type, fromWrap = false) {
    if (traceast) {
      console.log('AST_open; write type='+type+' to prop=' + prop, fromWrap);
      console.log('- path (before):', _path.map(o => o.type).join(' - '));
      console.log('- AST:', require('util').inspect(_tree, false, null))
    }
    ASSERT(arguments.length === 2 || arguments.length === 3, '2 args');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    let node = _path[_path.length - 1];
    let newnode = {type};
    if (Array.isArray(node[prop])) {
      node[prop].push(newnode);
    } else if (node[prop] === undefined || fromWrap) {
      node[prop] = newnode;
    } else {
      THROW(`AST_open(${prop}, ${type}, ${fromWrap}); bad tree? node[${prop}] should be \`undefined\` but wasnt (child=${node}, prop=${prop}, type=${type}, node[prop]=${node[prop]})`);
    }
    _path.push(newnode);
    _pnames.push(prop);
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');
  }
  function AST_close(names) {
    if (traceast) {
      console.log('AST_close(' + names +'), closing', _path[_path.length-1].type);
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- AST:', require('util').inspect(_tree, false, null))
    }
    ASSERT(arguments.length === 1, 'expecting one arg');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    let was = _path.pop();
    _pnames.pop();
    ASSERT(!names || (typeof names === 'string' && names === was.type) || (names instanceof Array && names.indexOf(was.type) >= 0), 'Expecting to close a node with given name(s), expected: ' + names + ' but closed: ' + was.type)
  }
  function AST_set(prop, value, clobber = false) {
    if (traceast) {
      console.log('AST_set', prop, value);
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- AST:', require('util').inspect(_tree, false, null))
    }
    ASSERT(typeof prop === 'string', 'prop should be string');
    ASSERT(arguments.length === 2 || arguments.length === 3, 'expecting two args');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');
    ASSERT(clobber !== (_path[_path.length - 1][prop] === undefined), 'dont clobber, prop=' + prop + ', val=' + value);// + ',was=' + JSON.stringify(_path[_path.length - 1]));

    _path[_path.length - 1][prop] = value;
  }
  function AST_setIdent(astProp, token) {
    ASSERT(typeof astProp === 'string', 'prop should be an string');
    ASSERT(typeof token === 'object', 'token should be an obj');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    AST_open(astProp, 'Identifier');
    AST_set('name', token.str);
    AST_close('Identifier');
  }
  function AST_setLiteral(astProp, token) {
    ASSERT(typeof astProp === 'string', 'prop is string');
    ASSERT(typeof token === 'object', 'token is obj');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    AST_open(astProp, 'Literal');
    AST_set('value', '<TODO>');
    AST_set('raw', token.str);
    AST_close('Literal');
  }
  function AST_add(prop, value) {
    if (traceast) {
      console.log('ADD', prop, value);
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- AST:', require('util').inspect(_tree, false, null))
    }
    ASSERT(typeof prop === 'string', 'prop should be string');
    ASSERT(arguments.length === 2, 'expecting two args');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');
    ASSERT(Array.isArray(_path[_path.length - 1][prop]), 'expecting to add to an existing array');

    _path[_path.length - 1][prop].push(value);
  }
  function AST_wrapOpened(prop, newNodeType, newProp) {
    if (traceast) {
      console.log('AST_wrapOpened', prop, newNodeType, newProp)
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    // wrap the "current" node (last of _tree) with an extra node
    // so the parent of node becomes the parent of a new node and
    // the old node becomes a child of the new node
    // a(x:b) -> a(x:c(y:b))

    let node = _path.pop();
    _pnames.pop();
    let parent = _path[_path.length-1];

    if (traceast) console.log(' - node to wrap:', node, ', prop:', prop, ', parent:', parent);

    if (Array.isArray(parent[prop])) {
      ASSERT(node === parent[prop][parent[prop].length - 1], 'top should be last element of parent[prop]');
      parent[prop].pop();
    } else {
      ASSERT(node === parent[prop], 'top should be parent[prop]');
    }

    AST_open(prop, newNodeType, CALLED_FROM_WRAPPER);
    // set it as child of new node
    AST_set(newProp, node);
    _path.push(node);
    _pnames.push(newProp);
    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }
  }
  function AST_wrapClosed(prop, newNodeType, newProp) {
    if (traceast) {
      console.log('AST_wrapClosed', prop, newNodeType, newProp)
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths', 'pnames='+_pnames+', path=' + _path.map(p => p.type));

    // wrap the "current" node (last of _tree) with an extra node
    // so the parent of node becomes the parent of a new node and
    // the old node becomes a child of the new node
    // a(x:b) -> a(x:c(y:b))

    let parent = _path[_path.length-1];
    let child = null;
    if (traceast) console.log(' - prop:', prop, ', parent:', parent);

    if (Array.isArray(parent[prop])) {
      child = parent[prop].pop();
    } else {
      child = parent[prop];
    }
    if (traceast) console.log(' - child:', child);
    ASSERT(child, 'AST_wrapClosed('+prop+', '+newNodeType+','+newProp+'); node prop should exist, bad tree?', 'child=', child, 'prop=', prop, 'newProp=', newProp, 'parent[prop]=', parent[prop]);

    AST_open(prop, newNodeType, CALLED_FROM_WRAPPER);
    // set it as child of new node
    // TODO: what if array?
    AST_set(newProp, child);
    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }
  }
  function AST_renameFreshTop(to, from) {
    // note: this should be fine since we only replace a string with another string and no other
    // properties should exist on the object yet so it should not trigger a deopt
    if (traceast) {
      console.log('AST_renameFreshTop', prop, newNodeType, newProp)
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(typeof to === 'string', 'to should be a node name [' + to + ']');
    ASSERT(typeof from === 'string', 'from should be a node name [' + from + ']');

    let node = _path[_path.length-1];
    ASSERT(node, 'top should exist');
    ASSERT(Object.getOwnPropertyNames(node).length === 1, 'expecting only .type to be set');
    ASSERT('type' in node, 'expecting only .type to be set but it was something else');
    ASSERT(node.type === from, 'Expecting to replace ' + from + ' to ' + to + ' but found a ' + node.type);

    _path[_path.length-1].type = to;
  }
  function AST_replaceOpened(newNodeType, oldNodeType) {
    if (traceast) {
      console.log('AST_replaceOpened', oldNodeType, '->', newNodeType);
      console.log('- path:', _pnames.join(' - '));
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(arguments.length === 2, 'expecting 2 args');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    // this is used to replace the current open node with a new node
    // for example: when parsing an ident at the start of a label it may turn out to be a label rather than
    // an expression statement.

    let oldNode = _path.pop(); // "NewExpression", the current leaf node to fully replace
    let parentNode = _path[_path.length - 1];
    let prevProp = _pnames.pop(); // name where oldNode was stored in parentNode (parentNode[prevProp]===oldNode)

    ASSERT(oldNode.type === oldNodeType, 'expecting to replace a certain node (expected=' + oldNodeType + ', found=' + oldNode.type + ')');
    ASSERT((Array.isArray(parentNode[prevProp]) ? parentNode[prevProp][parentNode[prevProp].length-1] : parentNode[prevProp]) === oldNode, 'should be the target node');
    if (Array.isArray(parentNode[prevProp])) parentNode[prevProp].pop(); // the OPEN below will only append if array
    AST_open(prevProp, newNodeType, CALLED_FROM_WRAPPER);

    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }

    return oldNode;
  }
  function AST_replaceClosed(prop, newNodeType, oldNodeType) {
    if (traceast) {
      console.log('AST_replaceClosed;', prop, ':', oldNodeType, '->', newNodeType);
      console.log('- path:', _pnames.join(' - '));
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(arguments.length === 3, 'expecting 3 args');
    ASSERT(typeof prop === 'string', 'prop=string');
    ASSERT(typeof newNodeType === 'string', 'pronewNodeTypep=string');
    ASSERT(typeof oldNodeType === 'string', 'oldNodeType=string');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    // this is used to replace the current open node with a new node
    // for example: when parsing an ident at the start of a label it may turn out to be a label rather than
    // an expression statement.

    let parentNode = _path[_path.length - 1];
    let oldNode = parentNode[prop]; // the node to fully replace
    if (oldNode instanceof Array) oldNode = oldNode.pop();

    ASSERT(oldNode, 'Expected a node on property of top', prop);
    ASSERT(!(oldNode instanceof Array), 'node should not be an array');
    ASSERT(oldNode.type !== undefined, 'Nodes should have a type');
    ASSERT(oldNode.type === oldNodeType, 'expecting to replace a certain node (expected=' + oldNodeType + ', found=' + oldNode.type + ') ' + JSON.stringify(oldNode));
    AST_open(prop, newNodeType, CALLED_FROM_WRAPPER);

    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }

    return oldNode;
  }
  function AST_replaceParent(newNodeType, oldNodeType) {
    if (traceast) {
      console.log('AST_replaceParent', prop, newNodeType, newNodeType)
      console.log('- path:', _pnames.join(' - '));
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    // this is used to replace the parent node with a new node
    // for example: when parsing `new` a `NewExpression` is pushed but when parsing its `callee` when it encounters
    // `.target` it must replace the whole `NewExpression` with a `MetaProperty` node. That's what this does.

    let oldNode = _path.pop(); // "NewExpression", the current leaf node to fully replace
    let parentNode = _path[_path.length - 1];
    let prevProp = _pnames.pop(); // name where oldNode was stored in parentNode (parentNode[prevProp]===oldNode)

    ASSERT(oldNode.type === oldNodeType, 'expecting to replace a certain node');
    ASSERT((Array.isArray(parentNode[prevProp]) ? parentNode[prevProp][parentNode[prevProp].length-1] : parentNode[prevProp]) === oldNode, 'should be the target node');
    if (Array.isArray(parentNode[prevProp])) parentNode[prevProp].pop(); // the OPEN below will only append if array
    AST_open(prevProp, newNodeType, CALLED_FROM_WRAPPER);

    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }

    return oldNode;
  }
  function AST_popOrClear(astProp, expectedType) {
    // remove a node at given astProp (pop one if it's an array, set to undefined otherwise)
    // node that is removed (either way) should be of given type
    if (traceast) {
      console.log('AST_popOrClear', astProp, newNodeType, newNodeType)
      console.log('- path:', _pnames.join(' - '));
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    let parentNode = _path[_path.length - 1];
    let curval = parentNode[astProp];
    ASSERT(curval, 'parent node did not have a value in given prop (probably a bug)');

    if (Array.isArray(curval)) {
      ASSERT(curval.length, 'parent node did not have a value in prop (which was an array) (probably a bug)');
      let node = curval.pop();
      ASSERT(node.type === expectedType, 'type of popped node does not meet expectations');
    } else {
      ASSERT(parentNode[astProp].type === expectedType, 'type of cleared node does not meet expectations');
      parentNode[astProp] = undefined;
    }

    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }
  }
  function AST_wrapClosedIntoArray(prop, value, newProp) {
    if (traceast) {
      console.log('AST_wrapClosed', prop, value, newProp)
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before:', require('util').inspect(_tree, false, null))
    }
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    // same as AST_wrapClosed except the node is put in an array

    let parent = _path[_path.length-1];
    let child = null;
    if (traceast) console.log(' - prop:', prop, ', parent:', parent);

    if (Array.isArray(parent[prop])) {
      child = parent[prop].pop();
    } else {
      child = parent[prop];
    }
    if (traceast) console.log(' - child:', child);
    ASSERT(child, 'should exist, bad tree?', 'child=', child, 'prop=', prop, 'newProp=', newProp, 'parent[prop]=', parent[prop]);

    AST_open(prop, value, CALLED_FROM_WRAPPER);
    // set the node as the first child of the property as an array
    AST_set(newProp, [child]);
    if (traceast) {
      console.log('- tree after:', require('util').inspect(_tree, false, null))
    }
  }
  function AST_destruct(prop) {
    // rename object and array literal nodes to patterns to match the AST spec
    // this happens when arr/obj literal was parsed (possibly nested) and
    // then a destructuring assignment was encountered
    // this is also called for function args and any other destructuring (like catch binding)

    // recursively walk the tree from the prop in open node and visit
    // any array and object expression as well as the left side of assignments
    // for now dont bother with other nodes until we find a reason to

    // note: this function is usually called after a few nodes have closed (the literal struct).

    if (traceast) {
      console.log('AST_destruct', prop)
      console.log('- path:', _path.map(o => o.type).join(' - '));
      console.log('- tree before destruct:', require('util').inspect(_tree, false, null))
    }
    ASSERT(arguments.length === 1, 'arg count');
    ASSERT(_path.length > 0, 'path shouldnt be empty');
    ASSERT(_pnames.length === _path.length, 'pnames should have as many names as paths');

    let node = _path[_path.length-1][prop];
    ASSERT(node, 'top[' + prop + '] should be a node');
    if (Array.isArray(node)) node = node[node.length-1]; // the destruct applies to the node just closed, so last in list

    AST__destruct(node);
    if (traceast) {
      console.log('- tree after destruct:', require('util').inspect(_tree, false, null))
    }
  }
  function AST__destruct(node) {
    if (traceast) {
      console.log('AST__destruct', node);
    }

    ASSERT(arguments.length === 1, 'arg count');

    switch (node.type) {
      case 'ArrayExpression':
        node.type = 'ArrayPattern';
        let elements = node.elements;
        for (let i = 0, n = elements.length; i < n; ++i) {
          let element = elements[i];
          // note: children can be null (elided array destruct) but not undefined
          if (element) AST__destruct(element);
        }
        break;
      case 'ObjectExpression':
        node.type = 'ObjectPattern';
        let properties = node.properties;
        for (let i = 0, n = properties.length; i < n; ++i) {
          ASSERT(properties[i].type === 'Property', 'expecting only properties and assignments here');
          ASSERT(properties[i].value, 'each property should have a value');
          AST__destruct(properties[i].value);
        }
        break;
      case 'AssignmentExpression':
        node.type = 'AssignmentPattern';
        if (node.operator !== '=') THROW('The destruturing assignment should be a regular assignment');
        delete node.operator; // TODO: find a better way, this action probably causes a perf DEOPT
        // walk the left of the assignment only

        AST__destruct(node.left);
        break;
      case 'Property':
        AST__destruct(node.value);
        break;
      case 'SpreadElement':
        // `([...x]);` vs `([...x]) => x`
        node.type = 'RestElement';

        AST__destruct(node.argument);
        break;
    }
  }

  function sansFlag(flags, flag) {
    return (flags | flag) ^ flag;
  }

  function init() {
    do {
      skipRex(sansFlag(INITIAL_LEXER_FLAGS, LF_FOR_REGEX));
      if (curtype === $ERROR) softError();
    } while (curtype === $ERROR);
  }

  function softError() {
    THROW('Tokenizer error: ' + require('util').inspect(curtok, false, null))
  }

  function skipRex(lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a regular expression literal
    ASSERT(arguments.length === 1, 'should get all params', arguments);
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT((lexerFlags & LF_FOR_REGEX) === 0, 'regex flag should not be set anywhere');

    updateToken(tok(lexerFlags | LF_FOR_REGEX, RETURN_SOLID_TOKENS));

    ASSERT(typeof curtype === 'number' && curtype >= 0);
    ASSERT(typeof curc === 'number' && curc >= 0 && curc <= 0x10ffff, 'valid c', JSON.stringify(curtok));
  }
  function skipDiv(lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a division punctuator
    ASSERT(arguments.length === 1, 'should get all params', arguments);
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT((lexerFlags & LF_FOR_REGEX) === 0, 'regex flag should not be set anywhere');

    updateToken(tok(lexerFlags, RETURN_SOLID_TOKENS));

    ASSERT(typeof curtype === 'number' && curtype >= 0);
    ASSERT(typeof curc === 'number' && curc >= 0 && curc <= 0x10ffff, 'valid c', JSON.stringify(curtok));
  }
  function updateToken(token) {
    prevtok = curtok;
    curtok = token;
    curtype = curtok.type;
    curc = curtok.c;
  }
  function skipAny(lexerFlags) {
    skipRex(lexerFlags); // TODO: optimize; in this case the next token is very restricted but at least no slash
    ASSERT(curc !== $$FWDSLASH_2F, 'skip any should not be called when the next char can be fwd slash');
  }

  // <SCRUB ASSERTS>
  function ASSERT_skipRex(what, lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a regular expression literal
    ASSERT(arguments.length === 2, 'should get all params', arguments);
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT(typeof what === 'number' || typeof what === 'string', 'what number/string');
    if (typeof what === 'string') {
      ASSERT(curtok.str === what, 'expecting to skip token with certain value', 'expect:', what, 'actual:', curtok.str);
    } else {
      ASSERT((curtype & what) === what, 'expecting to skip token with certain type', 'expect:'
        // <SCRUB DEV>
        , debug_toktype(what), 'actual:', debug_toktype(curtype)
        // </SCRUB DEV>
      );
    }
    skipRex(lexerFlags);
  }
  function ASSERT_skipDiv(what, lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a division punctuator
    ASSERT(arguments.length === 2, 'should get all params', arguments);
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT(typeof what === 'number' || typeof what === 'string', 'what number/string');
    if (typeof what === 'string') {
      ASSERT(curtok.str === what, 'expecting to skip token with certain value', 'expect:', what, 'actual:', curtok.str);
    } else {
      ASSERT((curtype & what) === what, 'expecting to skip token with certain type', 'expect:'
        // <SCRUB DEV>
        , debug_toktype(what), 'actual:', debug_toktype(curtype)
        // </SCRUB DEV>
      );
    }
    skipDiv(lexerFlags);
  }
  function ASSERT_skipAny(what, lexerFlags) {
    // next token cannot validly start with a forward slash (may be optimizable)
    ASSERT_skipDiv(what, lexerFlags);
    ASSERT(curc !== $$FWDSLASH_2F, 'skip any should not be called when the next char can be fwd slash');
  }
  // </SCRUB ASSERTS>

  function skipRexOrDie(ord, str, lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a regular expression literal
    ASSERT(arguments.length === 3, 'arg count');
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    if (curc !== ord || str !== curtok.str) {
      THROW('Next char should be [' + str + '] but was [' + curtok.str + ']');
    } else {
      skipRex(lexerFlags);
    }
  }
  function skipAnyOrDie(ord, str, lexerFlags) {
    // next token cannot start with forward slash (may be optimizable)
    skipRexOrDie(ord, str, lexerFlags);
    ASSERT(curc !== $$FWDSLASH_2F, 'skip any should not be called when the next char can be fwd slash');
  }
  function skipRexOrDieSingleChar(ord, lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a regular expression literal
    ASSERT(arguments.length === 2, 'arg count');
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    if (curc !== ord || curtok.str.length !== 1) {
      THROW('Next ord should be ' + ord + ' (' + String.fromCharCode(ord) + ') but was ' + curc + ' (curc: `' + String.fromCharCode(curc) + '`, token: `'+curtok.str+'`)');
    } else {
      ASSERT(curtok.str.length === 1, 'should be len=1');
      skipRex(lexerFlags);
    }
  }
  function skipDivOrDieSingleChar(ord, lexerFlags) {
    // skip a token and if the next token starts with a forward slash, search for a division punctuator
    ASSERT(arguments.length === 2, 'arg count');
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    if (curc !== ord) {
      THROW('Next ord should be ' + ord + ' (' + String.fromCharCode(ord) + ') but was ' + curc + ' (curc: `' + String.fromCharCode(curc) + '`, token: `'+curtok.str+'`)');
    } else if (curtok.str.length !== 1) {
      THROW('Next token should be the single char `' + String.fromCharCode(ord) + '` but was `' + curtok.str + '`');
    } else {
      ASSERT(curtok.str.length === 1, 'should be len=1');
      skipDiv(lexerFlags);
    }
  }
  function skipAnyOrDieSingleChar(ord, lexerFlags) {
    // next token cant start with forward slash (may be optimizable)
    skipRexOrDieSingleChar(ord, lexerFlags);
    ASSERT(curc !== $$FWDSLASH_2F, 'skip any should not be called when the next char can be fwd slash');
  }
  function skipRexIf(str, lexerFlags) {
    // if current token matches str, skip to next token
    // in that case if the next token starts with a forward slash, search for a regular expression literal
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT(typeof str === 'string', 'string matches, for now');

    if (curtok.str === str) {
      skipRex(lexerFlags);
      return true;
    }
    return false;
  }
  function skipAnyIf(str, lexerFlags) {
    let x = skipRexIf(str, lexerFlags);
    ASSERT(!x  || curc !== $$FWDSLASH_2F, 'skip any should not be called when the next char can be fwd slash');
    return x;
  }
  function skipIdentSafeAndExpensive(lexerFlags) {
    // skip an IDENT that may be a keyword
    // this can be done efficiently but in destructuring there are too many signals and so this needs to be done before
    // processing the ident for special cases that normally determine whether the next token is a div, regex, or any
    // this check is relatively slow but there's a plan to make these enums, which would improve things
    switch (curtok.str) {
      case 'await':
      case 'delete':
      case 'new':
      case 'typeof':
      case 'void':
      case 'yield':
        // these are the only keywords that wrap expressions which start with regexes
        ASSERT_skipRex($IDENT, lexerFlags);
        break;
      default:
        ASSERT_skipDiv($IDENT, lexerFlags);
    }
  }

  function parseTopLevels(lexerFlags) {
    // <SCRUB AST>
    let len = _path.length;
    let bak = _path.slice(0);
    // </SCRUB AST>
    parseBodyParts(lexerFlags);
    // <SCRUB AST>
    ASSERT(_path.length === len, 'should close all that was opened. Open before: ' + JSON.stringify(bak.map(o=>o.type).join(' > ')) + ', open after: ' + JSON.stringify(_path.map(o=>o.type).join(' > ')));
    // </SCRUB AST>
  }

  function parseBodyParts(lexerFlags) {
    AST_set('body', []);
    _parseBodyPartsWithDirectives(lexerFlags, 'body');
  }

  function parseDirectivePrologues(lexerFlags, astProp) {
    // note: there may be multiple (bogus or valid) directives...
    while ((curtype & $STRING) === $STRING) {
      // we must first parse as usual to confirm this is an isolated string and not
      // something like `''.foo` or `'' + x`. We can't easily scan forward in this
      // case since asi is only applied when the next token would cause a syntax
      // error. There many tokens to check. However this is a fairly cold path since
      // this will almost never happen outside of "use strict" so perhaps a pervasive
      // scan here is not so bad... And let's face it; trivial cases are quickly found.

      let stringToken = curtok;
      ASSERT_skipDiv($STRING, lexerFlags); // statement start means div

      // Remember; this is always the case of a statement that starts with a string and
      // we are checking the next token after that

      if (isDirective()) {
        lexerFlags = parseDirectivePrologue(lexerFlags, stringToken, astProp);
      } else {
        // not ideal but this almost never happens
        _parseFromLiteralStatement(lexerFlags, stringToken, astProp)
      }
    }
    return lexerFlags;
  }
  function parseDirectivePrologue(lexerFlags, stringToken, astProp) {
    AST_open(astProp, 'Directive');
    let dir = stringToken.str.slice(1, -1);
    if (dir === 'use strict') {
      lexerFlags = lexerFlags | LF_STRICT_MODE;
    }
    AST_set('directive', dir);
    AST_close('Directive');
    parseSemiOrAsi(lexerFlags);

    return lexerFlags;
  }

  function isDirective() {
    // scan for simple cases first
    if (curc === $$SEMI_3B || curc === $$CURLY_R_7D) return true;
    if (!curtok.nl) {
      if (curtype === $EOF) return true; // meh. useless in global, leads to an error in any other case. but okay!
      return false; // no chance to ASI
    }
    if (curtok.str === '++' || curtok.str === '--') return false;
    if (curtype !== $PUNCTUATOR) {
      if (curtok.str === 'in' || curtok.str === 'instanceof') {
        return false;
      }
      // considering the current token is a string;
      // only certain punctuators and in/instanceof would be valid
      // tokens next and we checked those so the newline causes ASI
      return true;
    }
    // so there is a newline and the next token is a punctuation.
    // we confirmed the edge cases so just consider ASI not allowed here.
    // TODO: puncs that are invalid here should lead to ASI (and then fail later). How valuable is that level of correctness?
    return false;
  }

  function _parseBodyPartsWithDirectives(lexerFlags, astProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    lexerFlags = parseDirectivePrologues(lexerFlags, 'body');
    while (curtype !== $EOF && curc !== $$CURLY_R_7D) parseBodyPart(lexerFlags, astProp);
  }

  function _parseBodyPartsSansDirectives(lexerFlags, astProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    while (curtype !== $EOF && curc !== $$CURLY_R_7D) parseBodyPart(lexerFlags, astProp);
  }

  function parseStatementHeader(lexerFlags, headProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerflags number');
    skipRexOrDieSingleChar($$PAREN_L_28, lexerFlags);
    parseExpressions(lexerFlags, headProp);
    skipRexOrDieSingleChar($$PAREN_R_29, lexerFlags);
  }

  function parseSemiOrAsi(lexerFlags) {
    // https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion
    // do if:
    // - unable to parse next token and there was a newline between that and the previous token
    // - at eof and the current script is not (yet) valid
    // - when a closing } is encountered
    // - when ++ or -- is encountered and a newline preceded it
    // - when a newline (and no semi) follows a "restricted production" (continue, break, return, throw, yield
    //   (only with assignment). note that throw is always illegal in that case and continue/break may be.)
    // unless (don't if):
    // - the semi would be empty
    // - the next line starts with forward slash
    // - the semi would be part of a for-header
    // TODO: should check whether the next token would be "an error"; especially the newline case makes no such effort :(
    if (curc === $$FWDSLASH_2F) {
      ASSERT(false, 'Tried to apply ASI but next token starts with forward slash. This could be a legit error. Confirm and make sure parser path is properly setting regex/div flag.');
      THROW('Cannot apply ASI when next token starts with forward slash (this could very well be a bug in the parser...)');
    }
    if (curc === $$SEMI_3B) {
      ASSERT_skipRex(';', lexerFlags);
      // note: must check eof/semi as well otherwise the value would be mandatory and parser would throw
    } else if (curc === $$CURLY_R_7D || curtok.nl || curtype === $EOF) {
      tok.asi();
    } else {
      console.log('parse error at curc', curc, String.fromCharCode(curc), curtok.str);
      console.log('current token:', curtok);
      THROW('Unable to ASI' + (((lexerFlags & LF_NO_YIELD) === LF_NO_YIELD) ? ' (note: yield is probably considered a var name here!' : ''));
    }
  }

  function parseNestedBodyPart(lexerFlags, astProp) {
    // nested statements like that of if, while, for, try, etc
    return parseBodyPart(lexerFlags | LF_NO_FUNC_DECL, astProp);
  }

  function parseBodyPart(lexerFlags, astProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT(!(curtype & ($ERROR | $EOF)), 'should not have error or eof at this point');
    switch (getGenericTokenType(curtype)) { // TODO: convert to flag index to have perfect hash in the switch
      case $IDENT:
        parseIdentStatement(lexerFlags, astProp);
        break;
      case $PUNCTUATOR:
        parsePunctuatorStatement(lexerFlags, astProp);
        break;
      case $NUMBER:
        parseFromLiteralStatement(lexerFlags, astProp);
        break;
      case $STRING:
        parseFromLiteralStatement(lexerFlags, astProp);
        break;
      case $TICK:
        parseTickStatement(lexerFlags, astProp);
        break;
      case $REGEX:
        parseFromLiteralStatement(lexerFlags, astProp);
        break;
      default:
        THROW('Unexpected token'
          // <SCRUB DEV>
          + ': ' + debug_toktype(curtype), debug_toktype(getGenericTokenType(curtype))
          // </SCRUB DEV>
          , curtok
        );
    }
  }

  // ### functions

  function parseFunction(lexerFlags, funcDecl, isAsync, optionalIdent, astProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerflags number');

    /*
     function f() {}
     x=function f() {}
     y=function() {}
     o={foo(){}}

     function* f() {}
     x=function* f() {}
     y=function*() {}
     o={*foo(){}}

     async function g(){}
     x=async function g(){}
     x=async function(){}
     o={async foo(){}}
     */
    ASSERT_skipAny('function', lexerFlags);
    let isGenerator = false;
    if (!isAsync && skipAnyIf('*', lexerFlags)) {
      isGenerator = true;
    }
    parseFunctionAfterKeyword(lexerFlags, funcDecl, NOT_FUNCEXPR, isGenerator, isAsync, optionalIdent, astProp);
  }
  function parseFunctionExpression(lexerFlags, isAsync, astProp) {
    let isGenerator = false;
    if (!isAsync && skipAnyIf('*', lexerFlags)) {
      isGenerator = true;
    }
    parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, BODY_IS_BLOCK, isGenerator, isAsync, IDENT_REQUIRED, astProp);
  }
  function parseFunctionAfterKeyword(lexerFlags, isFuncDecl, bodyIsExpr, isGenerator, isAsync, isIdentOptional, astProp) {
    ASSERT(arguments.length === 7, 'arg count');

    AST_open(astProp, isFuncDecl ? 'FunctionDeclaration' : 'FunctionExpression')

    AST_set('generator', isGenerator);
    AST_set('async', isAsync);
    AST_set('expression', bodyIsExpr);

    if (curtype === $IDENT) {
      // TODO: are all functions var bindings? I think so ... should probably confirm this.
      bindingIdentCheck(curtok, BINDING_TYPE_VAR, lexerFlags);
      AST_setIdent('id', curtok);
      ASSERT_skipAny($IDENT, lexerFlags);
    } else if (isFuncDecl && !isIdentOptional) {
      THROW('Function decl missing required ident');
    } else {
      AST_set('id', null);
    }

    // reset the async and generator lexer flags. they don't cross function boundaries
    // make sure the LF_CAN_NEW_TARGET flag is set from here on out, this enables new.target (is allowed in arg default)
    // note: we dont reset the template lexer flag here. instead we do it at any place where we parse curly pairs
    //       this fixes the problem of parsing arrow functions where we can't tell whether the next token is part
    //       of the arrow expression until after parsing and processing that token. that needs curly pair checks.
    lexerFlags = resetLexerFlagsForFunction(lexerFlags, isAsync, isGenerator, NOT_ARROW);

    parseFunctionFromParams(lexerFlags, isFuncDecl ? IS_STATEMENT : IS_EXPRESSION);
    AST_close(isFuncDecl ? 'FunctionDeclaration' : 'FunctionExpression');
  }
  function resetLexerFlagsForFunction(lexerFlags, isAsync, isGenerator, funcType) {
    ASSERT(!isGenerator || !isAsync, 'cant be both generator and async'); // should this be a THROW? don't think so...
    // reset lexer flag states that dont carry accross function boundary
    lexerFlags = sansFlag(lexerFlags, LF_IN_GENERATOR);
    lexerFlags = sansFlag(lexerFlags, LF_IN_ASYNC);
    lexerFlags = sansFlag(lexerFlags, LF_IN_FUNC_ARGS); // not likely to be useful but the right thing to do (tm)
    // dont remove the template flag here! let curly pair structures deal with this individually (fixes arrows)
    if (isGenerator) lexerFlags = lexerFlags | LF_IN_GENERATOR;
    if (isAsync) lexerFlags = lexerFlags | LF_IN_ASYNC;
    if (funcType === NOT_ARROW) lexerFlags = lexerFlags | LF_CAN_NEW_TARGET;
    return lexerFlags;
  }
  function parseFunctionFromParams(lexerFlags, expressionState) {
    parseFuncArguments(lexerFlags);
    parseBlockStatement(lexerFlags, expressionState, PARSE_DIRECTIVES, 'body');
  }
  function parseFuncArguments(lexerFlags) {
    // TODO: await expression inside the params (like default param) of an async function are illegal
    lexerFlags = lexerFlags | LF_IN_FUNC_ARGS; // prevents await expression as default arg
    AST_set('params', []);

    skipRexOrDieSingleChar($$PAREN_L_28, lexerFlags);
    if (curc === $$PAREN_R_29) {
      ASSERT_skipRex(')', lexerFlags);
    } else {
      parseBindings(lexerFlags, BINDING_TYPE_ARG, FROM_FUNC_ARG, ASSIGNMENT_IS_DEFAULT, 'params');
      AST_destruct('params');
      skipAnyOrDieSingleChar($$PAREN_R_29, lexerFlags);
    }
  }

  // ### statements

  function parseIdentStatement(lexerFlags, astProp) {
    // all statement starting keywords;

    // (async), break, class, const, continue, debugger, do, export, for, function, if, import, let, loop, return, switch, throw, try, var, while, with

    switch (curtok.str) {
      case 'await':
        parseAwaitStatement(lexerFlags, astProp);
        break;

      case 'break':
        parseBreakStatement(lexerFlags, astProp);
        break;

      case 'class':
        parseClassDeclaration(lexerFlags, IDENT_REQUIRED, astProp);
        break;

      case 'const':
        parseConstStatement(lexerFlags, astProp);
        break;

      case 'continue':
        parseContinueStatement(lexerFlags, astProp);
        break;

      case 'debugger':
        parseDebuggerStatement(lexerFlags, astProp);
        break;

      case 'do':
        parseDoStatement(lexerFlags, astProp);
        break;

      case 'export':
        parseExportStatement(lexerFlags, astProp);
        break;

      case 'for':
        parseForStatement(lexerFlags, astProp);
        break;

      case 'function':
        if ((lexerFlags & (LF_NO_FUNC_DECL|LF_STRICT_MODE)) === (LF_NO_FUNC_DECL|LF_STRICT_MODE)) THROW('Function statement is illegal in strict mode');
        parseFunction(lexerFlags, IS_FUNC_DECL, NOT_ASYNC, IDENT_REQUIRED, astProp);
        break;

      case 'if':
        parseIfStatement(lexerFlags, astProp);
        break;

      case 'import':
        parseImportDeclaration(lexerFlags, astProp);
        break;

      case 'let':
        parseLetStatement(lexerFlags, astProp);
        break;

      case 'return':
        parseReturnStatement(lexerFlags, astProp);
        break;

      case 'switch':
        parseSwitchStatement(lexerFlags, astProp);
        break;

      case 'throw':
        parseThrowStatement(lexerFlags, astProp);
        break;

      case 'try':
        parseTryStatement(lexerFlags, astProp);
        break;

      case 'var':
        parseVarStatement(lexerFlags, astProp);
        break;

      case 'while':
        parseWhileStatement(lexerFlags, astProp);
        break;

      case 'with':
        parseWithStatement(lexerFlags, astProp);
        break;

      default:
        parseIdentLabelOrExpressionStatement(lexerFlags, astProp);

    }
  }

  function parseFromLiteralStatement(lexerFlags, astProp) {
    let stringToken = curtok;
    skipDiv(lexerFlags); // note: this can be any literal
    _parseFromLiteralStatement(lexerFlags, stringToken, astProp);
  }
  function _parseFromLiteralStatement(lexerFlags, stringToken, astProp) {
    AST_open(astProp, 'ExpressionStatement');
    AST_setLiteral('expression', stringToken);
    parseExpressionAfterLiteral(lexerFlags, 'expression');
    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }

  function parseTickStatement(lexerFlags, astProp) {
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');

    AST_open(astProp, 'ExpressionStatement');
    parseTickExpression(lexerFlags, 'expression');
    parseExpressionAfterLiteral(lexerFlags, 'expression');
    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }

  function parseAsyncStatement(lexerFlags, identToken, astProp) {
    // an async statement is almost the same as an expression but it needs to know whether it was in fact
    // an expression or not so it knows how to apply the statement semi/asi.
    // at this point already verified not to be a label.

    // parsed the `async` keyword (-> identToken), next must be;

    // - async function f(...    (must have name)
    // - async (...) => bar
    // - async foo => bar
    // - async ...            (any use as regular var name)
    //   - note: this will throw a syntax error in MODULE mode
    //   - note: `async()` could not be followed by `=>`
    //   - note: `async in x` is not an async arrow
    //   - note: `async instanceof x` is not an async arrow

    // only the `async function ...` form does NOT require a semi. all other forms do.

    if (curtok.nl) {
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('The `async` keyword cannot be followed by a newline');
      }
      AST_open(astProp, 'ExpressionStatement');
      parseExpressionAfterAsyncAsVarName(lexerFlags, identToken, 'expression');
      AST_close('ExpressionStatement');
      parseSemiOrAsi(lexerFlags);
      return;
    }

    if (curtype === $EOF) {
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('The `async` keyword must be followed by a function');
      }
      AST_open(astProp, 'ExpressionStatement');
      AST_setIdent('expression', identToken);
      AST_close('ExpressionStatement');
      parseSemiOrAsi(lexerFlags);
      return;
    }

    if (curtype === $IDENT) {
      // _probably_ an arrow or function, but must check edge cases
      if (curc === $$F_66 && curtok.str === 'function') {
        parseFunction(lexerFlags, IS_FUNC_DECL, WAS_ASYNC, IDENT_REQUIRED, astProp);
        return NOT_ASSIGNABLE;
      }

      AST_open(astProp, 'ExpressionStatement');
      if (curc === $$I_69 && (curtok.str === 'instanceof' || curtok.str === 'in')) {
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          THROW('The `async` keyword cannot be followed by `in` or `instanceof`');
        }
        parseExpressionAfterAsyncAsVarName(lexerFlags, identToken, 'expression');
      } else {
        AST_open('expression', 'ArrowFunctionExpression');
        AST_set('params', []);
        AST_setIdent('params', curtok);
        ASSERT_skipAny($IDENT, lexerFlags);
        parseArrowFromPunc(lexerFlags, WAS_ASYNC); // TODO: what about postfix? I don't think it's valid anyways but there need to be tests for this either way
        AST_close('ArrowFunctionExpression');
      }
      AST_close('ExpressionStatement');
      parseSemiOrAsi(lexerFlags);
      return NOT_ASSIGNABLE;
    }

    if (curc === $$PAREN_L_28) {
      // `async () => x`
      // `async ()`          (not followed by `=>`)

      // (this function also deals with errors for async-as-varname-in-module-mode)
      AST_open(astProp, 'ExpressionStatement');
      let assignable = parseGroupToplevels(lexerFlags, identToken, 'expression');
      assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
      parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
      AST_close('ExpressionStatement');
      parseSemiOrAsi(lexerFlags);
      return;
    }

    // no function is following `async` so parse it as a regular var name
    if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
      THROW('The `async` keyword must be followed by a function');
    }
    // async as a var name (but since it's a statement it may also be a label...)
    AST_open(astProp, 'ExpressionStatement');
    parseExpressionAfterAsyncAsVarName(lexerFlags, identToken, 'expression');
    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }
  function parseAsyncExpression(lexerFlags, identToken, considerFunctionDeclaration, astProp) {
    // parsed the `async` keyword (-> identToken), next must be;

    // - async function...
    // - async (...) => bar
    // - async foo => bar
    // - async ...            (any use as regular var name)
    //   - note: this will throw a syntax error in MODULE mode
    //   - note: `async()` could not be followed by `=>`
    //   - note: `async in x` is not an async arrow
    //   - note: `async instanceof x` is not an async arrow

    // if this was part of a default export declaration the function should be considered a declaration, not expression
    // however, arrows in a default export declaration are still considered expressions, *shrug*

    // TODO: do we properly disallow async+generator modifier combo?

    if (curtok.nl) {
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('The `async` keyword cannot be followed by a newline');
      }
      // the whole thing _cant_ be an async arrow function now, but it may still be valid
      return parseExpressionAfterAsyncAsVarName2(lexerFlags, identToken, astProp);
    }

    if (curtype === $EOF) {
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('The `async` keyword must be followed by a function');
      }
      return parseExpressionAfterAsyncAsVarName2(lexerFlags, identToken, astProp);
    }

    if (curtype === $IDENT) {
      // _probably_ an arrow or function, but must check edge cases
      if (curc === $$F_66 && curtok.str === 'function') {
        parseFunction(lexerFlags, considerFunctionDeclaration ? IS_FUNC_DECL : NOT_FUNC_DECL, WAS_ASYNC, IDENT_OPTIONAL, astProp);
      } else if (curc === $$I_69 && (curtok.str === 'instanceof' || curtok.str === 'in')) {
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          THROW('The `async` keyword cannot be followed by `in` or `instanceof`');
        }
        return parseExpressionAfterAsyncAsVarName2(lexerFlags, identToken, astProp);
      } else {
        AST_open(astProp, 'ArrowFunctionExpression');
        AST_set('params', []);
        AST_setIdent('params', curtok);
        ASSERT_skipAny($IDENT, lexerFlags);
        parseArrowFromPunc(lexerFlags, WAS_ASYNC);
        AST_close('ArrowFunctionExpression');
      }
      return NOT_ASSIGNABLE;
    }

    if (curc === $$PAREN_L_28) {
      // `async () => x`
      // `async ()`          (not followed by `=>`)
      let assignable = parseGroupToplevels(lexerFlags, identToken, astProp);
      return parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    }

    // no function is following `async` so parse it as a regular var name
    if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
      THROW('The `async` keyword must be followed by a function');
    }
    // async as a var name (already added to the AST)
    return parseExpressionAfterAsyncAsVarName2(lexerFlags, identToken, astProp);
  }

  function parseAwaitStatement(lexerFlags, astProp) {
    let identToken = curtok;

    AST_open(astProp, 'ExpressionStatement');

    if ((lexerFlags & LF_IN_ASYNC) === LF_IN_ASYNC) {
      ASSERT_skipRex('await', lexerFlags);
      // TODO: support cases of await as a var name in SCRIPT mode
      parseAwaitExpression(lexerFlags, identToken, 'expression');
    } else {
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('Cannot use `await` outside of `async` functions');
      }
      ASSERT_skipRex('await', lexerFlags);
      // await as a var name
      parseExpressionAfterAsyncAsVarName(lexerFlags, identToken, 'expression');
    }

    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }

  function parseAwaitExpression(lexerFlags, awaitIdentToken, astProp) {
    // in an awaitable context this must always be considered a keyword. outside of it it should never be considered a keyword

    // TODO: lexerFlags should tell us whether we are currently in an async body. strict mode tells us how to handle "no".
    // TODO: if lexerFlags indicate this is generator code, await is an error
    // TODO: it is an error if goal is Module and await is an identifierreference, bindingidentifier, or labelidentifier

    if ((lexerFlags & LF_IN_ASYNC) === LF_IN_ASYNC) {
      if ((lexerFlags & LF_IN_FUNC_ARGS) === LF_IN_FUNC_ARGS) THROW('Await is illegal as default arg value');
      AST_open(astProp, 'AwaitExpression');
      parseExpression(lexerFlags, 'argument'); // never optional inside async func
      AST_close('AwaitExpression');
      return false; // an await should gobble all assignments so this is not assignable
    } else if ((lexerFlags & LF_IN_GENERATOR) === LF_IN_GENERATOR) {
      THROW('Cannot use `await` in a generator');
    } else if ((lexerFlags & LF_STRICT_MODE) !== LF_STRICT_MODE) {
      // consider `await` a regular var name, not a keyword
      // should throw an error if used as an await anyways
      let assignable = parseAfterVarName(lexerFlags, awaitIdentToken, IS_ASSIGNABLE, astProp);
      assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
      return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
    } else {
      THROW('Cannot use `await` outside of `async` functions');
    }
  }

  function parseBlockStatement(lexerFlags, blockType, parseDirectives, astProp) {
    ASSERT(arguments.length === 4, 'expecting 4 args');
    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');

    let lexerFlagsNoTemplate = sansFlag(lexerFlags, LF_IN_TEMPLATE | LF_NO_FUNC_DECL);

    AST_open(astProp, 'BlockStatement');
    AST_set('body', []);
    ASSERT_skipRex('{', lexerFlagsNoTemplate);
    if (parseDirectives === PARSE_DIRECTIVES) {
      _parseBodyPartsWithDirectives(lexerFlagsNoTemplate, 'body');
    } else {
      ASSERT(parseDirectives === IGNORE_DIRECTIVES, 'should be boolean');
      _parseBodyPartsSansDirectives(lexerFlagsNoTemplate, 'body');
    }
    if (blockType === IS_EXPRESSION) {
      skipDivOrDieSingleChar($$CURLY_R_7D, lexerFlags);
    } else {
      ASSERT(blockType === IS_STATEMENT, 'either expression or not');
      skipRexOrDieSingleChar($$CURLY_R_7D, lexerFlags);
    }
    AST_close('BlockStatement');

    if (curc === $$IS_3D) THROW('A statement can not start with object destructuring assignment (because block)');
  }

  function parseBreakStatement(lexerFlags, astProp) {
    AST_open(astProp, 'BreakStatement');
    // break is only valid inside a breakable, fenced by functions
    ASSERT_skipRex('break', lexerFlags);
    // a break may be followed by another identifier which must then be a valid label.
    // otherwise it's just a break to the nearest breakable (most likely).

    // note: must check eof/semi as well otherwise the value would be mandatory and parser would throw
    if (curtype === $IDENT && !(curtok.nl || curtype === $EOF || curtok.value === ';')) {
      // TODO: validate ident; must be declared label (we can skip reserved name checks assuming that happens at the label declaration)
      AST_setIdent('label', curtok);

      ASSERT_skipRex($IDENT, lexerFlags);
    } else {
      AST_set('label', null);
    }

    parseSemiOrAsi(lexerFlags);
    AST_close('BreakStatement');
  }

  function parseClassDeclaration(lexerFlags, optionalIdent, astProp) {
    // class x {}
    // class x extends <lhs expr> {}
    // class x {;}
    // class x {[static] <method>[]}

    ASSERT_skipAny('class', lexerFlags); // TODO: valid varname, `extends`, or `{`
    AST_open(astProp, 'ClassDeclaration');
    _parseClass(lexerFlags, optionalIdent);
    skipRexOrDieSingleChar($$CURLY_R_7D, lexerFlags);
    AST_close('ClassDeclaration');
  }
  function parseClassExpression(lexerFlags, optionalIdent, astProp) {
    // Note: all class code is always strict mode implicitly
    // x = class x {}
    // x = class x extends <lhs expr> {}
    // x = class x {;}
    // x = class x {[static] <method>[]}

    AST_open(astProp, 'ClassExpression');
    _parseClass(lexerFlags, optionalIdent);
    AST_close('ClassExpression');
    skipDivOrDieSingleChar($$CURLY_R_7D, lexerFlags);
  }
  function _parseClass(lexerFlags, optionalIdent) {
    // Note: all class code is always strict mode implicitly

    lexerFlags = lexerFlags | LF_STRICT_MODE;

    // note: default exports has optional ident but should still not skip `extends` here
    // but it is not a valid class name anyways (which is superseded by a generic keyword check)
    if (curtype === $IDENT && curtok.str !== 'extends') {
      // TODO: should we use binding type const here?
      bindingIdentCheck(curtok, BINDING_TYPE_CLASS, lexerFlags);
      AST_setIdent('id', curtok);
      ASSERT_skipAny($IDENT, lexerFlags);
    } else if (!optionalIdent) {
      THROW('Class decl missing required ident');
    } else {
      AST_set('id', null);
    }

    if (curtype === $IDENT && curtok.str === 'extends') {
      ASSERT_skipRex('extends', lexerFlags);
      parseValue(lexerFlags, 'superClass');
    } else {
      AST_set('superClass', null);
    }

    let lexerFlagsNoTemplate = sansFlag(lexerFlags, LF_IN_TEMPLATE);
    skipRexOrDieSingleChar($$CURLY_L_7B, lexerFlagsNoTemplate);

    // parse method, static method, or emptystatement

    AST_open('body', 'ClassBody');
    AST_set('body', []);
    while (parseClassMethod(lexerFlagsNoTemplate, 'body') === true);
    AST_close('ClassBody');
  }
  function parseClassMethod(lexerFlags) {
    // everything from objlit that is a method optionally prefixed by `static`, and an empty statement
    return _parseClassMethod(lexerFlags, NO_STATIC_MODIFIER);
  }
  function _parseClassMethod(lexerFlags, isStatic) {
    ASSERT(arguments.length === _parseClassMethod.length, 'arg count');

    if (curtype === $IDENT) {
      let identToken = curtok;
      ASSERT_skipAny($IDENT, lexerFlags);
      // getter, setter, async, or ident method
      switch (identToken.str) {
        case 'static':
          if (!isStatic && curc !== $$PAREN_L_28) {
            //class x{static(){}}
            //class x{static static(){}}
            //class x{async static(){}}
            //class x{async static static(){}}
            //class x{*static(){}}
            //class x{static *static(){}}
            return _parseClassMethod(lexerFlags, HAS_STATIC_MODIFIER);
          }
          break; // this is a method named `static` which seems to be okay.
        case 'async':
          if (curtype === $IDENT || curc === $$SQUARE_L_5B) {
            // async method / static async member
            parseMethod(lexerFlags, WAS_ASYNC, NOT_GET, NOT_SET, NOT_GENERATOR, isStatic);
            return true;
          }
          // method named "async"
          break;
        case 'get':
          if (curtype === $IDENT || curc === $$SQUARE_L_5B) {
            // getter function
            parseMethod(lexerFlags, NOT_ASYNC, WAS_GET, NOT_SET, NOT_GENERATOR, isStatic);
            return true;
          }
          // method named "get"
          break;
        case 'set':
          if (curtype === $IDENT || curc === $$SQUARE_L_5B) {
            // setter function
            parseMethod(lexerFlags, NOT_ASYNC, NOT_GET, WAS_SET, NOT_GENERATOR, isStatic);
            return true;
          }
          // method named "set"
          break;
        default:
      }
      parseMethodIdent(lexerFlags, NOT_ASYNC, NOT_GET, NOT_SET, NOT_GENERATOR, isStatic, identToken);
    } else if (curc === $$SQUARE_L_5B) {
      // dynamic property
      parseMethodDynamic(lexerFlags, NOT_ASYNC, NOT_SET, NOT_GET, NOT_GENERATOR, isStatic);
    } else if (curc === $$STAR_2A) {
      // generator method
      ASSERT_skipAny('*', lexerFlags);
      parseMethod(lexerFlags, NOT_ASYNC, NOT_GET, NOT_SET, WAS_GENERATOR, isStatic);
    } else if (curc === $$SEMI_3B) {
      // this empty statement is not part of the AST
      ASSERT_skipAny(';', lexerFlags);
    } else {
      return false;
    }
    return true;
  }

  function parseMethod(lexerFlags, isAsync, isGetter, isSetter, isGenerator, isStatic) {
    ASSERT(arguments.length === parseMethod.length, 'arg count');

    if (curtype === $IDENT) {
      let identToken = curtok;
      ASSERT_skipAny($IDENT, lexerFlags);
      parseMethodIdent(lexerFlags, isAsync, isGetter, isSetter, isGenerator, isStatic, identToken);
    } else if (curc === $$SQUARE_L_5B) {
      parseMethodDynamic(lexerFlags, isAsync, isGetter, isSetter, isGenerator, isStatic)
    } else {
      THROW('Method must have an ident or dynamic name');
    }
  }
  function parseMethodIdent(lexerFlags, isAsync, isGetter, isSetter, isGenerator, isStatic, identToken) {
    ASSERT(arguments.length === parseMethodIdent.length, 'arg count');

    // TODO: validate given ident token value
    AST_open('body', 'MethodDefinition');
    AST_set('static', isStatic);
    AST_set('computed', false);
    AST_set('kind', (!isStatic && identToken.str === 'constructor') ? 'constructor' : isGetter ? 'get' : isSetter ? 'set' : 'method');

    AST_setIdent('key', identToken);

    if (curc !== $$PAREN_L_28) THROW('Missing method arg parens'); // must explicitly check here
    parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, isGenerator, isAsync, IDENT_OPTIONAL, 'value');
    AST_close('MethodDefinition');
  }
  function parseMethodDynamic(lexerFlags, isAsync, isGetter, isSetter, isGenerator, isStatic) {
    ASSERT(arguments.length === parseMethodDynamic.length, 'arg count');

    AST_open('body', 'MethodDefinition');
    AST_set('static', isStatic);
    AST_set('computed', true);
    AST_set('kind', isGetter ? 'get' : isSetter ? 'set' : 'method');
    ASSERT_skipRex('[', lexerFlags);
    parseExpression(lexerFlags, 'key');
    skipAnyOrDieSingleChar($$SQUARE_R_5D, lexerFlags);
    if (curc !== $$PAREN_L_28) THROW('Missing method arg parens'); // must explicitly check here
    parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, isGenerator, isAsync, IDENT_OPTIONAL, 'value');
    AST_close('MethodDefinition');
  }

  function parseConstStatement(lexerFlags, astProp) {
    ASSERT_skipAny('const', lexerFlags); // next is ident, [, or {
    _parseAnyBindingStatement(lexerFlags, BINDING_TYPE_CONST, astProp);
  }

  function parseContinueStatement(lexerFlags, astProp) {
    AST_open(astProp, 'ContinueStatement');
    // continue is only valid inside a loop, fenced by functions
    ASSERT_skipRex('continue', lexerFlags);
    // a continue may be followed by another identifier which must then be a valid label.
    // otherwise it's just a continue to the nearest loop (most likely).

    // note: must check eof/semi as well otherwise the value would be mandatory and parser would throw
    if (curtype === $IDENT && !(curtok.nl || curtype === $EOF || curtok.value === ';')) {
      // TODO: validate ident; must be declared label (we can skip reserved name checks assuming that happens at the label declaration)

      AST_setIdent('label', curtok);

      ASSERT_skipRex($IDENT, lexerFlags);
    } else {
      AST_set('label', null);
    }

    parseSemiOrAsi(lexerFlags);
    AST_close('ContinueStatement');
  }

  function parseDebuggerStatement(lexerFlags, astProp) {
    AST_open(astProp, 'DebuggerStatement');
    AST_close('DebuggerStatement');
    ASSERT_skipRex('debugger', lexerFlags);
    parseSemiOrAsi(lexerFlags);
  }

  function parseDoStatement(lexerFlags, astProp) {
    AST_open(astProp, 'DoWhileStatement');
    ASSERT_skipRex('do', lexerFlags);
    parseNestedBodyPart(lexerFlags, 'body');
    skipAnyOrDie($$W_77, 'while', lexerFlags); // TODO: optimize; next must be (
    parseStatementHeader(lexerFlags, 'test');
    parseSemiOrAsi(lexerFlags);
    AST_close('DoWhileStatement');
  }

  function parseExportStatement(lexerFlags, astProp) {
    // export * FromClause;
    // export ExportClause FromClause;
    // export ExportClause;
    // export VariableStatement
    // export Declaration
    // export default HoistableDeclaration
    // export default ClassDeclaration
    // export default AssignmentExpression

    // export sans default can do; var, let, const, function, async function, function *, class
    // export with default can do: function, async function, function *, class, and any assignment expression
    // note: the regular function, async function, and class may have no name only with `default`

    if (goalMode !== GOAL_MODULE) THROW('The `export` keyword can only be used with the module goal');

    ASSERT_skipAny('export', lexerFlags);

    if (curc === $$D_64 && curtok.str === 'default') {
      AST_open(astProp, 'ExportDefaultDeclaration');
      ASSERT_skipRex('default', lexerFlags);

      if (curtok.str === 'class') {
        // export default class ...
        parseClassDeclaration(lexerFlags, IDENT_OPTIONAL, 'declaration');
      } else if (curc === $$F_66 && curtok.str === 'function') {
        // export default function f(){}
        // export default function* f(){}
        // export default function(){}
        // export default function* (){}
        parseFunction(lexerFlags, IS_FUNC_DECL, NOT_ASYNC, IDENT_OPTIONAL, 'declaration');
      } else if (curc === $$A_61 && curtok.str === 'async') {
        // export default async function f(){}
        // export default async function(){}
        // export default async () => y
        // export default async (x) => y
        // export default async x => y
        let identToken = curtok;
        ASSERT_skipRex('async', lexerFlags);
        // note: can be any expression, function or legacy. default export doesnt care as much
        parseAsyncExpression(lexerFlags, identToken, true, 'declaration');
      } else {
        // any expression is exported as is (but is not a live binding)
        parseExpression(lexerFlags, 'declaration');
      }
      AST_close('ExportDefaultDeclaration');
    } else if (curc === $$STAR_2A) {
      // export * from "x"
      AST_open(astProp, 'ExportAllDeclaration');
      ASSERT_skipAny('*', lexerFlags);
      skipAnyOrDie($$F_66, 'from', lexerFlags);
      AST_setLiteral('source', curtok);
      skipRex(lexerFlags);
      AST_close('ExportAllDeclaration');
    } else {
      AST_open(astProp, 'ExportNamedDeclaration');
      AST_set('specifiers', []);
      if (curc === $$CURLY_L_7B) {
        AST_set('declaration', null);
        // export {}
        // export {} from "x"
        parseExportObject(lexerFlags);
        if (skipAnyIf('from', lexerFlags)) {
          if ((curtype & $STRING) !== $STRING) THROW('Export source must be a string');
          AST_setLiteral('source', curtok);
          skipRex(lexerFlags);
        } else {
          AST_set('source', null);
        }
      } else if (curc === $$V_76 && curtok.str === 'var') {
        // export var <bindings>
        parseAnyVarDecls(lexerFlags, BINDING_TYPE_VAR, FROM_EXPORT_DECL, 'declaration');
        AST_set('source', null);
      } else if (curc === $$L_6C && curtok.str === 'let') {
        // export let <bindings>
        parseAnyVarDecls(lexerFlags, BINDING_TYPE_LET, FROM_EXPORT_DECL, 'declaration');
        AST_set('source', null);
      } else if (curc === $$C_63) {
        if (curtok.str === 'const') {
          // export const <bindings>
          parseAnyVarDecls(lexerFlags, BINDING_TYPE_CONST, FROM_EXPORT_DECL, 'declaration');
        } else if (curtok.str === 'class') {
          // export class ...
          parseClassDeclaration(lexerFlags, IDENT_REQUIRED, 'declaration');
        } else {
          THROW('Unknown export type [' + curtok.str +  ']');
        }
        AST_set('source', null);
      } else if (curc === $$F_66 && curtok.str === 'function') {
        // export function f(){}
        // export function* f(){}
        // (anonymous should not be allowed but parsers seem to do it anyways)
        parseFunction(lexerFlags, IS_FUNC_DECL, NOT_ASYNC, IDENT_REQUIRED, 'declaration');
        AST_set('source', null);
      } else if (curc === $$A_61 && curtok.str === 'async') {
        // export async function f(){}
        // (note: no arrows here because we require a name)
        let identToken = curtok;
        ASSERT_skipAny('async', lexerFlags);

        if (curtok.str !== 'function') {
          THROW('Can only export async functions (not arrows), did not find a function');
        }

        parseFunction(lexerFlags, IS_FUNC_DECL, WAS_ASYNC, IDENT_REQUIRED, 'declaration');
        AST_set('source', null);
      } else {
        THROW('Unknown export type [' + curtok.str +  ']');
      }
      AST_close('ExportNamedDeclaration');
    }

    parseSemiOrAsi(lexerFlags);
  }
  function parseExportObject(lexerFlags) {
    // import {...} from 'x'
    let lexerFlagsNoTemplate = sansFlag(lexerFlags, LF_IN_TEMPLATE);
    ASSERT_skipAny('{', lexerFlagsNoTemplate);
    while (curtype === $IDENT) {
      AST_open('specifiers', 'ExportSpecifier');
      let nameToken = curtok;

      AST_setIdent('local', nameToken);
      skipAny(lexerFlagsNoTemplate);
      if (curtok.str === 'as') {
        ASSERT_skipAny('as', lexerFlagsNoTemplate);
        if (curtype !== $IDENT) THROW('Can only use ident to indicate alias');
        AST_setIdent('exported', curtok);
        skipAny(lexerFlagsNoTemplate);
      } else {
        AST_setIdent('exported', nameToken);
      }
      if (curc === $$COMMA_2C) skipAny(lexerFlagsNoTemplate);
      AST_close('ExportSpecifier');
    }
    skipAnyOrDieSingleChar($$CURLY_R_7D, lexerFlags);
  }

  function parseForStatement(lexerFlags, astProp) {
    /*
     for(Expression ; Expression ; Expression) Statement
     for(var VariableDeclarationList [=init] ; Expression ; Expression) Statement
     for(let VariableDeclarationList [=init] ; Expression ; Expression) Statement
     for(const VariableDeclarationList [=init] ; Expression ; Expression) Statement

     for(LeftHandSideExpression in Expression) Statement
     for(var identOrPattern in Expression) Statement
     for(let identOrPattern in Expression) Statement
     for(const identOrPattern in Expression) Statement

     for(LeftHandSideExpression of AssignmentExpression) Statement
     for(var identOrPattern of Expression) Statement
     for(let identOrPattern of Expression) Statement
     for(const identOrPattern of Expression) Statement
    */
    // we won't know what the for-type is until we get past a semi or `in` or `of`
    // we need to parse for a pseudo-regular expression (without `in` operator)
    // while searching for the marker (in, for, ;) to clarify the for-type.

    // what we can expect
    // - arbitrary expression(s)
    // - var, let, const declaration, possibly multiple, possibly with initializer

    // markers;
    // - semi (-> normal for)
    // - of at operator time (-> for-of)
    // - in at operator time (-> for-in)
    // - var initializer (-> normal for)
    // - more than one var declared (-> normal for)
    // - expression that cannot be a LeftHandSideExpression (-> normal for)

    // basically, parse for a LeftHandSideExpression. then the next token should
    // either be a binary (or even unary) operator (in, of, or anything else) or
    // a semi. we can then proceed parsing down that particular path.

    ASSERT_skipAny('for', lexerFlags); // TODO: optimize; next must be (
    skipRexOrDieSingleChar($$PAREN_L_28, lexerFlags);
    parseForHeader(lexerFlags, astProp);
    skipRexOrDieSingleChar($$PAREN_R_29, lexerFlags);
    parseNestedBodyPart(lexerFlags, 'body');
    AST_close(['ForStatement', 'ForInStatement', 'ForOfStatement']);
  }
  function parseForHeader(lexerFlags, astProp) {
    // TODO: confirm we do this; > It is a Syntax Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
    // first parse a simple expression and check whether it's assignable (var or prop)
    let assignable = false;
    let wasNotDecl = false;
    let emptyInit = false;
    let startedWithParen = false;
    if (curtype === $IDENT) {
      switch (curtok.str) {
        case 'var':
          parseAnyVarDecls(lexerFlags | LF_NO_IN, BINDING_TYPE_VAR, FROM_FOR_HEADER, astProp);
          assignable = true; // i think.
          break;
        case 'let':

          let identToken = curtok;
          ASSERT_skipDiv('let', lexerFlags); // div; if let is varname then next token can be next line statement start and if that starts with forward slash it's a div

          if (curtype === $IDENT || curc === $$SQUARE_L_5B || curc === $$CURLY_L_7B) {
            _parseAnyVarDecls(lexerFlags | LF_NO_IN, BINDING_TYPE_LET, FROM_FOR_HEADER, astProp);
            assignable = true; // decls are assignable
          } else if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
            THROW('Let binding missing binding names');
          } else {
            // backwards compat; treat let as an identifier
            assignable = parseExpressionAfterPlainVarName(lexerFlags, identToken, astProp);
            if (curc === $$COMMA_2C) {
              _parseExpressions(lexerFlags, astProp);
              assignable = false;
            }
          }

          break;
        case 'const':
          parseAnyVarDecls(lexerFlags | LF_NO_IN, BINDING_TYPE_CONST, FROM_FOR_HEADER, astProp);
          assignable = true; // i think.
          break;

        default:
          assignable = parseValueFromIdent(lexerFlags, astProp);
          wasNotDecl = true;
      }
    } else if (curc === $$SEMI_3B) {
      emptyInit = true;
    } else {
      startedWithParen = curc === $$PAREN_L_28;
      assignable = parseValue(lexerFlags | LF_NO_IN, astProp);
      wasNotDecl = true;
    }

    // in all cases either; parse a var, let, const, or assignment expression
    // there can be multiple vars and inits
    // for-in and for-of can only have one var without inits (invalidate after)

    if (curtype === $IDENT) {
      if (curtok.str === 'in') {
        AST_wrapClosed(astProp, 'ForInStatement', 'left');
        if (!assignable) {
          // certain cases were possible in legacy mode
          if (options_webCompat === WEB_COMPAT_ON && (lexerFlags & LF_STRICT_MODE) !== LF_STRICT_MODE) {
            // TODO: do we need to verify these patterns first...? or is any assignment okay here
          } else {
            THROW('Left part of for-in must be assignable');
          }
        }
        ASSERT_skipRex('in', lexerFlags);
        parseExpressions(lexerFlags, 'right');
        return;
      }
      if (curtok.str === 'of') {
        AST_wrapClosed(astProp, 'ForOfStatement', 'left');
        if (!assignable) THROW('Left part of for-of must be assignable');
        ASSERT_skipRex('of', lexerFlags);
        parseExpressions(lexerFlags, 'right');
        return;
      }
      ASSERT(curtok.str === 'instanceof', 'the only other valid identifier here is the instanceof op'); // very unlikely case tho
    }

    if (emptyInit) {
      AST_open(astProp, 'ForStatement');
      AST_set('init', null);
    } else {
      AST_wrapClosed(astProp, 'ForStatement', 'init');
      // we are still in the `init` part of a classic for. keep parsing from the current expression value.
      if (wasNotDecl) parseExpressionFromOp(lexerFlags, assignable, startedWithParen ? LHS_WAS_PAREN_START : LHS_NOT_PAREN_START, 'init');
    }

    let hadComma = curc === $$COMMA_2C;
    if (hadComma) _parseExpressions(lexerFlags, 'init');
    if (curc !== $$SEMI_3B) {
      // note: `x in y` is valid so `for(a,x in y)` will parse up to the `)`. since `of` is not an op it stops at `of`.
      if (hadComma && (curtok.str === 'of' || ')')) THROW('Comma not allowed in left side of `for-in`/`for-of` header');
      // not a comma error; this will throw as we asserted
      skipRexOrDieSingleChar($$SEMI_3B, lexerFlags);
    }
    ASSERT_skipRex(';', lexerFlags);

    if (curc === $$SEMI_3B) {
      AST_set('test', null);
    } else {
      parseExpressions(lexerFlags, 'test');
    }
    skipRexOrDieSingleChar($$SEMI_3B, lexerFlags);
    if (curc === $$PAREN_R_29) {
      AST_set('update', null);
    } else {
      parseExpressions(lexerFlags, 'update');
    }
  }

  function parseIfStatement(lexerFlags, astProp) {
    AST_open(astProp, 'IfStatement');
    ASSERT_skipAny('if', lexerFlags); // TODO: optimize; next must be (
    parseStatementHeader(lexerFlags, 'test');
    parseNestedBodyPart(lexerFlags, 'consequent');
    if (curtype === $IDENT && curtok.str === 'else') {
      ASSERT_skipRex('else', lexerFlags);
      parseNestedBodyPart(lexerFlags, 'alternate');
    } else {
      AST_set('alternate', null);
    }
    AST_close('IfStatement');
  }

  function parseImportDeclaration(lexerFlags, astProp) {
    // https://tc39.github.io/ecma262/#sec-imports
    // import 'x'
    // import * as y from 'x'
    // import x from 'x'
    // import x, * as z from 'x'
    // import {} from 'x'
    // import {a} from 'x'
    // import {a as b} from 'x'
    // import {a,b} from 'x'
    // import {a as c,b} from 'x'
    // import {a,b,} from 'x'
    // import x, {...} from 'x'
    // (cannot create a var named `yield` or `await` or `let` this way)

    if (goalMode !== GOAL_MODULE) THROW('The `import` keyword can only be used with the module goal');

    ASSERT_skipAny('import', lexerFlags);

    AST_open(astProp, 'ImportDeclaration');
    AST_set('specifiers', []);

    if (curtype === $IDENT) {
      parseImportDefault(lexerFlags);
      if (curc === $$COMMA_2C) {
        ASSERT_skipAny(',', lexerFlags);
        if (curc === $$STAR_2A) {
          parseImportNamespace(lexerFlags);
        } else if (curc === $$CURLY_L_7B) {
          parseImportObject(lexerFlags);
        } else {
          THROW('Can only import star or object after default');
        }
      } else {
        if (curtok.str !== 'from') THROW('Missing export source');
        ASSERT_skipAny('from', lexerFlags);
      }
    } else if (curc === $$STAR_2A) {
      parseImportNamespace(lexerFlags);
    } else if (curc === $$CURLY_L_7B) {
      parseImportObject(lexerFlags);
    }

    // `import 'foo'` is valid but otherwise this is an error
    if ((curtype & $STRING) !== $STRING) THROW('Export source must be string');

    AST_setLiteral('source', curtok);
    skipRex(lexerFlags);

    AST_close('ImportDeclaration');
  }
  function parseImportDefault(lexerFlags) {
    // this is the `x`in;
    // import x[ as y][, * as m | , {...}] from 'z'
    AST_open('specifiers', 'ImportDefaultSpecifier');
    AST_setIdent('local', curtok);
    bindingIdentCheck(curtok, BINDING_TYPE_CONST, lexerFlags);
    ASSERT_skipAny($IDENT, lexerFlags); // next must be `as` comma or `from`
    AST_close('ImportDefaultSpecifier');
  }
  function parseImportObject(lexerFlags) {
    // import {...} from 'x'
    let lexerFlagsNoTemplate = sansFlag(lexerFlags, LF_IN_TEMPLATE);
    ASSERT_skipAny('{', lexerFlagsNoTemplate);
    while (curtype === $IDENT) {
      AST_open('specifiers', 'ImportSpecifier');

      let nameToken = curtok;
      AST_setIdent('imported', nameToken);
      skipAny(lexerFlagsNoTemplate);

      if (curtok.str === 'as') {
        ASSERT_skipAny('as', lexerFlagsNoTemplate);
        if (curtype !== $IDENT) THROW('Alias must be an ident');

        AST_setIdent('local', curtok);
        bindingIdentCheck(curtok, BINDING_TYPE_CONST, lexerFlags);
        skipAny(lexerFlagsNoTemplate);
      } else {
        bindingIdentCheck(nameToken, BINDING_TYPE_CONST, lexerFlags);
        AST_setIdent('local', nameToken);
      }

      if (curc === $$COMMA_2C) ASSERT_skipAny(',', lexerFlagsNoTemplate);
      AST_close('ImportSpecifier');
    }
    skipAnyOrDieSingleChar($$CURLY_R_7D, lexerFlagsNoTemplate);

    if (curtok.str !== 'from') THROW('Missing export source');
    ASSERT_skipAny('from', lexerFlags);
  }
  function parseImportNamespace(lexerFlags) {
    // import * as x from 'y'
    ASSERT_skipAny('*', lexerFlags);
    skipAnyOrDie($$A_61, 'as', lexerFlags);

    AST_open('specifiers', 'ImportNamespaceSpecifier');
    AST_setIdent('local', curtok);
    bindingIdentCheck(curtok, BINDING_TYPE_CONST, lexerFlags);
    ASSERT_skipAny($IDENT, lexerFlags); // next must be `as` comma or `from`
    AST_close('ImportNamespaceSpecifier');

    if (curtok.str !== 'from') THROW('Missing export source');
    ASSERT_skipAny('from', lexerFlags);
  }

  function parseLetStatement(lexerFlags, astProp) {
    let identToken = curtok;

    // next token is ident, {, or [ in most cases. It can be . and ( in exceptional
    // cases in sloppy mode. Not sure whether there are other valid cases in es6+.
    // Note that in the case of `let/foo/g` the `/` is always a division, so parse div
    ASSERT_skipDiv('let', lexerFlags); // if let is varname then next token can be next line statement start

    if (curtype === $IDENT || curc === $$SQUARE_L_5B || curc === $$CURLY_L_7B) {
      _parseAnyBindingStatement(lexerFlags, BINDING_TYPE_LET, astProp);
    } else if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
      THROW('Let statement missing binding names');
    } else {
      // backwards compat; treat let as an identifier
      _parseLetAsPlainVarNameExpressionStatement(lexerFlags, identToken, astProp);
    }
  }

  function parseReturnStatement(lexerFlags, astProp) {
    AST_open(astProp, 'ReturnStatement');
    ASSERT_skipRex('return', lexerFlags);

    if (!curtok.nl && curtype !== $EOF && curc !== $$SEMI_3B && curc !== $$CURLY_R_7D) {
      parseExpressions(lexerFlags, 'argument');
    } else {
      AST_set('argument', null);
    }

    parseSemiOrAsi(lexerFlags);

    AST_close('ReturnStatement');
  }

  function parseSwitchStatement(lexerFlags, astProp) {
    AST_open(astProp, 'SwitchStatement');
    ASSERT_skipAny('switch', lexerFlags); // TODO: optimize; next must be (
    parseStatementHeader(lexerFlags, 'discriminant');
    let lexerFlagsNoTemplate = sansFlag(lexerFlags, LF_IN_TEMPLATE);
    skipAnyOrDieSingleChar($$CURLY_L_7B, lexerFlagsNoTemplate); // TODO: optimize; next must be `case` or `default` or `}`
    AST_set('cases', []);
    let hadDefault = false;
    while (true) {
      if (curtok.str === 'case') {
        AST_open('cases', 'SwitchCase');
        ASSERT_skipRex('case', lexerFlagsNoTemplate);
        parseExpressions(lexerFlagsNoTemplate, 'test');
        AST_set('consequent', []);
        if (curc !== $$COLON_3A) THROW('Missing colon after case expr');
        ASSERT_skipRex(':', lexerFlagsNoTemplate);
        while (curtype !== $EOF && curc !== $$CURLY_R_7D && (curtype !== $IDENT || (curtok.str !== 'case' && curtok.str !== 'default'))) {
          parseNestedBodyPart(lexerFlagsNoTemplate, 'consequent');
        }

        AST_close('SwitchCase');
      } else if (curtok.str === 'default') {
        if (hadDefault) THROW('Found second default in same switch');
        AST_open('cases', 'SwitchCase');
        ASSERT_skipAny('default', lexerFlagsNoTemplate); // TODO: optimize; next must be :
        if (curc !== $$COLON_3A) THROW('Missing colon after default');
        ASSERT_skipRex(':', lexerFlagsNoTemplate);
        AST_set('test', null);
        AST_set('consequent', []);
        while (curtype !== $EOF && curc !== $$CURLY_R_7D && (curtype !== $IDENT || (curtok.str !== 'case' && curtok.str !== 'default'))) parseNestedBodyPart(lexerFlagsNoTemplate, 'consequent');
        AST_close('SwitchCase');
      } else {
        break;
      }
    }
    skipRexOrDieSingleChar($$CURLY_R_7D, lexerFlags);
    AST_close('SwitchStatement');
  }

  function parseThrowStatement(lexerFlags, astProp) {
    AST_open(astProp, 'ThrowStatement');
    ASSERT_skipRex('throw', lexerFlags);
    if (curtok.nl) THROW('Premature newline');
    parseExpressions(lexerFlags, 'argument'); // mandatory1
    parseSemiOrAsi(lexerFlags);
    AST_close('ThrowStatement');
  }

  function parseTryStatement(lexerFlags, astProp) {
    AST_open(astProp, 'TryStatement');

    let hasEither = false;

    ASSERT_skipAny('try', lexerFlags); // TODO: optimize; next must be {
    parseBlockStatement(lexerFlags, IS_STATEMENT, IGNORE_DIRECTIVES, 'block');

    if (curc === $$C_63 && curtok.str === 'catch') {
      hasEither = true;
      AST_open('handler', 'CatchClause');
      ASSERT_skipAny('catch', lexerFlags); // TODO: optimize; next must be (
      skipAnyOrDieSingleChar($$PAREN_L_28, lexerFlags); // TODO: optimize; next MUST be one arg (ident/destructuring)

      if (curc === $$PAREN_R_29) THROW('Missing catch clause parameter');
      // catch clause cannot have a default
      // catch clause can be written to, cannot already be declared, so it's like a `let` binding
      parseBinding(lexerFlags, BINDING_TYPE_VAR, FROM_CATCH, ASSIGNMENT_IS_DEFAULT, 'param');
      if (curc === $$COMMA_2C) THROW('Catch clause requires exactly one parameter, not more (and no trailing comma)');
      if (curc === $$IS_3D && curtok.str === '=') THROW('Catch clause parameter does not support default values');
      skipAnyOrDieSingleChar($$PAREN_R_29, lexerFlags); // TODO: optimize; next must be {
      parseBlockStatement(lexerFlags, IS_STATEMENT, IGNORE_DIRECTIVES, 'body');
      AST_close('CatchClause');
    } else {
      AST_set('handler', null);
    }

    if (curc === $$F_66 && curtok.str === 'finally') {
      hasEither = true;
      ASSERT_skipAny('finally', lexerFlags); // TODO: optimize; next must be {
      parseBlockStatement(lexerFlags, IS_STATEMENT, IGNORE_DIRECTIVES, 'finalizer');
    } else {
      AST_set('finalizer', null);
    }

    AST_close('TryStatement');

    if (!hasEither) THROW('Try must have catch or finally');
  }

  function parseVarStatement(lexerFlags, astProp) {
    ASSERT_skipAny('var', lexerFlags); // next is ident, [, or {
    _parseAnyBindingStatement(lexerFlags, BINDING_TYPE_VAR, astProp);
  }

  function parseWhileStatement(lexerFlags, astProp) {
    AST_open(astProp, 'WhileStatement');
    ASSERT_skipAny('while', lexerFlags); // TODO: optimize; next must be (
    parseStatementHeader(lexerFlags, 'test');
    parseNestedBodyPart(lexerFlags, 'body');
    AST_close('WhileStatement');
  }

  function parseIdentLabelOrExpressionStatement(lexerFlags, astProp) {
    ASSERT(curtype === $IDENT, 'should not have consumed the ident yet', debug_toktype(curtype));
    // ok we get a statement
    // the statement starts with an identifier that is not a statement
    // the identifier could potentially be a label (even if that's a sloppy mode only thing we still need to be able to support it)
    // the actual identifier is the deciding factor in what to do when the next character is a forward slash; division or regular expression:
    //  - new: regex
    //  - await/yield: regex
    //  - delete/typeof/void: regex
    //  - class/function/async: error
    //  - true/false/null/this/super: division
    //  - idents determined to be regular var names: division
    //  - (anything else should be added to this list)
    // however, we also need to get the next token to check for the colon to determine the label path

    // note: this node may be replaced by a label node but we can't know that here without backtracking
    let identToken = curtok;

    let assignable = IS_ASSIGNABLE;
    // note: curtok token has been skipped prior to this call.
    let identName = curtok.str;
    switch (identName) {
      case 'async':
        // we deal with async here because it can be a valid label in sloppy mode
        ASSERT_skipAny('async', lexerFlags); // TODO: async can only be followed by `function`, `(`, `:`, or an ident (arrow)
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp, astProp);
        return parseAsyncStatement(lexerFlags, identToken, astProp);

      case 'await':
        THROW('expecting the ident statement path to take this and this not to proc, search for await');
        // FIXME: delete this code, it is dead code.
        // we parse await here because it can be a valid label
        ASSERT_skipRex('await', lexerFlags); // not very likely
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        // in module: only if lexerFlags allow await (inside async code)
        // in script: same as module but also as regular var names (only) outside of async code
        // (await when not a keyword is assignable)
        AST_open(astProp, 'ExpressionStatement');
        parseAwaitExpression(lexerFlags, identToken, 'expression');
        // TODO: what about multiple expressions?
        AST_close('ExpressionStatement');
        parseSemiOrAsi(lexerFlags);
        return;

      case 'delete':
        ASSERT_skipRex('delete', lexerFlags); // not very likely
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseUnary(lexerFlags, identName, astProp);
        break;

      case 'false':
        ASSERT_skipDiv('false', lexerFlags); // not very likely but certainly not regex
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseFalseKeyword(astProp);
        break;

      case 'function':
        ASSERT_skipAny('function', lexerFlags); // TODO: next token is ident or paren
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseFunctionExpression(lexerFlags, NOT_ASYNC, astProp);
        break;

      case 'new':
        ASSERT_skipRex('new', lexerFlags); // not very likely
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        parseNewKeyword(lexerFlags, astProp);
        assignable = NOT_ASSIGNABLE;
        break;

      case 'null':
        ASSERT_skipDiv('null', lexerFlags); // not very likely but certainly not regex
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseNullKeyword(astProp);
        break;

      case 'super':
        ASSERT_skipDiv('super', lexerFlags); // not very likely but certainly not regex
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseSuperKeyword(astProp); // TODO: more checks here for super
        break;

      case 'this':
        ASSERT_skipDiv('this', lexerFlags); // not very likely but certainly not regex
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseThisKeyword(astProp);
        break;

      case 'true':
        ASSERT_skipDiv('true', lexerFlags); // not very likely but certainly not regex
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseTrueKeyword(astProp);
        break;

      case 'typeof':
      case 'void':
        ASSERT_skipRex($IDENT, lexerFlags); // not very likely
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        assignable = parseUnary(lexerFlags, identName, astProp);
        break;

      case 'yield':
        // we catch yield here because it can be a valid label, a varname, and a keyword
        // Note: as quoted from the spec: "The syntactic context immediately following yield requires use of the InputElementRegExpOrTemplateTail lexical goal"
        ASSERT_skipRex('yield', lexerFlags); // not very likely (but there's probably a use case for this)
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';
        // note: `yield` is a var name in sloppy mode _is_ assignable. any other appearance of `yield` is not.
        assignable = parseYieldKeyword(lexerFlags, identToken, astProp);
        break;

      default:
        ASSERT_skipDiv($IDENT, lexerFlags); // regular division
        if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);
        AST_open(astProp, 'ExpressionStatement');
        astProp = 'expression';

        // TODO: verify identifier (note: can be value keywords depending on next token being an arrow)
        // note: the verification is limited in scope since many keywords are already checked before getting here
        //bindingIdentCheck(identName, lexerFlags, BINDING_TYPE_NONE);

        if (identName === 'arguments' || identName === 'eval') {
          assignable = verifyEvalArgumentsVar(lexerFlags);
        }

        assignable = parseAfterVarName(lexerFlags, identToken, assignable, astProp);
        // assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
        // return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
    }

    ASSERT(_path[_path.length-1].type === 'ExpressionStatement', 'at this point the AST has ExpressionStatement open');
    ASSERT(astProp === 'expression', 'each case in the switch should only break if it is an ExpressionStatement and it should leave astProp to expression');

    ASSERT(assignable === IS_ASSIGNABLE || assignable === NOT_ASSIGNABLE, 'asssignable should be updated properly [' + assignable + ']');

    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    // TODO: check for ++/-- here? because that is probably invalid?

    parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);

    if (curc === $$COMMA_2C) {
      _parseExpressions(lexerFlags, 'expression');
    }
    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }
  function parseLabeledStatementInstead(lexerFlags, identToken, astProp) {
    //TODO_MUST_REPLACE_STATEMENT_NODE_IN_AST_WITH_LABEL
    if (identToken.str === 'async' && (lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
      THROW('The `async` keyword cannot be used as a label');
    }
    if (identToken.str === 'yield' && ((lexerFlags & LF_IN_GENERATOR) === LF_IN_GENERATOR || (lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE)) {
      THROW('The `yield` keyword cannot be used as a label in strict mode or in a generator');
    }
    AST_open(astProp, 'LabeledStatement');
    AST_setIdent('label', identToken);
    ASSERT_skipRex(':', lexerFlags);
    parseNestedBodyPart(lexerFlags, 'body');
    AST_close('LabeledStatement');
  }
  function _parseLetAsPlainVarNameExpressionStatement(lexerFlags, identToken, astProp) {
    ASSERT(identToken.str === 'let', 'should pass on the let token');
    ASSERT(curtype !== $IDENT && curc !== $$SQUARE_L_5B && curc !== $$CURLY_L_7B, 'should already have validated that this isnt a let binding');
    if (curtype === $EOF) {
      // TODO: assert sloppy mode
      AST_open(astProp, 'ExpressionStatement');
      AST_setIdent('expression', identToken);
      AST_close('ExpressionStatement');
    } else {
      if (curc === $$COLON_3A) return parseLabeledStatementInstead(lexerFlags, identToken, astProp);

      AST_open(astProp, 'ExpressionStatement');
      parseExpressionAfterPlainVarName(lexerFlags, identToken, 'expression');
      if (curc === $$COMMA_2C) {
        _parseExpressions(lexerFlags, 'expression');
      }
      AST_close('ExpressionStatement');
    }
    parseSemiOrAsi(lexerFlags);
  }

  function parsePunctuatorStatement(lexerFlags, astProp) {
    switch (curc) {
      case $$CURLY_L_7B:
        parseBlockStatement(lexerFlags, IS_STATEMENT, IGNORE_DIRECTIVES, astProp);
        break;
      case $$SEMI_3B:
        parseEmptyStatement(lexerFlags, astProp);
        break;
      case $$PLUS_2B:
      case $$DASH_2D:
        if (curtok.str.charCodeAt(1) === curc) {
          // '++' and '--'
          // circumvents restricted production checks at start of statement by doing it here
          parseIncDecStatement(lexerFlags, astProp);
          return;
        }
        // fall-through
      default:
        AST_open(astProp, 'ExpressionStatement');
        parseExpression(lexerFlags, 'expression');
        AST_close('ExpressionStatement');
        parseSemiOrAsi(lexerFlags);
    }
  }

  function parseIncDecStatement(lexerFlags, astProp) {
    // TODO: for all --/++ confirm we properly do > It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
    AST_open(astProp, 'ExpressionStatement');
    AST_open('expression', 'UpdateExpression');
    AST_set('operator', curtok.str);
    ASSERT_skipRex(curc === $$PLUS_2B ? '++' : '--', lexerFlags); // TODO: optimize; next most likely a varname
    AST_set('prefix', true);
    let assignable = parseValueHeadBody(lexerFlags, PARSE_VALUE_MUST, NOT_NEW_TARGET, 'argument');
    if (assignable === NOT_ASSIGNABLE) THROW('Cannot inc/dec a non-assignable value');
    AST_close('UpdateExpression');
    AST_close('ExpressionStatement');
    parseSemiOrAsi(lexerFlags);
  }

  function parseEmptyStatement(lexerFlags, astProp) {
    AST_open(astProp, 'EmptyStatement');
    ASSERT_skipRex(';', lexerFlags);
    AST_close('EmptyStatement');
  }

  function parseWithStatement(lexerFlags, astProp) {
    if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) THROW('The `with` statement is not allowed in strict mode');

    AST_open(astProp, 'WithStatement');
    ASSERT_skipAny('with', lexerFlags); // TODO: optimize; next must be (
    parseStatementHeader(lexerFlags, 'object');
    parseNestedBodyPart(lexerFlags, 'body');
    AST_close('WithStatement');
  }

  function _parseAnyBindingStatement(lexerFlags, kind, astProp) {
    ASSERT(typeof kind === 'number', 'kind is an enum');
    ASSERT(curtype === $IDENT || curc === $$SQUARE_L_5B || curc === $$CURLY_L_7B, 'keyword already consumed');
    // note: the `let` statement may turn out to be a regular expression statement with `let` being a var name
    // in that case an expression statement is parsed, which may still also be a labeled statement. Either will
    // lead to the semi already being parsed so we want to skip that here to prevent double checks (and tokens).
    ASSERT(kind === BINDING_TYPE_VAR || kind === BINDING_TYPE_LET || kind === BINDING_TYPE_CONST, 'only three kinds here');
    _parseAnyVarDecls(lexerFlags, kind, FROM_STATEMENT_START, astProp);
    parseSemiOrAsi(lexerFlags);
  }
  function parseAnyVarDecls(lexerFlags, kind, from, astProp) {
    // var, let, const. apply additional checks for let/const.
    ASSERT(kind === BINDING_TYPE_VAR || kind === BINDING_TYPE_LET || kind === BINDING_TYPE_CONST, 'only three kinds here');
    ASSERT_skipAny(kind === BINDING_TYPE_VAR ? 'var' : kind === BINDING_TYPE_LET ? 'let' : 'const', lexerFlags); // TODO: optimize; next must be ident or destructuring [{ (even when keyword=let)
    return _parseAnyVarDecls(lexerFlags, kind, from, astProp);
  }
  function _parseAnyVarDecls(lexerFlags, kind, from, astProp) {
    ASSERT(kind === BINDING_TYPE_VAR || kind === BINDING_TYPE_LET || kind === BINDING_TYPE_CONST, 'only three kinds here');
    let keyword = kind === BINDING_TYPE_VAR ? 'var' : kind === BINDING_TYPE_LET ? 'let' : 'const';

    AST_open(astProp, 'VariableDeclaration');
    AST_set('kind', keyword);
    AST_set('declarations', []);

    parseBindings(lexerFlags, kind, from, ASSIGNMENT_IS_INIT, 'declarations');
    AST_close(['VariableDeclaration', 'ExpressionStatement']); //  expr in case of `let` in sloppy
  }

  function parseBindings(lexerFlags, bindingType, bindingOrigin, defaultOptions, astProp) {
    ASSERT(arguments.length === 5, 'expecting 5 args');
    ASSERT(typeof bindingType === 'number', 'bindingType should be enum');
    ASSERT(typeof bindingOrigin === 'number', 'bindingOrigin should be enum');
    // TODO: if bindingType=let then also consider it could be a var name
    let many = 0;
    let inited = false;
    let startWasObjectOrArray = curc === $$SQUARE_L_5B || curc === $$CURLY_L_7B;
    let wasRest = false;
    do {
      ++many;
      wasRest = curc === $$DOT_2E && curtok.str === '...';
      // ident or destructuring of object/array or rest arg
      if (parseBinding(lexerFlags, bindingType, bindingOrigin, defaultOptions, astProp)) inited = true;
      if (wasRest) {
        ASSERT(curc === $$PAREN_R_29, 'the "rest is last and no init" check should happen elsewhere and before this point');
        break;
      }
      if (curc !== $$COMMA_2C) break;
      ASSERT_skipAny(',', lexerFlags); // TODO: next must be ident or comma or [ or { or .
    } while (true);

    if (bindingOrigin === FROM_FOR_HEADER && (curtok.str === 'in' || curtok.str === 'of')) {
      // binding inits are ONLY okay when;
      // - sloppy mode
      // - web-compat mode
      // - regular var names
      // - for-in statements
      // - `var` binding
      if (startWasObjectOrArray || curtok.str === 'of' || bindingType !== BINDING_TYPE_VAR || options_webCompat === WEB_COMPAT_OFF || (lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        if (many > 1) {
          THROW('For-in and for-of can only have one binding, found ' + many);
        } else if (inited) {
          THROW('For-in and for-of binding can not have an init');
        }
      }
    }
  }
  function parseBinding(lexerFlags, bindingType, bindingOrigin, defaultsOption, astProp) {
    // returns whether a binding had an init (necessary to validate for-header bindings)
    ASSERT(arguments.length === 5, 'expecting 5 args');
    // note: a "binding pattern" means a var/let/const var declaration with name or destructuring pattern

    // TODO: legacy `let` as a var name support

    let mustHaveInit = false;

    if (curtype === $IDENT) {
      // normal
      bindingIdentCheck(curtok, bindingType, lexerFlags);
      AST_setIdent(astProp, curtok);
      ASSERT_skipRex($IDENT, lexerFlags); // note: if this is the end of the var decl and there is no semi the next line can start with a regex
    }
    else if (curc === $$CURLY_L_7B) {
      let destructible = parseObjectLiteralPattern(lexerFlags, bindingType, SKIP_INIT, astProp);
      if (destructible === CANT_DESTRUCT) THROW('Could not destructure the declaration');
      AST_destruct(astProp);
      // note: throw for `const {};` and `for (const {};;);` but not `for (const {} in obj);`
      if (
        (bindingOrigin !== FROM_CATCH) &&
        (bindingOrigin !== FROM_FOR_HEADER || (curtok.str !== 'in' && curtok.str !== 'of')) &&
        (bindingType === BINDING_TYPE_CONST || bindingType === BINDING_TYPE_LET || bindingType === BINDING_TYPE_VAR)
      ) {
        mustHaveInit = true;
      }
    }
    else if (curc === $$SQUARE_L_5B) {
      let destructible = parseArrayLiteralPattern(lexerFlags, bindingType, SKIP_INIT, astProp);
      if (destructible === CANT_DESTRUCT) THROW('Could not destructure the declaration');
      AST_destruct(astProp);
      // note: throw for `const {};` and `for (const {};;);` but not `for (const {} in obj);`
      if (
        (bindingOrigin !== FROM_CATCH) &&
        (bindingOrigin !== FROM_FOR_HEADER || (curtok.str !== 'in' && curtok.str !== 'of')) &&
        (bindingType === BINDING_TYPE_CONST || bindingType === BINDING_TYPE_LET || bindingType === BINDING_TYPE_VAR)
      ) {
        mustHaveInit = true;
      }
    }
    else if (curc === $$DOT_2E && curtok.str === '...') {
      if (bindingType !== BINDING_TYPE_ARG) TODO; // error...? if this is legal verify the paren passed on in the next call

      let subDestruct = parseArrowableSpreadOrRest(lexerFlags, $$PAREN_R_29, bindingType, IS_GROUP_TOPLEVEL, undefined, astProp);
      if (curc === $$COMMA_2C) updateDestructible(subDestruct, CANT_DESTRUCT);
    }
    else if (curc === $$PAREN_R_29) {
      if (!options_trailingArgComma) {
        THROW('Trailing function argument comma is not enabled');
      }
    }
    else {
      THROW('Expected to parse a(nother) binding but none was found');
    }

    // this is only relevant to validate bindings in a for-header, irrelevant while destructuring
    let hadInit = false;
    // arg defaults
    if (curc === $$IS_3D && curtok.str === '=') {
      if (defaultsOption === ASSIGNMENT_IS_DEFAULT) {
        if (bindingOrigin === FROM_CATCH) THROW('The catch clause cannot have a default');
        AST_wrapClosed(astProp, 'AssignmentPattern', 'left');
        ASSERT_skipRex($PUNCTUATOR, lexerFlags);
        parseExpression(lexerFlags, 'right');
        AST_close('AssignmentPattern');
      } else {
        hadInit = true;
        ASSERT(bindingOrigin !== FROM_CATCH, 'catch is default');
        ASSERT(defaultsOption === ASSIGNMENT_IS_INIT, 'two options');
        AST_wrapClosed('declarations', 'VariableDeclarator', 'id');
        ASSERT_skipRex($PUNCTUATOR, lexerFlags);
        parseExpression(lexerFlags, 'init');
        AST_close('VariableDeclarator');
      }
    }
    else if (mustHaveInit) {
      THROW('Declaration destructuring must have init');
    }
    else if (defaultsOption === ASSIGNMENT_IS_INIT) {
      AST_wrapClosed('declarations', 'VariableDeclarator', 'id');
      AST_set('init', null);
      AST_close('VariableDeclarator');
    }

    return hadInit;
  }

  function bindingIdentCheck(identToken, bindingKind, lexerFlags) {
    ASSERT(identToken.type === $IDENT, 'ident check on ident tokens ok');
    let str = _bindingIdentCheck(identToken, bindingKind, lexerFlags);
    if (str !== '') THROW(`Cannot use this name (${identToken.str}) as a variable name because: ${str}`);
  }
  function _bindingIdentCheck(identToken, bindingKind, lexerFlags) {
    ASSERT(typeof bindingKind === 'number', 'the binding should be an enum');
    ASSERT(arguments.length === 3, 'expecting 3 args');

    // TODO: this check can be drastically improved.
    // note that any match here is usually an error (but not always, like strict mode or context specific stuff), but usually anyways
    switch (identToken.str) {
      // keywords
      case 'break':
      case 'case':
      case 'catch':
      case 'class':
      case 'const':
      case 'continue':
      case 'debugger':
      case 'default':
      case 'delete':
      case 'do':
      case 'else':
      case 'export':
      case 'extends':
      case 'finally':
      case 'for':
      case 'function':
      case 'if':
      case 'import':
      case 'in':
      case 'instanceof':
      case 'new':
      case 'return':
      case 'super':
      case 'switch':
      case 'this':
      case 'throw':
      case 'try':
      case 'typeof':
      case 'var':
      case 'void':
      case 'while':
      case 'with':
      // null / boolean
      case 'null':
      case 'true':
      case 'false':
      // future reserved keyword:
      case 'enum':
        return 'Cannot never use this reserved word as a variable name';

      // strict mode keywords
      case 'let':
        if (bindingKind !== BINDING_TYPE_VAR) {
          if (bindingKind === BINDING_TYPE_CLASS) return 'Can not use `let` as a class name';
          else return 'Can not use `let` when binding through `let` or `const`';
        }
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) return 'Can not use `let` as var name in strict mode';
        break;
      case 'static':
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          return 'Cannot use this reserved word as a variable name in strict mode';
        }
        break;

      // `eval` and `arguments` edge case paths
      case 'eval':
      case 'arguments':
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          return 'Cannot create a binding named `eval` in strict mode';
        }
        if (bindingKind === BINDING_TYPE_LET || bindingKind === BINDING_TYPE_CONST) {
          return 'Cannot use `eval`/`arguments` as `let`/`const` name';
        }
        break;

      // strict mode only future reserved keyword:
      case 'implements':
      case 'package':
      case 'protected':
      case 'interface':
      case 'private':
      case 'public':
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          // slow path
          if (identToken.str === 'eval' || identToken.str === 'arguments') {
            return 'Cannot create a binding named `eval` in strict mode';
          }
          return 'Cannot use this reserved word as a variable name in strict mode';
        }
        break;

      // conditional keywords (strict mode or context)
      case 'await':
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          return 'Await is illegal outside of async body';
        } else {
          // in sloppy mode you cant use it inside an async function (and inside params defaults?)
          if ((lexerFlags & LF_IN_ASYNC) === LF_IN_ASYNC) return 'Await not allowed here';
        }
        break;
      case 'yield':
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          return 'Cannot use this reserved word as a variable name in strict mode';
        } else {
          // in sloppy mode you cant use it inside a generator function (and inside params defaults?)
        }
        break;
    }

    // valid binding name
    return '';
  }

  // ### expressions (functions below should not call functions above)

  function parseExpression(lexerFlags, astProp) {
    ASSERT(arguments.length === 2, 'expecting 2 args', arguments);

    let wasParen = curc === $$PAREN_L_28;
    let assignable = parseValue(lexerFlags, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, wasParen ? LHS_WAS_PAREN_START : LHS_NOT_PAREN_START, astProp);
  }
  function parseExpressionAfterLiteral(lexerFlags, astProp) {
    // assume we just parsed and skipped a literal (string/number/regex)
    let assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
  }
  function parseExpressionAfterIdent(lexerFlags, identToken, astProp) {
    let assignable = parseValueHeadBodyAfterIdent(lexerFlags, identToken, NOT_NEW_TARGET, astProp);
    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
  }
  function parseExpressionAfterPlainVarName(lexerFlags, identToken, astProp) {
    // similar to parseExpressionAfterIdentifier except it shortcuts the ident check (assumes
    // special paths from call sites where the var name must be a plain var name)
    // TODO: assert the varname is not special (dev only)
    ASSERT(identToken.str === 'let', 'currently only used for let, update is_assignable flag if this changes');
    let assignable = parseAfterVarName(lexerFlags, identToken, IS_ASSIGNABLE, astProp);
    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);

  }
  function parseExpressionAfterAsyncAsVarName(lexerFlags, identToken, astProp) {
    // identToken is 'async', is validated to be a regular var name and not a keyword, but not yet added to AST
    let assignable = parseAfterVarName(lexerFlags, identToken, IS_ASSIGNABLE, astProp);
    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
  }
  function parseExpressionAfterAsyncAsVarName2(lexerFlags, identToken, astProp) {
    // identToken is 'async', is validated to be a regular var name and not a keyword, but not yet added to AST
    return parseAfterVarName(lexerFlags, identToken, IS_ASSIGNABLE, astProp);
  }
  function parseExpressionFromOp(lexerFlags, assignable, lhsWasParenStart, astProp) {
    ASSERT(arguments.length === 4, 'arg count');
    ASSERT(lhsWasParenStart === LHS_WAS_PAREN_START || lhsWasParenStart === LHS_NOT_PAREN_START, 'lhsWasParenStart is an enum');

    if (assignable === IS_ASSIGNABLE && isAssignBinOp()) {
      // <SCRUB AST>
      if (curc === $$IS_3D && curtok.str === '=') {
        let node = _path[_path.length - 1][astProp];
        if (Array.isArray(node)) node = node[node.length - 1];
        if (node.type === 'ArrayExpression' || node.type === 'ObjectExpression') {
          AST_destruct(astProp);
        }
      }
      // </SCRUB AST>

      AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
      AST_set('operator', curtok.str);
      skipRex(lexerFlags);
      assignable = parseExpression(lexerFlags, 'right');
      AST_close('AssignmentExpression');
    } else {
      while (isNonAssignBinOp(lexerFlags) || curc === $$QMARK_3F) {
        // <SCRUB AST>
        // to maintain operator precedent we need to take special care of the AST here if the
        // current op is stronger than the previous op _currently_ at the top of the path
        let prev = _path[_path.length-1][astProp];
        let swapped = false;
        if (prev && lhsWasParenStart === LHS_NOT_PAREN_START && (prev.type === 'BinaryExpression' || prev.type === 'LogicalExpression')) {
          let sl = getStrength(curtok.str);
          let sr = getStrength(prev.operator);
          swapped =  sl > sr || (sl === sr && curtok.str === '**'); // `**` is the right-associative exception here
          if (swapped) {
            _path.push(prev);
            _pnames.push(astProp);
            astProp = 'right';
          }
        }
        // </SCRUB AST>

        if (curc === $$QMARK_3F) {
          AST_wrapClosed(astProp, 'ConditionalExpression', 'test');
          ASSERT_skipRex('?', lexerFlags);
          parseExpression(lexerFlags, 'consequent');
          if (curc !== $$COLON_3A) {
            if (curc === $$COMMA_2C) THROW('Can not use comma inside ternary expressions');
            THROW('Unexpected character inside ternary');
          }
          ASSERT_skipRex(':', lexerFlags);
          parseExpression(lexerFlags, 'alternate');
          AST_close('ConditionalExpression');
        } else {
          let AST_nodeName = (curtok.str === '&&' || curtok.str === '||') ? 'LogicalExpression' : 'BinaryExpression';
          AST_wrapClosed(astProp, AST_nodeName, 'left');
          AST_set('operator', curtok.str);
          skipRex(lexerFlags);
          lhsWasParenStart = curc === $$PAREN_L_28; // heuristic for determining groups
          parseValue(lexerFlags | LF_NO_YIELD, 'right');
          AST_close(AST_nodeName);
        }

        // note: this is for `5+5=10`
        if (curc === $$IS_3D && curtok.str === '=') {
          THROW('Cannot assign a value to non-assignable value');
        }

        // <SCRUB AST>
        if (swapped) { // restore swap
          _path.pop(prev);
          astProp = _pnames.pop();
        }
        // </SCRUB AST>
        lhsWasParenStart = curc === $$PAREN_L_28; // heuristic for determining groups
        assignable = false; // not sure where this is still relevant but it is
      }
    }

    return assignable;
  }
  function parseExpressions(lexerFlags, astProp) {
    parseExpression(lexerFlags, astProp);
    if (curc === $$COMMA_2C) _parseExpressions(lexerFlags, astProp);
  }
  function _parseExpressions(lexerFlags, astProp) {
    ASSERT(curc === $$COMMA_2C, 'confirm at callsite');
    AST_wrapClosedIntoArray(astProp, 'SequenceExpression', 'expressions');
    __parseExpressions(lexerFlags);
    AST_close('SequenceExpression');
  }
  function __parseExpressions(lexerFlags) {
    // current node should already be a SequenceExpression here. it wont be closed here either
    do {
      ASSERT_skipRex(',', lexerFlags);
      parseExpression(lexerFlags, 'expressions');
    } while (curc === $$COMMA_2C);
  }

  function isAssignBinOp() {
    let str = curtok.str;
    if (curc === $$IS_3D) {
      return str === '=';
    }
    if (str.charCodeAt(str.length-1) !== $$IS_3D) return false;
    // find compound ops but ignore comparison ops
    switch (str) {
      case '*=':
      case '/=':
      case '%=':
      case '+=':
      case '-=':
      case '<<=':
      case '>>=':
      case '>>>=':
      case '&=':
      case '^=':
      case '|=':
      case '**=':
        return true;
    }
    return false;
  }
  function isNonAssignBinOp(lexerFlags) {
    switch (curtok.str) {
      case '&&':
      case '||':
      case '+':
      case '-':
      case '*':
      case '**':
      case '/':
      case '&':
      case '|':
      case '^':
      case '==':
      case '!=':
      case '===':
      case '!==':
      case '<':
      case '<=':
      case '>':
      case '>=':
      case '<<':
      case '>>':
      case '>>>':
      case '%':
      case 'instanceof':
        return true;
      case 'in':
        return (lexerFlags & LF_NO_IN) !== LF_NO_IN;
    }
    return false;
  }

  function getStrength(str) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    // the spec is super implicit about operator precedent. you can only discover it by tracing the grammar.
    // note: this function doesnt contain all things that have precedent. most of them are also implicitly
    // determined by parsing mechanisms. stuff here is mostly about disambiguating binary ops.
    // (note that unary ops simply don't consume further binary ops AST-wise so they dont appear in this table)
    switch (str) {
      case '**': return 15;
      case '*': return 14;
      case '/': return 14;
      case '%': return 14;
      case '+': return 13;
      case '-': return 13;
      case '<<': return 12;
      case '>>': return 12;
      case '>>>': return 12;
      case '<': return 11;
      case '<=': return 11;
      case '>': return 11;
      case '>=': return 11;
      case 'in': return 11;
      case 'of': return 11;
      case 'instanceof': return 11;
      case '==': return 10;
      case '!=': return 10;
      case '===': return 10;
      case '!==': return 10;
      case '&': return 9;
      case '^': return 8;
      case '|': return 7;
      case '&&': return 6;
      case '||': return 5;
      case '?': return 4;
      default: THROW('Unknown operator ['+str+']'); // other ops should not be handled by this function. dont think this should be possible in prod (it means tokenizer allowed a new op)
    }
  }

  function parseValue(lexerFlags, astProp) {
    let assignable = parseValueHeadBody(lexerFlags, PARSE_VALUE_MUST, NOT_NEW_TARGET, astProp);
    return parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
  }
  function parseValueFromNew(lexerFlags, astProp) {
    // special case;
    // parse at least a headbody
    // then parse any number of dot/dynamic properties up to and including but not necessary one call
    // stop immediately after the call, or when the next token is not one of `.`, `[`, `(`.
    parseValueHeadBody(lexerFlags, PARSE_VALUE_MUST, CHECK_NEW_TARGET, astProp);

    // now accept a restricted set of value tails
    // note that the value is not assignable, this prevents `new x++` cases

    parseValueTail(lexerFlags, NOT_ASSIGNABLE, IS_NEW_ARG, astProp);
  }
  function parseYieldValueMaybe(lexerFlags, astProp) {
    // TODO: how to properly solve this when there are no tokens? can we even do that?
    let startok = curtok;
    let assignable = parseValueHeadBody(lexerFlags, PARSE_VALUE_MAYBE, NOT_NEW_TARGET, astProp);
    if (curtok === startok) return YIELD_WITHOUT_VALUE;
    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    if (assignable) return WITH_ASSIGNABLE;
    return WITH_NON_ASSIGNABLE;
  }
  function parseValueFromIdent(lexerFlags, astProp) {
    ASSERT(curtype === $IDENT, 'should be ident');
    let assignable = parseValueHeadBodyIdent(lexerFlags, NOT_NEW_ARG, astProp);
    return parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
  }
  function parseValueHeadBody(lexerFlags, maybe, checkNewTarget, astProp) {
    // - ident (a var, true, false, null, super, new <value>, new.target, this, class, function, async func, generator func)
    // - literal (number, string, regex, object, array, template)
    // - arrow or group
    // - await expression (TODO: is await an expression or statement keyword?)
    // TODO: what about new/typeof etc cases?

    // do not include the suffix (property, call, etc)

    // return a boolean whether the value is assignable (only for regular var names)

    if (curtype === $IDENT) {
      return parseValueHeadBodyIdent(lexerFlags, checkNewTarget, astProp);
    }
    else if (curtype & ($NUMBER|$STRING|$REGEX)) {
      AST_setLiteral(astProp, curtok);
      skipDiv(lexerFlags);
      return NOT_ASSIGNABLE;
    }
    else if (curtype & $TICK) {
      parseTickExpression(lexerFlags, astProp);
      return NOT_ASSIGNABLE;
    }
    else if (curtype === $PUNCTUATOR) {
      if (curc === $$CURLY_L_7B) {
        let wasDestruct = parseObjectLiteralPattern(lexerFlags, BINDING_TYPE_NONE, PARSE_INIT, astProp);
        if (wasDestruct === MUST_DESTRUCT) THROW('Found a struct that must be destructured but was not');
        return NOT_ASSIGNABLE; // immediate tail assignments are parsed at this point and `({x})=y` is illegal
      } else if (curc === $$SQUARE_L_5B) {
        let wasDestruct = parseArrayLiteralPattern(lexerFlags, BINDING_TYPE_NONE, PARSE_INIT, astProp);
        if (wasDestruct === MUST_DESTRUCT) THROW('Found a struct that must be destructured but was not');
        return NOT_ASSIGNABLE; // immediate tail assignments are parsed at this point and `([x])=y` is illegal
      } else if (curc === $$PAREN_L_28) {
        // do not parse arrow/group tail, regardless
        return parseGroupToplevels(lexerFlags, NOT_ASYNC, astProp);
      } else if (curtok.str === '++' || curtok.str === '--') {
        // note: this is ++/-- PREFIX. This version does NOT have newline restrictions!
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot `new` on an inc/dec expr');
        AST_open(astProp, 'UpdateExpression');
        AST_set('operator', curtok.str);
        ASSERT_skipAny($PUNCTUATOR, lexerFlags); // TODO: optimize; next token can not start with a fwd slash
        AST_set('prefix', true);
        let assignable = parseValueHeadBody(lexerFlags, PARSE_VALUE_MUST, NOT_NEW_TARGET, 'argument');
        if (assignable === NOT_ASSIGNABLE) THROW('Cannot inc/dec a non-assignable value');
        AST_close('UpdateExpression');
        return NOT_ASSIGNABLE;
      } else if (curtok.str === '+' || curtok.str === '-' || curtok.str === '!' || curtok.str === '~') {
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot `new` on +/- prefixed value');
        AST_open(astProp, 'UnaryExpression');
        AST_set('operator', curtok.str);
        ASSERT_skipRex($PUNCTUATOR, lexerFlags);
        AST_set('prefix', true);
        parseValueHeadBody(lexerFlags, PARSE_VALUE_MUST, NOT_NEW_TARGET, 'argument');
        AST_close('UnaryExpression');
        return NOT_ASSIGNABLE;
      } else if (curc === $$DOT_2E) {
        // foo(...x)
        // foo(.2)

        // the ... should be confirmed at any and only point where that might be legal
        if (curtok.str === '...') THROW('Unexpected spread/rest dots');
        // TODO: (random but kind of relevant here): add tests that put `.5` in any place here a leading-dot-token is expected
        if (checkNewTarget === CHECK_NEW_TARGET && curtok.str === '.') {
          // new.target
          // only valid if at least one scope in the scope tree is a regular function
          if ((lexerFlags & LF_CAN_NEW_TARGET) !== LF_CAN_NEW_TARGET) THROW('Must be inside/nested a regular function to use `new.target`');

          // top should currently be this node:
          // {type: 'NewExpression', arguments: [], callee: WE_ARE_HERE}
          // we will want it to completely replace this with:
          // {type: 'MetaProperty', meta: {type: 'Identifier', name: 'new'}, property: {type: 'Identifier', name: 'target'}}
          AST_replaceParent('MetaProperty', 'NewExpression')

          ASSERT_skipAny('.', lexerFlags); // must be dot
          if (curtok.str !== 'target') THROW('Can only read `new.target`, no other "properties" from `new`');
          AST_open('meta', 'Identifier');
          AST_set('name', 'new');
          AST_close('Identifier');
          AST_open('property', 'Identifier');
          AST_set('name', 'target');
          AST_close('Identifier');
          ASSERT_skipDiv('target', lexerFlags);

          // note: this is some minor "sugar" for `new.target=10`, not further checking for compound ops...
          if (curc === $$IS_3D && curtok.str === '=') {
            THROW('Cannot assign a value to non-assignable value');
          }

          return NOT_ASSIGNABLE;
        }
      }
    }

    if (!maybe) THROW('Expected to parse a value');
    // currently all callsites that have maybe=true will ignore the return value
    return true;
  }
  function parseValueHeadBodyIdent(lexerFlags, checkNewTarget, astProp) {
    ASSERT(curtype === $IDENT, 'token should not yet have been consumed because the next token depends on its value and so you cant consume this ahead of time...');
    // for new only a subset is accepted;
    // - super
    // - metaproprety
    // - this
    // - non-reserved ident (inc yield, await, if possible)
    // - literals (num,str,null,true,false,rex,template)
    // - array / object
    // - function / arrow / async / generator
    // - class

    let identToken = curtok;
    let assignable = IS_ASSIGNABLE;

    let identName = identToken.str;
    switch (identName) {
      case 'arguments':
        ASSERT_skipDiv('arguments', lexerFlags); // not very likely but certainly not regex
        assignable = verifyEvalArgumentsVar(lexerFlags);
        break;
      case 'async':
        ASSERT_skipAny('async', lexerFlags); // TODO: next token is function
        return parseAsyncExpression(lexerFlags, identToken, false, astProp);
      case 'await':
        ASSERT_skipRex($IDENT, lexerFlags); // not very likely
        // in module: only if lexerFlags allow await (inside async code)
        // in script: same as module but also as regular var names (only) outside of async code
        // (await when not a keyword is assignable)
        if (checkNewTarget === IS_NEW_ARG) TODO_AWAIT_INSIDE_NEW
        return parseAwaitExpression(lexerFlags, identToken, astProp);
      case 'class':
        ASSERT_skipAny('class', lexerFlags); // TODO: next token is ident or curly
        parseClassExpression(lexerFlags, IDENT_OPTIONAL, astProp);
        return false;
      case 'delete':
        ASSERT_skipRex('delete', lexerFlags); // not very likely
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot apply `new` to `delete`');
        return parseUnary(lexerFlags, identName, astProp);
      case 'eval':
        ASSERT_skipDiv('eval', lexerFlags); // not very likely but certainly not regex
        assignable = verifyEvalArgumentsVar(lexerFlags);
        break;
      case 'false':
        ASSERT_skipDiv('false', lexerFlags); // not very likely but certainly not regex
        return parseFalseKeyword(astProp);
      case 'function':
        ASSERT_skipAny('function', lexerFlags); // TODO: next token is ident or paren
        parseFunctionExpression(lexerFlags, NOT_ASYNC, astProp);
        return false;
      case 'let':
        // TODO: statement keyword exceptions (the rest is done in parseValueHeadBodyIdent)
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          THROW('Cannot have `let[...]` as a var name in strict mode');
        }
        ASSERT_skipDiv($IDENT, lexerFlags); // regular division
        break;
      case 'new':
        ASSERT_skipRex('new', lexerFlags); // not very likely
        parseNewKeyword(lexerFlags, astProp);
        return NOT_ASSIGNABLE; // note: property in `new x().y` is not parsed yet. new expr is never assignable
      case 'null':
        ASSERT_skipDiv('null', lexerFlags); // not very likely but certainly not regex
        return parseNullKeyword(astProp);
      case 'super':
        ASSERT_skipDiv('super', lexerFlags); // not very likely but certainly not regex
        return parseSuperKeyword(astProp);
      case 'true':
        ASSERT_skipDiv('true', lexerFlags); // not very likely but certainly not regex
        return parseTrueKeyword(astProp);
      case 'this':
        ASSERT_skipDiv('this', lexerFlags); // not very likely but certainly not regex
        return parseThisKeyword(astProp);
      case 'typeof':
      case 'void':
        ASSERT_skipRex($IDENT, lexerFlags); // not very likely
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot apply `new` to `' + identName + '`');
        return parseUnary(lexerFlags, identName, astProp);
      case 'yield':
        // Note: as quoted from the spec: "The syntactic context immediately following yield requires use of the InputElementRegExpOrTemplateTail lexical goal"
        ASSERT_skipRex($IDENT, lexerFlags); // not very likely (but there's probably a use case for this)
        if (checkNewTarget === IS_NEW_ARG) TODO_YIELD_INSIDE_NEW
        return parseYieldKeyword(lexerFlags, identToken, astProp);
      default:
        // TODO: verify identifier (note: can be value keywords depending on next token being an arrow)
        ASSERT_skipDiv($IDENT, lexerFlags); // regular division
        bindingIdentCheck(identToken, BINDING_TYPE_NONE, lexerFlags);
    }

    parseAfterVarName(lexerFlags, identToken, assignable, astProp);
    return assignable;
  }
  function parseValueHeadBodyAfterIdent(lexerFlags, identToken, checkNewTarget, astProp) {
    ASSERT(identToken.type === $IDENT, 'should have consumed token. make sure you checked whether the token after can be div or regex...');
    ASSERT(arguments.length === 4, 'expecting 4 args');
    // for new only a subset is accepted;
    // - super
    // - metaproprety
    // - this
    // - non-reserved ident (inc yield, await, if possible)
    // - literals (num,str,null,true,false,rex,template)
    // - array / object
    // - function / arrow / async / generator
    // - class

    let assignable = IS_ASSIGNABLE;

    // note: curtok token has been skipped prior to this call.
    let identName = identToken.str;
    switch (identName) {
      case 'arguments':
        assignable = verifyEvalArgumentsVar(lexerFlags);
        break;
      case 'async':
        return parseAsyncExpression(lexerFlags, identToken, false, astProp);
      case 'await':
        // in module: only if lexerFlags allow await (inside async code)
        // in script: same as module but also as regular var names (only) outside of async code
        // (await when not a keyword is assignable)
        if (checkNewTarget === IS_NEW_ARG) TODO_AWAIT_INSIDE_NEW
        return parseAwaitExpression(lexerFlags, identToken, astProp);
      case 'class':
        parseClassExpression(lexerFlags, IDENT_OPTIONAL, astProp);
        return false;
      case 'delete':
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot apply `new` to `delete`');
        return parseUnary(lexerFlags, identName, astProp);
      case 'eval':
        assignable = verifyEvalArgumentsVar(lexerFlags);
        break;
      case 'false':
        return parseFalseKeyword(astProp);
      case 'function':
        parseFunctionExpression(lexerFlags, NOT_ASYNC, astProp);
        return false;
      case 'let':
        // TODO: statement keyword exceptions (the rest is done in parseValueHeadBodyIdent)
        if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
          THROW('Cannot have `let[...]` as a var name in strict mode');
        }
        break;
      case 'new':
        parseNewKeyword(lexerFlags, astProp);
        return NOT_ASSIGNABLE; // note: property in `new x().y` is not parsed yet. new expr is never assignable
      case 'null':
        return parseNullKeyword(astProp);
      case 'super':
        return parseSuperKeyword(astProp);
      case 'true':
        return parseTrueKeyword(astProp);
      case 'this':
        return parseThisKeyword(astProp);
      case 'typeof':
      case 'void':
        if (checkNewTarget === IS_NEW_ARG) THROW('Cannot apply `new` to `' + identName + '`');
        return parseUnary(lexerFlags, identName, astProp);
      case 'yield':
        // Note: as quoted from the spec: "The syntactic context immediately following yield requires use of the InputElementRegExpOrTemplateTail lexical goal"
        if (checkNewTarget === IS_NEW_ARG) TODO_YIELD_INSIDE_NEW
        return parseYieldKeyword(lexerFlags, identToken, astProp);
      default:
        // TODO: verify identifier (note: can be value keywords depending on next token being an arrow)
    }

    parseAfterVarName(lexerFlags, identToken, assignable, astProp);
    return assignable;
  }
  function parseExpressionFromIdent(lexerFlags, identToken, astProp) {
    let assignable = parseValueHeadBodyAfterIdent(lexerFlags, identToken, NOT_NEW_ARG, astProp);
    assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
  }

  function verifyEvalArgumentsVar(lexerFlags) {
    if ((lexerFlags & LF_STRICT_MODE) !== LF_STRICT_MODE) return IS_ASSIGNABLE;

    switch (curtok.str) {
      case '=':
      case '++':
      case '--':
        THROW('Cannot assign to `eval`');
    }

    if (curc !== $$IS_3D && curtok.str[1] === '=') {
      // compound assignment
      // TODO (should probably verify this? this is slow path anyways, the input could be garble with second char being `=`)
      THROW('Cannot assign to `eval`');
    }

    return NOT_ASSIGNABLE;
  }

  function parseTrueKeyword(astProp) {
    AST_open(astProp, 'Literal');
    AST_set('value', true);
    AST_set('raw', 'true');
    AST_close('Literal');
    return NOT_ASSIGNABLE;
  }
  function parseFalseKeyword(astProp) {
    AST_open(astProp, 'Literal');
    AST_set('value', false);
    AST_set('raw', 'false');
    AST_close('Literal');
    return NOT_ASSIGNABLE;
  }
  function parseNullKeyword(astProp) {
    AST_open(astProp, 'Literal');
    AST_set('value', null);
    AST_set('raw', 'null');
    AST_close('Literal');
    return NOT_ASSIGNABLE;
  }
  function parseSuperKeyword(astProp) {
    AST_open(astProp, 'Super');
    AST_close('Super');
    return NOT_ASSIGNABLE;
  }
  function parseNewKeyword(lexerFlags, astProp) {
    AST_open(astProp, 'NewExpression');
    AST_set('arguments', []);
    parseValueFromNew(lexerFlags, 'callee');
    AST_close(['NewExpression', 'MetaProperty']);
    return NOT_ASSIGNABLE;
  }
  function parseThisKeyword(astProp) {
    AST_open(astProp, 'ThisExpression');
    AST_close('ThisExpression');
    return NOT_ASSIGNABLE;
  }
  function parseUnary(lexerFlags, identName, astProp) {
    AST_open(astProp, 'UnaryExpression');
    AST_set('operator', identName);
    AST_set('prefix', true);
    // dont parse just any standard expression. instead stop when you find any infix operator
    parseValue(lexerFlags, 'argument');
    // TODO: should delete verify that the rhs ends with a member expression?
    // TODO: delete has strict mode specific rules
    AST_close('UnaryExpression');
    return NOT_ASSIGNABLE;
  }
  function parseYieldKeyword(lexerFlags, identToken, astProp) {
    // note: yield is a recursive AssignmentExpression (its optional argument can be an assignment or another yield)
    if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
      if ((lexerFlags & LF_IN_GENERATOR) !== LF_IN_GENERATOR) {
        THROW('Cannot use `yield` outside of generator functions when in strict mode');
      }
      if ((lexerFlags & LF_NO_YIELD) === LF_NO_YIELD) {
        THROW('Using `yield` after non-operator makes it a var name (illegal in strict mode)');
      }
    } else if ((lexerFlags & LF_NO_YIELD) === LF_NO_YIELD || curtok.nl) {
      // considering `yield` a regular var name here. That's okay in sloppy mode.
      parseAfterVarName(lexerFlags, identToken, IS_ASSIGNABLE, astProp);
      return IS_ASSIGNABLE;
    }
    AST_open(astProp, 'YieldExpression');
    AST_set('delegate', false); // TODO ??
    parseYieldArgument(lexerFlags, 'argument');
    AST_close('YieldExpression');
    return NOT_ASSIGNABLE;
  }
  function parseYieldArgument(lexerFlags, astProp) {
    let wasParen = curc === $$PAREN_L_28;
    // there can be no newline between keyword `yield` and its argument (restricted production)
    let hadValue = curtok.nl ? false : parseYieldValueMaybe(lexerFlags, astProp);
    if (hadValue === YIELD_WITHOUT_VALUE) {
      AST_set(astProp, null);
    } else {
      parseExpressionFromOp(lexerFlags, hadValue === WITH_ASSIGNABLE, wasParen? LHS_WAS_PAREN_START : LHS_NOT_PAREN_START, astProp);
      if (curc === $$COMMA_2C) {
        _parseExpressions(lexerFlags, astProp);
      }
    }
  }

  function parseAfterVarName(lexerFlags, identToken, assignable, astProp) {
    // assume an identifier has just been parsed and that it should be considered a regular var name
    // (in the case of `await`, consider it a regular var)
    if (curc === $$IS_3D && curtok.str === '=>') {
      ASSERT(assignable === IS_ASSIGNABLE, 'not sure whether an arrow is valid if the arg is marked as non-assignable');
      // arrow with single param
      AST_open(astProp, 'ArrowFunctionExpression');
      AST_set('params', []);
      AST_setIdent('params', identToken);
      parseArrowFromPunc(lexerFlags, NOT_ASYNC);
      AST_close('ArrowFunctionExpression');
      return NOT_ASSIGNABLE;
    } else {
      AST_setIdent(astProp, identToken);
      return assignable;
    }
  }

  function parseTickExpression(lexerFlags, astProp) {
    // basically; parse tick. if head, keep parsing body until parsing tail

    ASSERT(typeof lexerFlags === 'number', 'lexerFlags number');
    ASSERT((lexerFlags & LF_IN_TEMPLATE) === 0 || (curtype & $TICK_HEAD), 'if in template this function can only be called by the head of a nested template');

    AST_open(astProp, 'TemplateLiteral');
    AST_set('expressions', []);
    AST_set('quasis', []);

    if (curtype === $TICK_PURE) {
      parseQuasiPart(lexerFlags, true, astProp);
    } else if (curtype === $TICK_HEAD) {
      parseQuasiPart(lexerFlags | LF_IN_TEMPLATE, false, astProp);

      // keep parsing expression+tick until tick-tail
      do {
        parseExpressions(lexerFlags | LF_IN_TEMPLATE, 'expressions');

        AST_open('quasis', 'TemplateElement');
        AST_set('tail', curtype === $TICK_TAIL);
        AST_set('value', {raw: curtok.str, cooked: '<TODO>'});
        AST_close('TemplateElement');
        if (curtype === $TICK_BODY) {
          ASSERT_skipRex(curtok.str, lexerFlags | LF_IN_TEMPLATE); // first token in template expression can be regex
        } else  if (curtype === $TICK_TAIL) {
          ASSERT_skipDiv(curtok.str, lexerFlags); // first token after template expression can be div
          break;
        } else {
          THROW('Unclosed template');
        }
      } while (true);
    } else {
      THROW('Template should start as head or pure');
    }

    AST_close('TemplateLiteral');

    // assume we just parsed and skipped a literal (string/number/regex)
    let assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, NOT_NEW_ARG, astProp);
    return parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
  }

  function parseQuasiPart(lexerFlags, tail, astProp) {
    AST_open('quasis', 'TemplateElement');
    AST_set('tail', tail);
    AST_set('value', {raw: curtok.str, cooked: '<TODO>'});
    if (curtype === $TICK_PURE) {
      ASSERT_skipDiv(curtok.str, lexerFlags);
    } else {
      ASSERT(curtype === $TICK_HEAD, 'not used for other ticks');
      ASSERT_skipRex(curtok.str, lexerFlags); // note: dont set IN_TEMPLATE here because a pure template wont want it
    }
    AST_close('TemplateElement');
  }

  function parseValueTail(lexerFlags, assignable, isNewArg, astProp) {
    ASSERT(typeof isNewArg === 'boolean', 'expecting bool isNewArg arg');
    if (curc === $$DOT_2E && curtok.str === '.') {
      ASSERT_skipAny('.', lexerFlags); // TODO: optimize; next must be identifier
      if (curtype !== $IDENT) THROW('Dot property must be an identifier');
      AST_wrapClosed(astProp, 'MemberExpression', 'object');
      AST_setIdent('property', curtok);
      ASSERT_skipDiv($IDENT, lexerFlags); // x.y / z is division
      AST_set('computed', false); // x[y] vs x.y
      AST_close('MemberExpression');
      assignable = parseValueTail(lexerFlags, IS_ASSIGNABLE, isNewArg, astProp);
    } else if (curc === $$SQUARE_L_5B) {
      AST_wrapClosed(astProp, 'MemberExpression', 'object');
      ASSERT_skipRex('[', lexerFlags);
      parseExpression(lexerFlags, 'property');
      skipDivOrDieSingleChar($$SQUARE_R_5D, lexerFlags);
      AST_set('computed', true); // x[y] vs x.y
      AST_close('MemberExpression');
      assignable = parseValueTail(lexerFlags, IS_ASSIGNABLE, isNewArg, astProp);
    } else if (curc === $$PAREN_L_28) {
      ASSERT(curtype === $PUNCTUATOR && curtok.str === '(');
      ASSERT_skipRex('(', lexerFlags);
      if (isNewArg) { // exception for `new`
        parseCallArgs(lexerFlags, 'arguments');
        // new stops parsing the rhs after the first call args
        assignable = NOT_ASSIGNABLE;
      } else {
        AST_wrapClosed(astProp, 'CallExpression', 'callee');
        AST_set('arguments', []);
        parseCallArgs(lexerFlags, 'arguments');
        AST_close('CallExpression');
        assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, isNewArg, astProp);
      }
    } else if (curc === $$TICK_60) {
      // tagged template is like a call but slightly special (and a very particular AST)
      ASSERT((curtype & $TICK) === $TICK);
      AST_wrapClosed(astProp, 'TaggedTemplateExpression', 'tag');

      AST_open('quasi', 'TemplateLiteral');
      AST_set('expressions', []);
      AST_set('quasis', []);

      AST_open('quasis', 'TemplateElement');
      AST_set('value', {raw: curtok.str.slice(1, (curtype === $TICK_PURE) ? -1 : -2), cooked: '<TODO>'});
      AST_set('tail', curtype === $TICK_PURE);
      // curtok skipped in loop or afterwards if loop is skipped
      AST_close('TemplateElement');

      if (curtype === $TICK_HEAD) {
        let lfbak = lexerFlags;
        lexerFlags = lexerFlags | LF_IN_TEMPLATE; // tell tokenizer to interpret `}` as template
        do {
          ASSERT_skipRex($TICK, lexerFlags); // f`x${/foo/}y`
          parseExpression(lexerFlags, 'expressions');

          AST_open('quasis', 'TemplateElement');
          AST_set('value', {raw: curtok.str.slice(1, (curtype === $TICK_TAIL) ? -1 : -2), cooked: '<TODO>'});
          AST_set('tail', curtype === $TICK_TAIL);
          AST_close('TemplateElement');
          if (curtype === $TICK_TAIL) lexerFlags = lfbak; // should happen only once and always
        } while (curtype !== $TICK_TAIL); // also fixes $EOF check so no infi loop
      }
      ASSERT_skipRex($TICK, lexerFlags); // f`x`\n/foo/
      AST_close('TemplateLiteral');
      AST_close('TaggedTemplateExpression');

      assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, isNewArg, astProp);
    } else if (isNewArg === IS_NEW_ARG) {
      // new rhs only parses a subset of tails
      assignable = NOT_ASSIGNABLE;
    } else if ((curc === $$PLUS_2B && curtok.str === '++') || (curc === $$DASH_2D && curtok.str === '--')) {
      if (curtok.nl) return assignable; // restricted production has no tail
      // note: this is ++/-- SUFFIX. This version DOES have newline restrictions!
      if (assignable === NOT_ASSIGNABLE) THROW('Cannot inc/dec a non-assignable value');
      parseUpdateExpressionSuffix(lexerFlags, astProp);
      assignable = NOT_ASSIGNABLE;
    }
    return assignable;
  }
  function parseUpdateExpressionSuffix(lexerFlags, astProp) {
    ASSERT(curtok.str === '++' || curtok.str === '--', 'only for update unaries');
    // if there is a newline between the previous value and UpdateExpression (++ or --) then it is not postfix
    // https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion
    // https://tc39.github.io/ecma262/#prod-UpdateExpression
    // ASI should be attempted... this may be very invalid here, though. so we need to validate that somehow.
    // examples;
    // - `foo\n++bar` -> `foo;++bar;`
    // - `foo\n++\nbar` -> `foo;++bar;`
    // - `++\nfoo;` -> `++foo;`
    // - `foo\n++` -> `foo;++` -> error
    // - `if (foo\n++);` -> error

    // ok when inside a: expression statement, return statement, throw statement, var/let/const decl, export (?)

    if (!curtok.nl) {
      AST_wrapClosed(astProp, 'UpdateExpression', 'argument');
      AST_set('operator', curtok.str);
      AST_set('prefix', false);
      ASSERT_skipDiv($PUNCTUATOR, lexerFlags);
      AST_close('UpdateExpression');
    }
    else TODO_RESTRICTED_PRODUCTION; // return assignable; // restricted production
    // else do nothing. nothing gets parsed. and since next token is ++ or -- there is no risk of "overaccepting" here
    // caller can return assignability though it won't matter as there's no scenario where the following assigns to it
  }
  function parseCallArgs(lexerFlags, astProp) {
    if (curc === $$PAREN_R_29) {
      ASSERT_skipDiv(')', lexerFlags);
    } else {
      do {
        if (curc === $$DOT_2E && curtok.str === '...') {
          AST_open(astProp, 'SpreadElement');
          ASSERT_skipRex($PUNCTUATOR, lexerFlags); // next token is expression start
          parseExpression(lexerFlags, 'argument');
          AST_close('SpreadElement');
        } else {
          parseExpression(lexerFlags, astProp);
        }
        if (curc !== $$COMMA_2C) break;
        ASSERT_skipRex(',', lexerFlags);
        if (curc === $$PAREN_R_29) {
          if (!options_trailingArgComma) {
            THROW('Option to parse trailing call argument commas is disabled');
          }
          break;
        }
      } while (true);
      skipDivOrDieSingleChar($$PAREN_R_29, lexerFlags);
    }
  }

  function parseArrowFromPunc(lexerFlags, isAsync) {
    ASSERT(typeof isAsync === 'boolean', 'isasync bool');
    ASSERT_skipRex('=>', lexerFlags);
    AST_set('id', null);
    AST_set('generator', false);
    AST_set('async', isAsync);
    lexerFlags = resetLexerFlagsForFunction(lexerFlags, isAsync, NOT_GENERATOR, IS_ARROW);
    if (curc === $$CURLY_L_7B) {
      AST_set('expression', BODY_IS_BLOCK); // "body of arrow is block"
      parseBlockStatement(lexerFlags, IS_EXPRESSION, PARSE_DIRECTIVES, 'body');
    } else {
      AST_set('expression', BODY_IS_EXPR); // "body of arrow is expr"
      parseExpression(lexerFlags, 'body'); // TODO: what about curlyLexerFlags here?
    }
  }
  function parseGroupToplevels(lexerFlags, asyncKeywordPrefixed, astProp) {
    // = parseGroup
    // must return IS_ASSIGNABLE or NOT_ASSIGNABLE
    ASSERT(arguments.length === 3, 'expecting 3 args');
    // returns whether the parsed expression is assignable

    //    ();
    //    () = y
    //    () += y
    //    () != y
    // v  () => y
    // v  (x);
    // v  (x) = y
    // v  (x) += y
    // v  (x) != y
    // v  (x) => y
    // v  (x=z);
    // v  (x=z) = y
    //    (x=z) += y
    // v  (x=z) != y
    // v  (x=z) => y
    // v  (x,y);
    //    (x,y) = y
    //    (x,y) += y
    // v  (x,y) != y
    // v  (x,y) => y
    // v  ([]);
    //    ([]) = y
    //    ([]) += y
    // v  ([]) != y
    // v  ([]) => y
    // v  ([x]);
    //    ([x]) = y
    //    ([x]) += y
    // v  ([x]) != y
    // v  ([x]) => y
    // v  ([x=z]);
    //    ([x=z]) = y
    //    ([x=z]) += y
    // v  ([x=z]) != y
    // v  ([x=z]) => y
    // v  ([x]=z);
    //    ([x]=z) = y
    //    ([x]=z) += y
    // v  ([x]=z) != y
    // v  ([x]=z) => y
    // v  ({});
    //    ({}) = y
    //    ({}) += y
    // v  ({}) != y
    // v  ({}) => y
    //    ({x});              // shorthand must destruct so this is an error
    //    ({x}) = y
    //    ({x}) += y
    // v  ({x}) != y
    // v  ({x}) => y
    // v  ({x=z});
    //    ({x=z}) = y
    //    ({x=z}) += y
    // v  ({x=z}) != y
    // v  ({x=z}) => y
    // v  ({x}=z);
    //    ({x}=z) = y
    //    ({x}=z) += y
    // v  ({x}=z) != y
    // v  ({x}=z) => y

    // notable remarks;
    // - empty group `()` is the only one that must be followed by an arrow (`=>`)
    // - if a group has a top level ident it is only assignable if it doesn't also have a comma, otherwise it never is
    // - the `(x)` case is the only case to be compoundable
    // - if rest-pattern occurs anywhere as part of the group the group _must_ be an arrow
    // - objects and arrows in a group are never assignable (you can only destructure by <arr/obj, `=`, init>, no group)

    let rootAstProp = astProp;

    skipDivOrDieSingleChar($$PAREN_L_28, lexerFlags);

    // parse the group as if it were a group (also for the sake of AST)
    // while doing so keep track of the next three states. At the end
    // act accordingly.

    // TODO: destructuring cases to consider later (for all such cases though I'm not certain which others there are);
    //     x, [foo, bar] = doo;
    //     x, [foo = y, bar] = doo;
    //     x, [foo + y, bar] = doo;
    // TODO: what about `x = [a, b] = y` and `[a, b] = c = d`

    if (curc === $$PAREN_R_29) {
      // special case; the `()` here must be the arrow header or (possibly) an `async()` function call
      skipDivOrDieSingleChar($$PAREN_R_29, lexerFlags); // must be => except for `async()/foo`
      if (curtok.str !== '=>') {
        if (asyncKeywordPrefixed) {
          // `async()`, is okay in sloppy mode (TODO: even there not okay in some cases...)

          // `async()` without arrow
          if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
            THROW('The `async` identifier is a keyword and must be followed by a function');
          }

          AST_setIdent(astProp, asyncKeywordPrefixed);
          AST_wrapClosed(astProp, 'CallExpression', 'callee');
          AST_set('arguments', []);
          AST_close('CallExpression');

          return NOT_ASSIGNABLE
        }
        THROW('Empty group must indicate an arrow');
      } else if (curtok.nl) {
        // this is a little bit of a weird error since there can't be ambiguity if this is an error anyways *shrug*
        THROW('The arrow token `=>` is a restricted production and cannot have a newline preceeding it');
      }

      AST_open(astProp, 'ArrowFunctionExpression');
      AST_set('params', []);
      parseArrowFromPunc(lexerFlags, asyncKeywordPrefixed ? WAS_ASYNC : NOT_ASYNC);
      AST_close('ArrowFunctionExpression');
      return NOT_ASSIGNABLE;
    }

    let destructible = MIGHT_DESTRUCT;
    let assignable = NOT_ASSIGNABLE; // true iif first expr is assignable, always false if the group has a comma
    let toplevelComma = false;

    while (curc !== $$PAREN_R_29) { // top-level group loop, list of ident, array, object, rest, and other expressions
      if (curtype === $IDENT) {
        // token offset:
        // - (IDENT
        // - (<x>, IDENT
        // - etc

        // valid followup;
        // - IDENT ,        (assignable=no, destructible=yes, mustDestruct=no)
        // - IDENT = expr   (assignable=yes iif only expr in group, destructible=yes, mustDestruct=no)
        // - IDENT += expr  (assignable=no, destructible=no, mustDestruct=no  for all compounds, result is assignable only if there the group wraps one expression)
        // - IDENT )        (assignable=yes, destructible=yes, mustDestruct=no)
        // - anything else:
        //   - assignable=iif the only expr and also assignable
        //   - destructible=no
        //   - mustDestruct=no (duh)

        // binding check wise;
        // - if arrow then the ident here must do a binding check
        // - if assignable/compoundable then the ident must do a binding check
        // - in all other cases the binding must be a valid value ident (including true, false, typeof, etc)
        //   - some valid idents can not be assigned (`true`, `typeof`, etc) and are not destructible, not assignable

        // first scan next token to see what potential checks we need to apply (wrt the above comments)
        const identToken = curtok;
        skipIdentSafeAndExpensive(lexerFlags); // will properly deal with div/rex cases

        if (curtok.str === '=') {
          assignable = parseArrowableTopIdentAssign(lexerFlags, identToken, astProp);
        }
        else if (curc === $$COMMA_2C || curc === $$PAREN_R_29) {
          // group has multiple exprs, this ident is just an ident
          // - (x, ...);
          // - (x, ...) => ...
          // or this is the end of a group
          // - (x)
          // - (..., x)
          // must be valid bindable var name

          AST_setIdent(astProp, identToken);

          // destructible is determined by the ident being a reserved keyword
          // we know the ident is followed by a comma so `typeof` would lead to an error anyways
          switch (identToken.str) {
            case 'true':
            case 'false':
            case 'null':
            case 'this':
            case 'super':
              // reserved keyword, not destructible
              destructible = CANT_DESTRUCT;
              break;

            default:
              // if curc is a comma then the group is not assignable but that will fail through the toplevelComma flag
              // if the group is just an identifier then it can be assigned to: `(a) = b`. There's a test. Or two.
              assignable = IS_ASSIGNABLE;
              bindingIdentCheck(identToken, BINDING_TYPE_NONE, lexerFlags);
          }
        }
        else {
          // the token following this ident is not one valid in a destructuring assignment
          // parse a regular ident expression here
          destructible = CANT_DESTRUCT;
          assignable = parseExpressionAfterIdent(lexerFlags, identToken, astProp);
        }
      }
      else if (curc === $$CURLY_L_7B) {
        // note: grouped object/array literals are never assignable
        let subDestruct = parseObjectLiteralPattern(lexerFlags, BINDING_TYPE_ARG, PARSE_INIT, astProp);
        destructible = updateDestructible(destructible, subDestruct)
        ASSERT(curc !== $$IS_3D, 'destruct assignments should be parsed at this point');
      }
      else if (curc === $$SQUARE_L_5B) {
        // note: grouped object/array literals are never assignable
        let subDestruct = parseArrayLiteralPattern(lexerFlags, BINDING_TYPE_ARG, PARSE_INIT, astProp);
        destructible = updateDestructible(destructible, subDestruct)
        ASSERT(curc !== $$IS_3D, 'destruct assignments should be parsed at this point');
      }
      else if (curc === $$DOT_2E && curtok.str === '...') {
        parseArrowableTopRest(lexerFlags, asyncKeywordPrefixed, astProp);
        if (asyncKeywordPrefixed) {
          // can still be `async (...x) => x` and `async(...x);`
          if (curc !== $$PAREN_R_29) {
            destructible = updateDestructible(destructible, CANT_DESTRUCT); // dots in async toplevel must mean spread/call
          }
        } else {
          destructible = updateDestructible(destructible, MUST_DESTRUCT); // dots in toplevel group must mean arrow
          break; // must be last element in arrow header
        }
      }
      else {
        // arbitrary expression that is not destructible (on this level, at least)
        destructible = CANT_DESTRUCT;

        assignable = parseExpression(lexerFlags, astProp);
        if (curc === $$COMMA_2C) {
          if (!toplevelComma) {
            toplevelComma = true;
            AST_wrapClosedIntoArray(rootAstProp, 'SequenceExpression', 'expressions');
            astProp = 'expressions';
          }
          __parseExpressions(lexerFlags, astProp);
          assignable = NOT_ASSIGNABLE;
        }
        if (toplevelComma) {
          AST_close('SequenceExpression');
        }
        skipDivOrDieSingleChar($$PAREN_R_29, lexerFlags);

        return assignable;
      }

      if (curc !== $$COMMA_2C) break;
      if (!toplevelComma) {
        toplevelComma = true;
        // only do this once
        AST_wrapClosedIntoArray(rootAstProp, 'SequenceExpression', 'expressions');
        astProp = 'expressions';
      }

      ASSERT_skipAny(',', lexerFlags); // TODO: next must be ident or comma or [ or { or ...
    }

    if (toplevelComma) {
      AST_close('SequenceExpression');
    }

    skipDivOrDieSingleChar($$PAREN_R_29, lexerFlags);

    if (curtok.str === '=>') {
      // arrow function
      // TODO: is this actually an error
      if (curtok.nl) TODO,THROW('Arrow is restricted production; cannot have newline before the arrow token');
      if (destructible === CANT_DESTRUCT) THROW('The left hand side of the arrow is not destructible so arrow is illegal');

      // <SCRUB AST>
      let node = _path[_path.length-1];
      let params = node[rootAstProp];

      AST_wrapClosedIntoArray(rootAstProp, 'ArrowFunctionExpression', 'params');

      if (toplevelComma) {
        ASSERT(params.type === 'SequenceExpression', 'if toplevelComma then this is a sequence');
        ASSERT(params.expressions instanceof Array, 'if toplevelComma then node is a sequence and .expressions should be an array');
        node[rootAstProp].params = params.expressions;
      }
      else if (!Array.isArray(params)) node[rootAstProp].params = [params];
      else {
        ASSERT(params instanceof Array, 'params should be an array');
        node[rootAstProp].params = params;
      }
      ASSERT(Array.isArray(node[rootAstProp].params), 'params should now be an array in any case');

      for (let i=0; i<node[rootAstProp].params.length; ++i) {
        AST__destruct(node[rootAstProp].params[i]);
      }
      // </SCRUB AST>

      parseArrowFromPunc(lexerFlags, asyncKeywordPrefixed ? WAS_ASYNC : NOT_ASYNC);

      AST_close('ArrowFunctionExpression');
      return NOT_ASSIGNABLE;
    }
    else if (asyncKeywordPrefixed) {
      // `async(x,y,z)` without arrow
      if ((lexerFlags & LF_STRICT_MODE) === LF_STRICT_MODE) {
        THROW('The `async` identifier is a keyword and must be followed by a function / arrow');
      }
      console.log(rootAstProp, '->', astProp)
      console.log('async?', asyncKeywordPrefixed)
      // console.log('wot' , _path[_path.length - 1])
      // console.log('dot', _path[_path.length - 1].arguments[0])
      // console.log('xxx', _path[_path.length - 1].arguments[0].expressions)
      // AST_set('arguments', (_path[_path.length - 1].arguments[0].expressions), true)

      // <SCRUB AST>
      let node = AST_replaceClosed(rootAstProp, 'CallExpression', toplevelComma ? 'SequenceExpression' : _path[_path.length - 1][astProp].type);
      console.log('-->', node)
      AST_setIdent('callee', asyncKeywordPrefixed);
      AST_set('arguments', toplevelComma ? node.expressions : node);
      AST_close('CallExpression');
      // </SCRUB AST>

      return NOT_ASSIGNABLE
    }
    else if (destructible === MUST_DESTRUCT) {
      THROW('The group had to be destructed but was not followed by an arrow (this is an invalid assignment target)');
    }
    else if (curtok.str === '=') {
      // cannot assign to destructible since that is only allowed as AssignmentPattern and a group is not exempted
      // can only assign to a grouped reference when expr is "IsValidSimpleAssignmentTarget"; ONLY SUCH CASES ARE:
      // - (foo) except to "foo" and "arguments" in strict mode, but including "yield" and "await" in any mode
      // - (foo.x)
      // - (foo[x])

      if (toplevelComma) THROW('Cannot assign to list of expressions in a group');
      // TODO: need to make sure we can't do `(eval) = x` and `(arguents) = x` in strict mode (only); it's an explicit error
      if (assignable !== IS_ASSIGNABLE) THROW('Invalid assignment because group does not wrap just a var name or just a property access');

      AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
      AST_set('operator', '=');
      ASSERT_skipRex('=', lexerFlags);
      parseExpression(lexerFlags, 'right');
      AST_close('AssignmentExpression');

      return NOT_ASSIGNABLE;
    }
    else if (curc !== $$IS_3D && curc !== $$EXCL_21 && curtok.str[curtok.str.length-1] === '=') {
      // compound assignment
      if (toplevelComma) THROW('Cannot assign to list of expressions in a group');
      // TODO: need to make sure we can't do `(eval) = x` and `(arguents) = x` in strict mode (only); it's an explicit error
      if (assignable !== IS_ASSIGNABLE) THROW('Invalid assignment because group does not wrap just a var name or just a property access');

      AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
      AST_set('operator', curtok.str);
      ASSERT_skipRex(curtok.str, lexerFlags);
      parseExpression(lexerFlags, 'right');
      AST_close('AssignmentExpression');

      return NOT_ASSIGNABLE;
    }

    // a group. those still exist?
    return assignable;
  }
  function parseArrowableTopIdentAssign(lexerFlags, identToken, astProp) {
    // assignment / default init
    // - (x = y) => z
    // - (x = y);
    // must be valid bindable var name
    // TODO: in strict mode the var must exist otherwise it throws if not an arrow
    // TODO: if name is const bound it is only valid as an arrow
    bindingIdentCheck(identToken, BINDING_TYPE_NONE, lexerFlags);

    // TODO: instead of wrap-closed below we can do ast_open here in one go
    // AST_open(astProp, 'AssignmentExpression');
    // AST_setIdent('left', identToken);
    // AST_set('operator', '=');
    // assignable = parseExpression(lexerFlags, 'right');
    AST_setIdent(astProp, identToken);

    AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
    AST_set('operator', '=');
    ASSERT_skipRex('=', lexerFlags);
    // I don't think the actual expression matters at this point
    // TODO: except for strict-mode specific stuff in function args... (might already have solved this :) )
    let assignable = parseExpression(lexerFlags, 'right');
    AST_close('AssignmentExpression');
    return assignable;
  }
  function parseArrowableTopRest(lexerFlags, asyncKeywordPrefixed, astProp) {
    // rest (can not be spread)
    // a `...` at the top-level of a group means this has to be an arrow header unless async'ed
    // a `...[x+y]` at the toplevel is an error

    // - (...x) => x
    // - (...[destruct]) => x
    // - (...{destruct}) => x
    // - async(...ident) => x
    // - async(...[destruct]) => x
    // - async(...{destruct}) => x
    // - async(...<expr>);            // :(

    let subDestruct = parseArrowableSpreadOrRest(lexerFlags, $$PAREN_R_29, BINDING_TYPE_ARG, IS_GROUP_TOPLEVEL, asyncKeywordPrefixed, astProp);
    if (!asyncKeywordPrefixed) {
      if (subDestruct === CANT_DESTRUCT || curc === $$COMMA_2C) {
        THROW('A ... argument must be destructible in an arrow header, found something that was not destructible');
      }
      if (curc === $$IS_3D && curtok.str === '=') THROW('Cannot set a default on a rest value');
      if (curc === $$COMMA_2C) THROW('Rest arg cannot have a trailing comma');
      if (curc !== $$PAREN_R_29) THROW('Rest arg must be last but did not find closing paren');
    }
  }
  function parseArrayLiteralPattern(lexerFlags, bindingType, skipInit, _astProp) {
    // token offsetS:
    // - ( [
    // - ( <x> , [
    ASSERT(arguments.length === 4, 'expecting 4 args');

    // either the bracket starts an array destructuring or literal. they have a similar-but-not-the-same structure
    // - ([]
    // - ([ident,]
    // - ([ident = expr]
    // - ([<array destruct> = expr,]
    // - ([<object destruct> = expr,]
    // - ([...<ident, arr>]
    // - in all above cases destructible
    // - in all other cases this is a regular array and not destructible

    // we can parse `in` inside an array literal/destruct
    lexerFlags = sansFlag(lexerFlags, LF_NO_IN);

    AST_open(_astProp, 'ArrayExpression');
    ASSERT_skipRex('[', lexerFlags); // `x = ([/foo/]);` is a valid albeit little weird group
    AST_set('elements', []);

    let astProp = 'elements';

    let destructible = MIGHT_DESTRUCT;

    // skip leading commas
    while (curc === $$COMMA_2C) {
      ASSERT_skipRex(',', lexerFlags); // forward slash after comma has to be a regex
      AST_add(astProp, null);
    }

    let spreadStage = NO_SPREAD;

    while(curc !== $$SQUARE_R_5D) {
      if (curtype === $IDENT) {
        // token offset:
        // - ([IDENT
        // - ([<x>, IDENT
        // - etc

        // valid followup;
        // - IDENT ,        (assignable=no, destructible=yes, mustDestruct=no)
        // - IDENT = expr   (assignable=yes iif only expr in group, destructible=yes, mustDestruct=no)
        // - IDENT )        (assignable=yes, destructible=yes, mustDestruct=no)
        // - anything else:
        //   - destructible=no

        // binding check wise;
        // - if arrow then the ident here must do a binding check
        // - if assignable/compoundable then the ident must do a binding check
        // - in all other cases the binding must be a valid value ident (including true, false, typeof, etc)
        //   - some valid idents can not be assigned (`true`, `typeof`, etc) and are not destructible, not assignable

        // first scan next token to see what potential checks we need to apply (wrt the above comments)
        const identToken = curtok;
        skipIdentSafeAndExpensive(lexerFlags); // will properly deal with div/rex cases

        if (curtok.str === '=') {
          // assignment / default init
          // - ([x = y]) => z
          // - ([x = y]);
          // must be valid bindable var name
          // TODO: in strict mode the var must exist (if not an arrow) otherwise it throws if not an arrow
          // TODO: if name is const bound it is only valid as an arrow
          bindingIdentCheck(identToken, bindingType, lexerFlags);

          // TODO: instead of wrap-closed below we can do ast_open here in one go
          // AST_open(astProp, 'AssignmentExpression');
          // AST_setIdent('left', identToken);
          // AST_set('operator', '=');
          // assignable = parseExpression(lexerFlags, 'right');
          AST_setIdent(astProp, identToken);

          AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
          AST_set('operator', '=');
          ASSERT_skipRex('=', lexerFlags);
          // I don't think the actual expression matters at this point
          // TODO: except for strict-mode specific stuff in function args... (might already have solved this :) )
          parseExpression(lexerFlags, 'right');
          AST_close('AssignmentExpression');
        }
        else if (curtok.str[1] === '=' && curtok.str.length === 2 && curc !== $$EXCL_21 && curc !== $$IS_3D) {
          // - [x += y]
          bindingIdentCheck(identToken, bindingType, lexerFlags);
          // TODO: dont wrapClosed below but do it all in once
          AST_setIdent(astProp, identToken);

          AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
          AST_set('operator', curtok.str);
          ASSERT_skipRex($PUNCTUATOR, lexerFlags);
          parseExpression(lexerFlags, 'right');
          AST_close('AssignmentExpression');

          destructible = updateDestructible(destructible, CANT_DESTRUCT);
        }
        else if (curc === $$COMMA_2C || curc === $$SQUARE_R_5D) {
          // arr has multiple exprs, this ident is just an ident
          // - ([x, ...]);
          // - ([x, ...]) => ...
          // or this is the end of a group
          // - ([x])
          // - ([..., x])
          // must be valid bindable var name

          AST_setIdent(astProp, identToken);

          // destructible is determined by the ident being a reserved keyword
          // we know the ident is followed by a comma so `typeof` would lead to an error anyways
          switch (identToken.str) {
            case 'true':
            case 'false':
            case 'null':
            case 'this':
            case 'super':
              // reserved keyword, not destructible
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              break;
            default:
              bindingIdentCheck(identToken, bindingType, lexerFlags);
          }
        }
        else {

          // the token following this ident is not one valid in a destructuring assignment
          // parse a regular ident expression here
          // - `([delete foo])`
          // - `([foo + bar])`
          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          let assignable = parseValueHeadBodyAfterIdent(lexerFlags, identToken, NOT_NEW_TARGET, astProp);
          assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
          parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
        }
      }
      else if (curc === $$CURLY_L_7B) {
        let nowDestruct = parseObjectLiteralPattern(lexerFlags, bindingType, PARSE_INIT, astProp);
        destructible = updateDestructible(destructible, nowDestruct);
      }
      else if (curc === $$SQUARE_L_5B) {
        // note: grouped object/array literals are never assignable
        let nowDestruct = parseArrayLiteralPattern(lexerFlags, bindingType, PARSE_INIT, astProp);
        destructible = updateDestructible(destructible, nowDestruct);
      }
      else if (curc === $$DOT_2E && curtok.str === '...') {
        // rest/spread.
        // if it isn't the last in the array then the array is not destructible
        // if the spread is not on an array/object/ident or it has a tail beyond that, it is not destructible
        // - ([...x]);       (this is valid)
        // - ([...x=y]);     (spread wraps the assignment (!))
        // - ([...x+=y]);    (spread wraps the assignment (!))
        // - ([...x+y]);     (spread wraps any expression)
        // - ([...x, y]);    (spread does not need to be last)
        // - ([...x, ...y]); (spread can appear more than once)
        // - ([...x]) => x
        // - ([x, ...y]) => x
        // TODO: the value can be an ident or an array-pattern but I don't think anything else
        let subDestruct = parseArrowableSpreadOrRest(lexerFlags, $$SQUARE_R_5D, bindingType, NOT_GROUP_TOPLEVEL, undefined, astProp);
        if (curc === $$COMMA_2C) subDestruct = updateDestructible(subDestruct, CANT_DESTRUCT);
        destructible = updateDestructible(destructible, subDestruct);
        // if there are any other elements after this then this cannot be a destructible since that demands rest as last
        if (spreadStage === NO_SPREAD) spreadStage = LAST_SPREAD;
      }
      else {
        // arbitrary expression that is not destructible (on this level, at least)
        destructible = updateDestructible(destructible, CANT_DESTRUCT);

        parseExpression(lexerFlags, astProp);
      }

      if (curc !== $$COMMA_2C) break; // end of the array
      // skip one because a trailing comma does not add a `null` to the ast
      ASSERT_skipRex(',', lexerFlags); // forward slash after comma has to be a regex

      if (spreadStage === LAST_SPREAD) {
        spreadStage = MID_SPREAD;
        // cannot destruct if spread appeared as non-last element
        destructible = updateDestructible(destructible, CANT_DESTRUCT);
      }

      while (curc === $$COMMA_2C) {
        ASSERT_skipRex(',', lexerFlags); // forward slash after comma has to be a regex
        AST_add(astProp, null);
      }
    }

    skipDivOrDieSingleChar($$SQUARE_R_5D, lexerFlags); // a forward slash after ] has to be a division
    AST_close('ArrayExpression');

    if (skipInit === PARSE_INIT && curc === $$IS_3D && curtok.str === '=') {
      updateDestructible(destructible, MUST_DESTRUCT); // this is to assert the above _can_ be destructed
      // this assignment resets the destructible state
      // for example; `({a = b})` must destruct because of the shorthand. `[...a=b]` can't destruct because rest is only
      // legal on a simple identifier. So combining them you get `[...{a = b} = c]` where the inside must destruct and the outside cannot. (there's a test)
      destructible = MIGHT_DESTRUCT; // now reset

      // the array MUST now be a pattern. Does not need to be an arrow.
      // the outer-most assignment is an expression, the inner assignments become patterns too.
      AST_destruct(_astProp);
      AST_wrapClosed(_astProp, 'AssignmentExpression', 'left');
      AST_set('operator', '=');
      ASSERT_skipRex('=', lexerFlags); // a forward slash after = has to be a division
      parseExpression(lexerFlags, 'right');
      AST_close('AssignmentExpression');
    }

    return destructible;
  }
  function parseObjectLiteralPattern(_lexerFlags, bindingType, skipInit, _astProp) {
    // have to return whether the whole cant, might, or must destruct;
    // - `f({a = b})`         // FAIL (shorthand only allowed when destructuring)
    // - `f({a = b} = c)`     // PASS (the outer assignment turns the object into a Pattern)
    // - `f({...a = b})`      // PASS (the spread wraps the assignment)
    // - `f({...a = b} = c)`  // FAIL (rest cannot have init)

    // returns whether this object is destructible
    ASSERT(arguments.length === 4, 'expecting 4 args');

    // token offsetS:
    // - ( {
    // - ( <x> , {

    // either the curly starts an object or an object destructuring. they have a similar-but-not-the-same structure
    // - ({}
    // - ({ident,}
    // - ({ident: ident,}
    // - ({ident: <array destruct>,}
    // - ({ident: <object destruct>,}
    // - ({ident = expr}
    // - ({ident: ident = expr}
    // - ({ident: <array destruct> = expr,}
    // - ({ident: <object destruct> = expr,}
    // - ({...ident,}
    // - in all above cases destructible, doesn't have to be
    // - in all other cases this must be an object

    let lexerFlags = _lexerFlags;
    if (lexerFlags & LF_NO_IN) lexerFlags = lexerFlags ^ LF_NO_IN;
    if (lexerFlags & LF_IN_TEMPLATE) lexerFlags = lexerFlags ^ LF_IN_TEMPLATE;

    AST_open(_astProp, 'ObjectExpression');
    ASSERT_skipAny('{', lexerFlags); // TODO: next must be propname (ident, string, number, square bracket) or }
    AST_set('properties', []);

    let destructible = MIGHT_DESTRUCT; // innocent until proven guilty? may or may not destruct

    let astProp = 'properties';

    while (curc !== $$CURLY_R_7D) {
      let nameBinding;

      if (curc === $$COMMA_2C) {
        // ({,
        THROW('Objects cant have comma without something preceding it');
      }

      // an objlit property has quite a few (though limited) valid goals
      // - `({},`
      // - `({ident,`
      // - `({ident:ident`
      // - `({ident:expr`
      // - `({ident(){}`
      // - `({get ident(){}`    (or set/async)
      // - `({get *ident(){}`   (or set, and I think by now async too?)
      // - `({get 'x'(){}`      (or double quotes)
      // - `({get *'x'(){}`     (or double quotes)
      // - `({get 10(){}`       (could also be .5)
      // - `({get *10(){}`      (could also be .5)
      // - `({get [expr](){}`   (or set/async)
      // - `({get *[expr](){}`  (or set, and I think by now async too?)
      // - `({'foo':expr`       (or double quotes)
      // - `({'foo'(){}`        (or double quotes)
      // - `({200:expr`         (could also be .5)
      // - `({200(){}`          (could also be .5)
      // - `({...ident`
      // - `({*ident(){}`
      // - `({*'x'(){}`         (or double quotes)
      // - `({*20(){}`          (could also be .5)
      // - `({*[expr](){}`
      // - `({[expr]:expr`      (destructible!)
      // - `({[expr](){}`

      if (curtype === $IDENT) {
        // this is the only case that can be a shorthand. only valid syntaxes:
        // - `({ident,`
        // - `({ident:ident`
        // - `({ident:expr`
        // - `({ident(){}`
        // - `({get ident(){}`    (or set/async)
        // - `({get *ident(){}`   (or set, and I think by now async too?)
        // - `({get [expr](){}`   (or set/async)
        // - `({get *[expr](){}`  (or set, and I think by now async too?)
        // - since this is an object curly, it _must_ be a syntax error when not a valid property starter
        let identToken = curtok;
        ASSERT_skipAny($IDENT, lexerFlags); // TODO: set of allowed characters is wide but limited

        if (curc === $$COMMA_2C || curc === $$CURLY_R_7D || curtok.str === '=') {
          // property shorthand; `{ident}=x` is valid
          // - {a}
          // - {a, ...}
          // - {true}       !is never valid!

          bindingIdentCheck(identToken, bindingType, lexerFlags);

          // obj shorthand is only valid when destructuring
          destructible = updateDestructible(destructible, MUST_DESTRUCT);

          AST_open(astProp, 'Property');
          AST_setIdent('key', identToken);
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', false);
          AST_set('computed', false);
          AST_setIdent('value', identToken);
          if (curc === $$IS_3D && curtok.str === '=') {
            // consider `({foo = 10})` vs `({foo: bar = 10})`
            // (note: shorthand only forces MUST_DESTRUCT when an initializer follows it immediately)
            destructible = updateDestructible(destructible, MUST_DESTRUCT); // shorthand is only allowed in Pattern

            AST_wrapClosed('value', 'AssignmentExpression', 'left');
            AST_set('operator', '=');
            ASSERT_skipRex('=', lexerFlags); // a forward slash after = has to be a regex
            parseExpression(lexerFlags, 'right');
            AST_close('AssignmentExpression');
          }
          AST_set('shorthand', true);
          AST_close('Property');

          nameBinding = identToken;

          ASSERT(curc !== $$IS_3D, 'further assignments should be parsed as part of the rhs expression');
        }
        else if (curc === $$COLON_3A) {
          // property value or label, some are destructible:
          // - ({ident: ident,}
          // - ({ident: <array destruct>,}
          // - ({ident: <object destruct>,}
          // - ({ident: ident = expr}
          // - ({ident: <array destruct> = expr,}
          // - ({ident: <object destruct> = expr,}
          // anything else as value is non-destructible

          ASSERT_skipRex(':', lexerFlags); // next is expression

          if (curtype === $IDENT) {
            // ({ident: ident
            // can still become ({ident: foo+bar}) which is not destructible, so confirm token after ident
            let valueIdentToken = nameBinding = curtok;
            bindingIdentCheck(curtok, bindingType, lexerFlags);
            ASSERT_skipDiv($IDENT, lexerFlags); // this is `{foo: bar` and could be `{foo: bar/x`

            AST_open(astProp, 'Property');
            AST_setIdent('key', identToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D) {
              if (curtok.str === '=') {
                // dont reset nameBinding (`b`) in the `{a: b=c}` case. The binding is verified later.
                nameBinding = undefined;
              } else {
                // something like `({a:v=b}=c)` and `({a:v=b}=c) => x` is valid so don't prevent destruct for `=`
                destructible = updateDestructible(destructible, CANT_DESTRUCT);
              }
              parseExpressionFromIdent(lexerFlags, valueIdentToken, 'value');
            } else {
              // note: nameBinding is verified later
              AST_setIdent('value', nameBinding);
            }
            AST_set('shorthand', false);
            AST_close('Property');
          }
          else if (curc === $$SQUARE_L_5B) {
            // ({ident: <array destruct>
            AST_open(astProp, 'Property');
            AST_setIdent('key', identToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            let subDestruct = parseArrayLiteralPattern(lexerFlags, bindingType, PARSE_INIT, 'value');
            destructible = updateDestructible(destructible, subDestruct);
            // BUT, could also be ({ident: [foo, bar].join('')}) which is not destructible, so confirm next token
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D && curtok.str !== '=') {
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              let assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, NOT_NEW_ARG, 'value');
              parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, 'value');
            }
            AST_set('shorthand', false);
            AST_close('Property');
          }
          else if (curc === $$CURLY_L_7B) {
            // ({ident: <object destruct>
            AST_open(astProp, 'Property');
            AST_setIdent('key', identToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            let subDestruct = parseObjectLiteralPattern(lexerFlags, bindingType, PARSE_INIT, 'value');
            console.log('subDestruct', subDestruct)
            destructible = updateDestructible(destructible, subDestruct);
            // BUT, could also be ({ident: {foo:bar}.toString()) which is not destructible, so confirm next token
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D && curtok.str !== '=') {
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              let assignable = parseValueTail(lexerFlags, NOT_ASSIGNABLE, NOT_NEW_ARG, 'value');
              parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, 'value');
            }
            AST_set('shorthand', false);
            AST_close('Property');
          }
          else {
            // something like `({foo: 15` is valid, just not destructible
            destructible = updateDestructible(destructible, CANT_DESTRUCT);

            AST_open(astProp, 'Property');
            AST_setIdent('key', identToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            parseExpression(lexerFlags, 'value');
            AST_set('shorthand', false);
            AST_close('Property');
          }
          ASSERT(curc !== $$IS_3D, 'assignments should be parsed as part of the rhs expression');
        }
        else if (curc === $$SQUARE_L_5B) {
          // - ({get [expr](){}
          // - ({set [expr](ident){}
          // - ({async [expr](){}

          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          AST_open(astProp, 'Property');
          ASSERT_skipRex('[', lexerFlags); // next is expression
          parseExpression(lexerFlags, 'key');
          skipAnyOrDieSingleChar($$SQUARE_R_5D, lexerFlags); // next must be `(`
          AST_set('kind', identToken.str === 'async' ? 'init' : identToken.str === 'get' ? 'get' : identToken.str === 'set' ? 'set' : 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', true);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, identToken.str === 'async' ? WAS_ASYNC : NOT_ASYNC, IDENT_OPTIONAL, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
          ASSERT(curc !== $$IS_3D, 'this struct does not allow init/defaults');
        }
        else if (curc === $$PAREN_L_28) {
          // method shorthand
          // - ({ident(){}})

          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          AST_open(astProp, 'Property');
          AST_setIdent('key', identToken);
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, NOT_ASYNC, IDENT_OPTIONAL, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
          ASSERT(curc !== $$IS_3D, 'this struct does not allow init/defaults');
        }
        else if (curtype === $IDENT) {
          // getter/setter/async shorthand method
          // - ({async ident(){}})
          // - ({get ident(){}})
          // - ({set ident(ident){}})
          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          if (identToken.str !== 'get' && identToken.str !== 'set' && identToken.str !== 'async') THROW('Did not expect another identifier while parsing an object literal property');
          let identToken2 = curtok;
          AST_open(astProp, 'Property');
          AST_setIdent('key', curtok);
          AST_set('kind', identToken.str === 'async' ? 'init' : identToken.str === 'get' ? 'get' : identToken.str === 'set' ? 'set' : 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          ASSERT_skipAny($IDENT, lexerFlags); // TODO: next must be `(`
          if (curc !== $$PAREN_L_28) THROW('Missing method arg paren after ' + identToken +' ' +identToken2.str + '; ' + curtok);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, identToken.str === 'async' ? WAS_ASYNC : NOT_ASYNC, IDENT_REQUIRED, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
          ASSERT(curc !== $$IS_3D, 'this struct does not allow init/defaults');
        }
        else if (curc === $$STAR_2A) {
          // getter/setter with generator
          // - ({get *ident(){}})
          // - ({set *ident(ident){}})
          // (probably async too)

          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          ASSERT_skipAny('*', lexerFlags); // TODO: next must be ident
          if (identToken.str !== 'get' && identToken.str !== 'set') {
            if (identToken.str === 'async') THROW('Cannot make an async generator method'); // TODO: the spec caught up to this and I think this is fine now...
            THROW('Did not expect another identifier while parsing an object literal property');
          }
          let identToken2 = curtok;
          AST_open(astProp, 'Property');
          AST_setIdent('key', curtok);
          AST_set('kind', identToken.str === 'get' ? 'get' : identToken.str === 'set' ? 'set' : 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          ASSERT_skipAny($IDENT, lexerFlags); // TODO: next must be `(`
          if (curc !== $$PAREN_L_28) THROW('Missing method arg paren after ' + identToken +' ' +identToken2.str + '; ' + curtok);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, WAS_GENERATOR, NOT_ASYNC, IDENT_REQUIRED, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
          ASSERT(curc !== $$IS_3D, 'this struct does not allow init/defaults');
        }
        else if ((curtype & $NUMBER) || (curtype & $STRING)) {
          // property names can also be strings and numbers but these cannot be shorthanded
          // number/string keys can still destructure just fine (`({"foo": x} = y)`)
          // - `({async "a b c"(){}});`
          // - `({async 15(){}});`
          // - `({get "a b c"(){}});`
          // - `({get 15(){}});`
          // - `({set "a b c"(x){}});`
          // - `({set 15(x){}});`

          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          if (identToken.str !== 'get' && identToken.str !== 'set' && identToken.str !== 'async') {
            THROW('Did not expect another identifier while parsing an object literal property');
          }

          let litToken = curtok;
          ASSERT_skipRex(litToken.str, lexerFlags); // next is `(`

          if (curc === $$PAREN_L_28) {
            AST_open(astProp, 'Property');
            AST_setLiteral('key', litToken);
            AST_set('kind', identToken.str === 'async' ? 'init' : identToken.str === 'get' ? 'get' : identToken.str === 'set' ? 'set' : 'init'); // only getters/setters get special value here
            AST_set('method', true);
            AST_set('computed', false);
            parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, identToken.str === 'async' ? WAS_ASYNC : NOT_ASYNC, IDENT_OPTIONAL, 'value');
            AST_set('shorthand', false);
            AST_close('Property');
          } else {
            THROW('Object literal async keys that are strings or numbers must be a method: ' + curtok);
          }
          ASSERT(curc !== $$IS_3D, 'this struct does not allow init/defaults');
        }
        else {
          TODO
          ASSERT(curc !== $$IS_3D, TODO);
        }
      }
      else if ((curtype & $NUMBER) || (curtype & $STRING)) {
        // property names can also be strings and numbers but these cannot be shorthanded
        // number/string keys can still destructure just fine (`({"foo": x} = y)`)
        // - `({"a b c": bar});`
        // - `({"a b c"(){}});`
        // - `({"a b c": bar}) => x`
        // - `({15: bar});`
        // - `({15(){}});`
        // - `({15: bar}) => x`

        let litToken = curtok;
        ASSERT_skipRex(litToken.str, lexerFlags); // next is expression

        if (curc === $$COLON_3A) {
          // property value or label, some are destructible:
          // - ({"x": ident,}
          // - ({"x": <array destruct>,}
          // - ({"x": <object destruct>,}
          // - ({"x": ident = expr}
          // - ({"x": <array destruct> = expr,}
          // - ({"x": <object destruct> = expr,}
          // anything else as value is non-destructible

          ASSERT_skipRex(':', lexerFlags); // next is expression

          if (curtype === $IDENT) {
            // ({35: ident
            // can still become ({ident: foo+bar}) which is not destructible, so confirm token after ident
            nameBinding = curtok;
            ASSERT_skipDiv($IDENT, lexerFlags); // this is `{foo: bar` and could be `{foo: bar/x`
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D && curtok.str !== '=') {
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              TODO; // parse remainder of expression starting at ident
            } else {
              AST_open(astProp, 'Property');
              AST_setLiteral('key', litToken);
              AST_set('kind', 'init'); // only getters/setters get special value here
              AST_set('method', false);
              AST_set('computed', false);
              AST_setIdent('value', nameBinding);
              AST_set('shorthand', false);
              AST_close('Property');
            }
          }
          else if (curc === $$SQUARE_L_5B) {
            // ({35: <array destruct>
            AST_open(astProp, 'Property');
            AST_setLiteral('key', litToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            let wasDestruct = parseArrayLiteralPattern(lexerFlags, bindingType, PARSE_INIT, 'value');
            destructible = updateDestructible(destructible, wasDestruct);
            // BUT, could also be ({ident: [foo, bar].join('')}) which is not destructible, so confirm next token
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D && curtok.str !== '=') {
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              TODO; // parse remainder of expression starting at ident
            } else TODO
            AST_set('shorthand', false);
            AST_close('Property');
          }
          else if (curc === $$CURLY_L_7B) {
            TODO
            // ({ident: <object destruct>
            AST_open(astProp, 'Property');
            AST_setLiteral('key', litToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            let wasDestruct = parseObjectLiteralPattern(lexerFlags, bindingType, PARSE_INIT, astProp);
            destructible = updateDestructible(destructible, wasDestruct);
            AST_set('shorthand', false);
            AST_close('Property');
            // BUT, could also be ({ident: {foo:bar}.toString()) which is not destructible, so confirm next token
            if (curc !== $$COMMA_2C && curc !== $$CURLY_R_7D && curtok.str !== '=') {
              destructible = updateDestructible(destructible, CANT_DESTRUCT);
              TODO; // parse remainder of expression starting at ident
            } else TODO
          }
          else {
            TODO
            // something like `({15: 15` is valid, just not destructible
            destructible = updateDestructible(destructible, CANT_DESTRUCT);

            AST_open(astProp, 'Property');
            AST_setLiteral('key', litToken);
            AST_set('kind', 'init'); // only getters/setters get special value here
            AST_set('method', false);
            AST_set('computed', false);
            parseExpression(lexerFlags, 'value');
            AST_set('shorthand', false);
            AST_close('Property');
          }
        }
        else if (curc === $$PAREN_L_28) {
          // method shorthand
          // - ({ident(){}})

          destructible = updateDestructible(destructible, CANT_DESTRUCT);

          AST_open(astProp, 'Property');
          AST_setLiteral('key', litToken);
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, NOT_ASYNC, IDENT_OPTIONAL, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
        } else {
          TODO
          THROW('Object literal keys that are strings or numbers must be a method or have a colon: ' + curtok);
        }

        ASSERT(curc !== $$IS_3D, 'assignments should be parsed as part of the expression');
      }
      else if (curtok.str === '...') {
        // ({...foo
        // Note that this can also be a spread like it is in `({foo, ...bar});`
        // TODO: pretty sure you can do silly stuff like `({...{x, ...y}}) => y` etc (because you can do it for `([...[x, ...y]]) => y`)
        TODO; // parse the rest value
        // TODO: verify name because that would otherwise be checked later
        // exit here, do not parse default
        if (!destructible) TODO,THROW('The spread operator is not allowed here unless this is an arrow (and it was already determined this cannot be the case)');
        // destructible = updateDestructible(destructible, CANT_DESTRUCT);
        TODO
        ASSERT(curc !== $$IS_3D, TODO); // any destructuring should be parsed before returning
        return destructible;
      }
      else if (curc === $$SQUARE_L_5B) {
        // dynamic property (is destructible!)
        // - ({[foo]: x})
        // - ({[foo]() {}})

        // skip dynamic part first becaue we need to figure out whether we're parsing a method
        ASSERT_skipRex('[', lexerFlags); // next is expression
        parseExpression(lexerFlags, astProp);
        skipAnyOrDieSingleChar($$SQUARE_R_5D, lexerFlags); // next is : or (

        AST_wrapClosed(astProp, 'Property', 'key');
        AST_set('kind', 'init'); // only getters/setters get special value here
        AST_set('method', curc === $$PAREN_L_28);
        AST_set('computed', true);

        // assert next char here so we don't over accept
        if (curc === $$PAREN_L_28) {
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, NOT_GENERATOR, NOT_ASYNC, IDENT_OPTIONAL, 'value');
        } else {
          if (curc !== $$COLON_3A) THROW('A computed property name must be followed by a colon or paren');
          skipRexOrDieSingleChar($$COLON_3A, lexerFlags);
          parseExpression(lexerFlags, 'value');
        }
        AST_set('shorthand', false);
        AST_close('Property');
        ASSERT(curc !== $$IS_3D, 'if the array was destructured then that should have been parsed by now');
      }
      else if (curc === $$STAR_2A) {
        // generator shorthand
        // - `({*ident(){}})`
        // - `({*"str"(){}})`
        // - `({*15(){}})`
        // - `({*[expr](){}})`

        destructible = updateDestructible(destructible, CANT_DESTRUCT);

        ASSERT_skipAny('*', lexerFlags); // TODO: next must be ident, number, string, `[`

        if (curtype === $IDENT) {
          // - `({*ident(){}})`
          let identToken2 = curtok;
          AST_open(astProp, 'Property');
          AST_setIdent('key', curtok);
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          ASSERT_skipAny($IDENT, lexerFlags); // TODO: next must be `(`
          if (curc !== $$PAREN_L_28) THROW('Missing method arg paren after * ' +identToken2.str + '; ' + curtok);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, WAS_GENERATOR, NOT_ASYNC, IDENT_REQUIRED, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
        } else if (curtype & ($NUMBER | $STRING)) {
          // - `({*"str"(){}})`
          // - `({*15(){}})`
          let litToken = curtok;
          AST_open(astProp, 'Property');
          AST_setLiteral('key', litToken);
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', false);
          ASSERT_skipAny(litToken.str, lexerFlags); // TODO: next must be `(`
          if (curc !== $$PAREN_L_28) THROW('Missing method arg paren after * `' +litToken.str + '`; ' + curtok);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, WAS_GENERATOR, NOT_ASYNC, IDENT_REQUIRED, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
        } else if (curc === $$SQUARE_L_5B) {
          // - `({*[expr](){}})`
          AST_open(astProp, 'Property');
          ASSERT_skipRex('[', lexerFlags); // expression start
          parseExpression(lexerFlags, 'key');
          skipAnyOrDieSingleChar($$SQUARE_R_5D, lexerFlags); // TODO: next must be (
          AST_set('kind', 'init'); // only getters/setters get special value here
          AST_set('method', true);
          AST_set('computed', true);
          if (curc !== $$PAREN_L_28) THROW('Missing method arg paren after * [...]; ' + curtok);
          parseFunctionAfterKeyword(lexerFlags, NOT_FUNC_DECL, NOT_FUNCEXPR, WAS_GENERATOR, NOT_ASYNC, IDENT_REQUIRED, 'value');
          AST_set('shorthand', false);
          AST_close('Property');
        } else {
          TODO
        }
        ASSERT(curc !== $$IS_3D, 'this struct can not have an init');
      }
      else {
        // ({<?>
        TODO,THROW('Unexpected token, wanted to parse a start of a property in an object literal/pattern');
      }

      // if destructible, the name can not be something like `true` or `new`
      // nameBinding can be undefined here if
      // - dynamic property `{[x]: y}`

      ASSERT(destructible !== CANT_DESTRUCT || nameBinding === undefined, 'if cant destruct then must have a name?');
      // in this case the binding check can force the flag without throwing
      // - `{true}`
      // - `{foo: true}`
      // - `{25: true}`
      // - `{"x": true}
      switch (nameBinding && nameBinding.str) {
        case 'true':
          TODO
          // reserved keyword, not destructible. will throw if current state must destruct
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          break;
        case 'false':
          TODO
          // reserved keyword, not destructible. will throw if current state must destruct
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          break;
        case 'null':
          TODO
          // reserved keyword, not destructible. will throw if current state must destruct
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          break;
        case 'this':
          TODO
          // reserved keyword, not destructible. will throw if current state must destruct
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          break;
        case 'super':
          TODO
          // reserved keyword, not destructible. will throw if current state must destruct
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          break;
        default:
          // regardless of destructible state, if you see something like `typeof` here you have an error
          if (nameBinding) bindingIdentCheck(nameBinding, bindingType, lexerFlags);
      }

      if (curc !== $$COMMA_2C) break;
      ASSERT_skipAny(',', lexerFlags); // TODO: ident, }, [, number, string
    }

    // restore in/template flags (`x${+{}}` would fail if you didn't do this before parsing the closing curly)
    lexerFlags = _lexerFlags;
    skipDivOrDieSingleChar($$CURLY_R_7D, lexerFlags); // ({...} / foo)
    AST_close('ObjectExpression');

    // this is immediately after the top-level object literal closed that we started parsing
    if (skipInit === PARSE_INIT && curc === $$IS_3D && curtok.str === '=') {
      updateDestructible(destructible, MUST_DESTRUCT); // this is to assert the above _can_ be destructed
      // this assignment resets the destructible state
      // for example; `({a = b})` must destruct because of the shorthand. `[...a=b]` can't destruct because rest is only
      // legal on a simple identifier. So combining them you get `[...{a = b} = c]` where the inside must destruct and the outside cannot. (there's a test)
      destructible = MIGHT_DESTRUCT; // now reset

      // the object MUST now be a pattern. Does not need to be an arrow.
      // the outer-most assignment is an expression, the inner assignments become patterns too.
      AST_destruct(_astProp);
      AST_wrapClosed(_astProp, 'AssignmentExpression', 'left');
      AST_set('operator', '=');
      ASSERT_skipRex('=', lexerFlags); // a forward slash after = has to be a regex
      parseExpression(lexerFlags, 'right');
      AST_close('AssignmentExpression');
    }

    return destructible;
  }
  function updateDestructible(a, b) {
    if (a === MIGHT_DESTRUCT) return b;
    if (b === MIGHT_DESTRUCT) return a;
    if (a !== b) THROW('Encountered a struct that would have to and couldnt destruct so it is not destructible, bailing');
    return a;
  }
  function parseArrowableSpreadOrRest(lexerFlags, closingCharOrd, bindingType, groupTopLevel, asyncIdent, astProp) {
    ASSERT(arguments.length === 6, 'want 6 args');
    ASSERT_skipRex('...', lexerFlags); // next is an expression so rex
    if (curc === $$DOT_2E && curtok.str === '...') THROW('Can not rest twice');
    AST_open(astProp, 'SpreadElement');
    let result = _parseArrowableSpreadOrRest(lexerFlags, closingCharOrd, bindingType, groupTopLevel, asyncIdent, 'argument');
    AST_close('SpreadElement');
    return result;
  }
  function _parseArrowableSpreadOrRest(lexerFlags, closingCharOrd, bindingType, groupTopLevel, asyncIdent, astProp) {
    ASSERT(arguments.length === 6, 'expecting 6 args');
    // returns MIGHT_DESTRUCT if the arg is only an ident, returns CANT_DESTRUCT otherwise

    // Arrays:
    // https://tc39.github.io/ecma262/#prod-SpreadElement

    // Bindings, Args, Destructurings: in no production is rest allowing an init:
    // var
    // https://tc39.github.io/ecma262/#prod-VariableStatement
    // https://tc39.github.io/ecma262/#prod-VariableDeclaration
    // https://tc39.github.io/ecma262/#prod-BindingPattern ->
    // let/const
    // https://tc39.github.io/ecma262/#prod-LexicalDeclaration
    // https://tc39.github.io/ecma262/#prod-LexicalBinding
    // https://tc39.github.io/ecma262/#prod-BindingPattern ->
    // binding destructuring:
    // https://tc39.github.io/ecma262/#prod-ArrayAssignmentPattern ->
    // https://tc39.github.io/ecma262/#prod-BindingRestElement
    // https://tc39.github.io/ecma262/#prod-BindingPattern ->
    // this is okay in functions:
    // https://tc39.github.io/ecma262/#prod-FunctionDeclaration
    // https://tc39.github.io/ecma262/#prod-FunctionRestParameter
    // https://tc39.github.io/ecma262/#prod-BindingRestElement
    // https://tc39.github.io/ecma262/#prod-BindingPattern ->
    // -> binding pattern:
    // https://tc39.github.io/ecma262/#prod-BindingPattern
    // this is either [] array or {} object wrapped with no further outer assignments (or anything)

    let destructible = CANT_DESTRUCT; // there's only one case where this becomes a MIGHT_DESTRUCT
    let assignable = IS_ASSIGNABLE; // required for parsing the tail of the arg

    if (curtype === $IDENT) {
      // - `[...x/y];`
      // - `async(...x/y);`   // ugh! TODO
      // - `[...new x]

      let identToken = curtok;
      if (identToken.str === 'true') TODO; // [...true]; -> ok, this will crash, still have to validate it
      skipIdentSafeAndExpensive(lexerFlags);

      if (curtok.str === '=') {
        destructible = MIGHT_DESTRUCT;
        AST_setIdent(astProp, identToken);
      } else {
        if (curc === closingCharOrd) { // || curc === $$COMMA_2C
          destructible = MIGHT_DESTRUCT;
          AST_setIdent(astProp, identToken);
        } else {
          // have to continue parsing here because of the prefix cases (`new`, `typeof` etc)
          assignable = parseValueHeadBodyAfterIdent(lexerFlags, identToken, NOT_NEW_TARGET, astProp);
        }
      }
    }
    else if (curc === $$SQUARE_L_5B) {
      // - `(...[x]) => x`
      // - `[...[x]]`
      // - `[...[x]] = y`
      // - `([...[x]]) => x`
      // - `[...[x]/y]`
      destructible = parseArrayLiteralPattern(lexerFlags, bindingType, SKIP_INIT, astProp);
      assignable = destructible === CANT_DESTRUCT ? NOT_ASSIGNABLE : IS_ASSIGNABLE; // this is valid: `[...{x}=y];`
    }
    else if (curc === $$CURLY_L_7B) {
      // - `(...{x}) => x`
      // - `[...{x}]`
      // - `[...{x}] = y`
      // - `([...{x}]) => x`
      // - `[...{x}/y]`
      // (and object)
      destructible = parseObjectLiteralPattern(lexerFlags, bindingType, SKIP_INIT, astProp);
      assignable = destructible === CANT_DESTRUCT ? NOT_ASSIGNABLE : IS_ASSIGNABLE; // this is valid: `[...{x}=y];`
    }
    else if (curc === closingCharOrd) {
      // `[...]`
      // `(...)`
      THROW('The rest operator is missing an argument');
    }
    else {
      // - `(...<expr>) => x`
      // - function f(... <expr>) {}`
      if (bindingType === BINDING_TYPE_ARG) THROW('The rest arg can only apply to an identifier or array/object pattern arg');

      // - `[.../x//y]`
      // - `[.../x/g/y]`
      parseExpression(lexerFlags, astProp);
      return CANT_DESTRUCT;
    }

    if (curc !== closingCharOrd) {
      if (bindingType === BINDING_TYPE_ARG) {
        if (asyncIdent) {
          destructible = updateDestructible(destructible, CANT_DESTRUCT);
          // dit is de uitzondeirng want nu is het een rest en deze kan expr als rhs hebben. de caller moet vanaf nu non-destructible bijhouden
        } else {
          console.log('rest crashed, closingCharOrd='+String.fromCharCode(closingCharOrd)+', token: ' + curtok);
          if (curtok.str === '=') THROW('The rest argument can not have an initializer');
          else if (curtok.str === ',') THROW('The rest argument must be last and can not have a trailing comma');
          else THROW('The rest argument must the be last parameter');
        }
      }
      if (curc !== $$COMMA_2C) {
        if (curc === $$IS_3D && curtok.str === '=') {
          updateDestructible(destructible, MUST_DESTRUCT); // this is to assert the above _can_ be destructed
        // this assignment resets the destructible state
        // for example; `({a = b})` must destruct because of the shorthand. `[...a=b]` can't destruct because rest is only
        // legal on a simple identifier. So combining them you get `[...{a = b} = c]` where the inside must destruct and the outside cannot. (there's a test)
          destructible = CANT_DESTRUCT;

          // the array MUST now be a pattern. Does not need to be an arrow.
          // the outer-most assignment is an expression, the inner assignments become patterns too.
          AST_destruct(astProp);
          AST_wrapClosed(astProp, 'AssignmentExpression', 'left');
          AST_set('operator', '=');
          ASSERT_skipRex('=', lexerFlags); // a forward slash after = has to be a division
          parseExpression(lexerFlags, 'right');
          AST_close('AssignmentExpression');
          // at this point the end should be reached or another point in the code will throw an error on it
          // TODO: should we assert that here and (can we) throw a nicer contextual error?
        } else {
          updateDestructible(destructible, CANT_DESTRUCT); // TODO: is there a case where destructible = MUST?
          assignable = parseValueTail(lexerFlags, assignable, NOT_NEW_ARG, astProp);
          parseExpressionFromOp(lexerFlags, assignable, LHS_NOT_PAREN_START, astProp);
        }
        destructible = updateDestructible(destructible, CANT_DESTRUCT); // a spread with non-ident arg is not restable so not destructible
      }
    }

    // destructible because the `...` is at the end of the structure and its arg is an ident/array/object and has no tail
    return destructible;
  }


  // <SCRUB AST>
  function logPath() {
    console.log('logPath: ' + _path.map(o=>o.type).join(' '))
  }
  function logTree() {
    console.log('logTree: ' + require('util').inspect(_tree, false, null))
  }
  // </SCRUB AST>

  init();
  let initialLexerFlags = sansFlag(INITIAL_LEXER_FLAGS | ((options_strictMode || goalMode === GOAL_MODULE) ? LF_STRICT_MODE : 0), LF_FOR_REGEX);
  parseTopLevels(initialLexerFlags);

  //tok.deopt();

  return {
    ast:
    // <SCRUB AST>
    _tree
    // </SCRUB AST>
    ,
    tokens: tok.tokens,
    tokenCountSolid: tok.getTokenCountAny(),
    tokenCountAny: tok.getTokenCountSolid(),
  }
}

function getGenericTokenType(type) {
  // the token type is a bitwise flag which allows us to be specific
  // sometimes we just want to quickly know whether the token is a
  // string and not care about it being a single or double quoted string.

  let redundantFlags =
    (($NUMBER_HEX | $NUMBER_DEC | $NUMBER_BIN | $NUMBER_OCT | $NUMBER_OLD | $NUMBER) ^ $NUMBER) |
    (($REGEXU | $REGEX) ^ $REGEX) |
    (($STRING_DOUBLE | $STRING_SINGLE | $STRING) ^ $STRING) |
    (($TICK_BODY | $TICK_HEAD | $TICK_PURE | $TICK_TAIL | $TICK) ^ $TICK);
  // (x|y)^y : the or will first make sure the bits are set (regardless) and the xor then unsets them
  let flag = (type | redundantFlags) ^ redundantFlags;
  //ASSERT((1 << Math.clz(flag)) === flag, 'should only have one bit set');
  return flag;
}

// </BODY>

require['__./zeparser'] = module.exports = { default: ZeParser,
  // this is a re-export but prevents external scripts from also needing to require zetokenizer
  // (okay and in the build it all falls apart, anyways)
  COLLECT_TOKENS_NONE,
  COLLECT_TOKENS_SOLID,
  COLLECT_TOKENS_ALL,

  GOAL_MODULE,
  GOAL_SCRIPT,
};
