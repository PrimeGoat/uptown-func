/******************
 * YOUR CODE HERE *
 ******************/

const call = function(name) {
  name();
}

const callTwice = function(name) {
  name();
  name();
}

const callXTimes = function(name, count) {
  for(let i = 0; i < count; i++) {
    name();
  }
}

const returnFromFunc = function(func) {
  return func();
}

const modifyString = function(str, func) {
  return func(str);
}

const modifyNumber = modifyString;

const modifyAnything = modifyString;

const twoFuncs = function(func1, func2) {
  return func2(func1());
}

const threeFuncs = function(func1, func2, func3) {
  return func3(func2(func1()));
}

const twoValues = function(val1, val2, func) {
  return func(val1, val2);
}

const twoValuesRTL = function(val1, val2, func) {
  return func(val2, val1);
}

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
