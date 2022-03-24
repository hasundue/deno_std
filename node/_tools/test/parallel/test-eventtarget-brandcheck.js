// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 16.13.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

// Flags: --expose-internals
'use strict';

require('../common');
const assert = require('assert');

const {
  Event,
  EventTarget,
  NodeEventTarget,
} = require('internal/event_target');

[
  'target',
  'currentTarget',
  'srcElement',
  'type',
  'cancelable',
  'defaultPrevented',
  'timeStamp',
  'returnValue',
  'bubbles',
  'composed',
  'eventPhase',
].forEach((i) => {
  assert.throws(() => Reflect.get(Event.prototype, i, {}), {
    code: 'ERR_INVALID_THIS',
  });
});

[
  'stopImmediatePropagation',
  'preventDefault',
  'composedPath',
  'cancelBubble',
  'stopPropagation',
].forEach((i) => {
  assert.throws(() => Reflect.apply(Event.prototype[i], [], {}), {
    code: 'ERR_INVALID_THIS',
  });
});

[
  'addEventListener',
  'removeEventListener',
  'dispatchEvent',
].forEach((i) => {
  assert.throws(() => Reflect.apply(EventTarget.prototype[i], [], {}), {
    code: 'ERR_INVALID_THIS',
  });
});

[
  'setMaxListeners',
  'getMaxListeners',
  'eventNames',
  'listenerCount',
  'off',
  'removeListener',
  'on',
  'addListener',
  'once',
  'emit',
  'removeAllListeners',
].forEach((i) => {
  assert.throws(() => Reflect.apply(NodeEventTarget.prototype[i], [], {}), {
    code: 'ERR_INVALID_THIS',
  });
});