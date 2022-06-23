let map = new Map();

map.set("admin", "admin");
map.set("1", "1");

jQuery(function ($) {

  $('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

});

function funonload() {
  document.getElementById('ex').hidden = true;
  document.getElementById('bilbord').hidden = true;
}

function load_bild_bord() {
  document.getElementById('reg_form').hidden = true;
  document.getElementById('bilbord').hidden = false;
  document.getElementById('ex').hidden = false;
}

function sayHi() {
  document.getElementById('bilbord').hidden = false;
}

function on_close() {
  document.getElementById('bilbord').hidden = true;
  setTimeout(sayHi, 10000);
}

function ex() {
  window.location.href = "index.html"
}


function registration_func() {
  var username_reg = document.getElementById('username_reg').value;
  var password_reg = document.getElementById('password_reg').value;
  var chek = false;

  for (var i of map.keys()) {
    if (i == username_reg) {
      chek = true;
    }
  }
  if (chek == false) {
    map.set(username_reg, password_reg);
    alert("Новый аккаунт '" + username_reg + "'створено!");
    load_bild_bord();
  }
  if (chek == true) {
    alert("Аккаунт вже '" + username_reg + "'не існує.");
  }
}

function authorization() {
  var username_log = document.getElementById('username_log').value;
  var password_log = document.getElementById('password_log').value;
  var chek = false;

  map.forEach((value, key, map) => {
    if (username_log == key && password_log == value) {
      load_bild_bord();
      chek = true;
    }
  });

  if (chek == false) {
    alert("Не вірно вказаний логін або пароль!");
  }
}