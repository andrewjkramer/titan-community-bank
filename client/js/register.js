//

"use strict";

//

const register = () => {
  const required = "This field is required.";

  const requiredSpan = "<span>This field is required.<span>";

  const requiredSpan2 = "<span>This entry must equal first entry.<span>";

  const msg = "Please review your entries and complete all required fields.";

  let isValid = true;

  let header = "";

  // let html = "";

  // get email address values

  let emailAddress = $("email_address").value.toLowerCase();

  let emailAddress1 = $("email_address1").value.toLowerCase();

  // get username values

  let username1 = "";

  let user = "";

  // get password values

  let pwd = $("pwd").value;

  let pwd1 = $("pwd1").value;

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // check if username already exists

  let emailX = emailAddress;

  let userExist = JSON.parse(localStorage.getItem(emailX));

  if ((emailX = userExist)) {
    alert("This account already exists, please login.");

    window.open("login.html", "_self");

    return;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // validate

  // emailAddress

  if (emailTest(emailAddress) == false) {
    $("email_address_error").firstChild.nodeValue = required;

    emailAddress = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("email_address_error").firstChild.nodeValue = "";
  }

  // emailAddress2

  if (emailTest(emailAddress1) == false) {
    $("email_address1_error").firstChild.nodeValue = required;

    emailAddress1 = requiredSpan;

    header = msg;

    isValid = false;
  } else if (emailAddress != emailAddress1) {
    $("email_address1_error").firstChild.nodeValue =
      "This entry must equal first entry.";

    emailAddress1 = requiredSpan2;

    header = msg;

    isValid = false;
  } else {
    $("email_address1_error").firstChild.nodeValue = "";
  }

  // pwd

  if (pwdTest(pwd) == false) {
    $("pwd_error").firstChild.nodeValue = required;

    pwd = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("pwd_error").firstChild.nodeValue = "";
  }

  // pwd1

  if (pwdTest(pwd1) == false) {
    $("pwd1_error").firstChild.nodeValue = required;

    pwd1 = requiredSpan;

    header = msg;

    isValid = false;
  } else if (pwd != pwd1) {
    $("pwd1_error").firstChild.nodeValue = "This entry must equal first entry.";

    pwd1 = requiredSpan2;

    header = msg;

    isValid = false;
  } else {
    $("pwd1_error").firstChild.nodeValue = "";
  }

  // if all valid....

  if (isValid == true) {
    username1 = emailAddress;

    user = {
      username1: emailAddress,

      pwd1: pwd1,
    };

    localStorage.setItem(username1, JSON.stringify(user));

    $("form").submit();
  }
};

const resetForms = () => {
  resetForm();

  $("email_address").focus();
};

window.onload = () => {
  $("btnSubmit").onclick = register;

  $("reset_form").onclick = resetForms;

  $("email_address").focus();
};
