"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeButton = undefined;

var _counter = require("../constants/counter.js");

var HomeButton = exports.HomeButton = function HomeButton(homebuttonvalue) {
  return {
    type: _counter.HOMEBUTTON,
    homebuttonvalue: homebuttonvalue
  };
};