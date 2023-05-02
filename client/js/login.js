//

"use strict";

//

var login = function () {
  var isValid = true;

  var required = "This field is required.";

  // get values

  var username = $("username").value.toLowerCase();

  var pwd = $("pwd").value;

  // test input and setup localStorage

  // username

  if (username == "") {
    $("username_error").firstChild.nodeValue = required;

    isValid = false;
  } else if ((user = JSON.parse(localStorage.getItem(username)))) {
    if (user["username1"] == null) {
      $("username_error").firstChild.nodeValue = required;

      isValid = false;
    } else {
      var user = JSON.parse(localStorage.getItem(username));

      var username1 = user["username1"];

      $("username_error").firstChild.nodeValue = "";
    }
  }

  // password

  if (pwd == "") {
    $("pwd_error").firstChild.nodeValue = required;

    isValid = false;
  } else if ((user = JSON.parse(localStorage.getItem(username)))) {
    if (user["username1"] == null) {
      $("pwd_error").firstChild.nodeValue = required;

      isValid = false;
    } else {
      var pwd1 = user["pwd1"];

      $("pwd_error").firstChild.nodeValue = "";
    }
  }

  // validation

  // email

  if (emailTest(username) == false) {
    $("username_error").firstChild.nodeValue = required;

    isValid = false;
  } else if (username != username1) {
    $("username_error").firstChild.nodeValue = "This username does not exist.";

    isValid = false;
  } else {
    $("username_error").firstChild.nodeValue = "";
  }

  // password

  if (pwdTest(pwd) == false) {
    $("pwd_error").firstChild.nodeValue = required;

    isValid = false;
  } else if (pwd != pwd1) {
    $("pwd_error").firstChild.nodeValue = "This password does not match.";

    isValid = false;
  } else {
    $("pwd_error").firstChild.nodeValue = "";
  }

  // if all valid....

  if (isValid == true) {
    $("form").submit();
  }
};

var resetForms = function () {
  resetForm();

  $("username").focus();
};

window.onload = function () {
  $("btnSubmit").onclick = login;

  $("reset_form").onclick = resetForms;

  $("username").focus();

  document.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      login();
    }
  });
};
