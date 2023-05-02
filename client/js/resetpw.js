//

"use strict";

//

var resetPW = function () {
  var isValid = true;

  var required = "This field is required.";

  var required2 = "This entry must equal first entry.";

  // get values

  var username = $("username").value.toLowerCase();

  // var pwd = $("pwd").value;

  var newPwd = $("new_pwd").value;

  var newPwd1 = $("new_pwd1").value;

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

  // current password

  // if (pwd == "") {
  //   $("pwd_error").firstChild.nodeValue = required;

  //   isValid = false;
  // } else if ((user = JSON.parse(localStorage.getItem(username)))) {
  //   if (user["username1"] == null) {
  //     $("pwd_error").firstChild.nodeValue = required;

  //     isValid = false;
  //   } else {
  //     var pwd1 = user["pwd1"];

  //     $("pwd_error").firstChild.nodeValue = "";
  //   }
  // }

  // password

  if (newPwd == "") {
    $("new_pwd_error").firstChild.nodeValue = required;

    isValid = false;
  } else if ((user = JSON.parse(localStorage.getItem(username)))) {
    if (user["username1"] == null) {
      $("new_pwd_error").firstChild.nodeValue = required;

      isValid = false;
    } else {
      $("new_pwd_error").firstChild.nodeValue = "";
    }
  }

  // validate

  // username

  if (emailTest(username) == false) {
    $("username_error").firstChild.nodeValue = required;

    isValid = false;
  } else if (username != username1) {
    $("username_error").firstChild.nodeValue = "This username does not exist.";

    isValid = false;
  } else {
    $("username_error").firstChild.nodeValue = "";
  }

  // current Pwd

  // if (pwdTest(pwd) == false) {
  //   $("pwd_error").firstChild.nodeValue = required;

  //   isValid = false;
  // } else if (pwd != pwd1) {
  //   $("pwd_error").firstChild.nodeValue = "This password does not match.";

  //   isValid = false;
  // } else {
  //   $("pwd_error").firstChild.nodeValue = "";
  // }

  // newPwd

  if (pwdTest(newPwd) == false) {
    $("new_pwd_error").firstChild.nodeValue = required;

    isValid = false;
  } else {
    $("new_pwd_error").firstChild.nodeValue = "";
  }

  // newPwd1

  if (pwdTest(newPwd1) == false) {
    $("new_pwd1_error").firstChild.nodeValue = required;

    isValid = false;
  } else if (newPwd != newPwd1) {
    $("new_pwd1_error").firstChild.nodeValue =
      "This entry must equal first entry.";

    newPwd1 = required2;

    isValid = false;
  } else {
    $("new_pwd1_error").firstChild.nodeValue = "";
  }

  // if all valid....

  if (isValid == true) {
    var user = {
      username1: username,

      pwd1: newPwd1,
    };

    localStorage.setItem(username1, JSON.stringify(user));

    $("form").submit();
  }
};

var resetForms = function () {
  resetForm();

  $("username").focus();
};

window.onload = function () {
  $("btnSubmit").onclick = resetPW;

  $("reset_form").onclick = resetForms;

  $("username").focus();
};
