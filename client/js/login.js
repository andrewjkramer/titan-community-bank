//

"use strict";

//

const login = () => {
  const required = "This field is required.";

  let isValid = true;

  // get values

  let username = $("username").value.toLowerCase();

  let username1 = "";

  let user = "";

  let pwd = $("pwd").value;

  let pwd1 = "";

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
      user = JSON.parse(localStorage.getItem(username));

      username1 = user["username1"];

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
      pwd1 = user["pwd1"];

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

const resetForms = () => {
  resetForm();

  $("username").focus();
};

window.onload = () => {
  $("btnSubmit").onclick = login;

  $("reset_form").onclick = resetForms;

  $("username").focus();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      login();
    }
  });
};
