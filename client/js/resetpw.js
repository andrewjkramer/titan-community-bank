//

"use strict";

//

const resetPW = () => {
  const required = "This field is required.";

  const required2 = "This entry must equal first entry.";

  let isValid = true;

  // get values

  let username = $("username").value.toLowerCase();

  let username1 = "";

  let user = "";

  // let pwd = $("pwd").value;

  let newPwd = $("new_pwd").value;

  let newPwd1 = $("new_pwd1").value;

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

  // current password
  // if (pwd == "") {
  //   $("pwd_error").firstChild.nodeValue = required;
  //   isValid = false;
  // } else if ((user = JSON.parse(localStorage.getItem(username)))) {
  //   if (user["username1"] == null) {
  //     $("pwd_error").firstChild.nodeValue = required;
  //     isValid = false;
  //   } else {
  //      pwd1 = user["pwd1"];
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
    user = {
      username1: username,

      pwd1: newPwd1,
    };

    localStorage.setItem(username1, JSON.stringify(user));

    $("form").submit();
  }
};

const resetForms = () => {
  resetForm();

  $("username").focus();
};

window.onload = () => {
  $("btnSubmit").onclick = resetPW;

  $("reset_form").onclick = resetForms;

  $("username").focus();
};
