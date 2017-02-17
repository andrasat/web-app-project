var generatePass;
window.onload = function () {
  'use strict';
  var chars = {
      'lower': 'abcdefghijklmnopqrstuvwxyz',
      'capital': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'number': '1234567890',
      'symbol': '!#$%&()*+,-.?@'
    },
    passLength = 12,
    count,
    selectProp,
    pass = '';

  generatePass = function () {

    pass = '';
    document.getElementById('the-pass').innerHTML = '';
    for (let i = 0; i < passLength; i++) {
      count = 0;
      for (let prop in chars) {
        if (Math.random() < 1 / ++count) {
          selectProp = prop;
        }
      }
      pass += chars[selectProp][Math.floor(Math.random() * chars[selectProp].length)];
      console.log(pass);
    }

    document.getElementById('the-pass').innerHTML = 'This is your generated password : ' + pass;
  }


};
