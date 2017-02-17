// Declare generatePass() outside window
var generatePass;

window.onload = function () {

  // Declare variables
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

  // Define function
  generatePass = function () {

    pass = ''; // reset pass
    document.getElementById('the-pass').innerHTML = ''; // reset element

    // Iterate length to insert char 1 by 1
    for (let i = 0; i < passLength; i++) {
      count = 0; // reset randomize prop counter
      for (let prop in chars) {
        if (Math.random() < 1 / ++count) {
          selectProp = prop;
        }
      }
      pass += chars[selectProp][Math.floor(Math.random() * chars[selectProp].length)];
      console.log(pass);
    }

    document.getElementById('the-pass').innerHTML = 'This is your generated password : ' + '<span>' + pass + '</span>';
  }


};
