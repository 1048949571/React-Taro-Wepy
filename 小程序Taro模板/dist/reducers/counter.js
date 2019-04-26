"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

var _counter = require("../constants/counter.js");

var INITIAL_STATE = {
  homebuttonvalue: ""
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {
    case _counter.HOMEBUTTON:
      return Object.assign({}, state, { homebuttonvalue: action.homebuttonvalue });

    default:
      return state;
  }
}