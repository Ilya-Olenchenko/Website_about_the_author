function funonload() {
  document.getElementById('bilbord').hidden = true;
  //setTimeout(sayHi, 10000);
}

function sayHi() {
  document.getElementById('bilbord').hidden = false;
}

function on_close() {
  document.getElementById('bilbord').hidden = true;
  setTimeout(sayHi, 10000);
}

var user_login = new Array(10);
var user_password = new Array(10);
