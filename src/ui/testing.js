// Based on https://github.com/ElemeFE/element/blob/dev/test/unit/util.js

import Vue from 'vue';
import ElementUI from 'element-ui'
import moxios from 'moxios'


Vue.use(ElementUI)
moxios.delay = 0

let id = 0;

const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

exports.vmDestroy = function(vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
};

exports.vmInit = function(Compo, options, mounted = false) {
  const elm = createElm();
  const Ctor = Vue.extend(Compo);
  return new Ctor(options).$mount(mounted === false ? null : elm);
};

exports.triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

exports.triggerClick = function(elm, ...opts) {
  exports.triggerEvent(elm, 'mousedown', ...opts);
  exports.triggerEvent(elm, 'mouseup', ...opts);

  return elm;
};
