//

"use strict";

//

var prequalify = function () {
  var isValid = true;

  var required = "This field is required.";

  var header = "";

  var html = "";

  var requiredSpan = "<span>This field is required.<span>";

  var requiredSpan2 = "<span>This entry must equal first entry.<span>";

  var msg = "Please review your entries and complete all required fields.";

  // get values

  var emailAddress = $("email_address").value;

  var emailAddress1 = $("email_address1").value;

  var firstName = $("first_name").value;

  var lastName = $("last_name").value;

  var city = $("city").value;

  var state = $("state").value;

  var zipCode = $("zip_code").value;

  var grossIncome = $("gross_income").value;

  var ssn = $("ssn").value;

  var terms_and_conditions = $("terms_and_conditions").checked;

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

  // emailAddress1

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

  // firstName

  if (nameTest(firstName) == false) {
    $("first_name_error").firstChild.nodeValue = required;

    firstName = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("first_name_error").firstChild.nodeValue = "";
  }

  // lastName

  if (nameTest(lastName) == false) {
    $("last_name_error").firstChild.nodeValue = required;

    lastName = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("last_name_error").firstChild.nodeValue = "";
  }

  // city

  if (cityTest(city) == false) {
    $("city_error").firstChild.nodeValue = required;

    city = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("city_error").firstChild.nodeValue = "";
  }

  // state

  if (stateTest(state) == false) {
    $("state_error").firstChild.nodeValue = "" + "This field is required.";

    state = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("state_error").firstChild.nodeValue = "";
  }

  // zipCode

  if (zipTest(zipCode) == false) {
    $("zip_code_error").firstChild.nodeValue = required;

    zipCode = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("zip_code_error").firstChild.nodeValue = "";
  }

  // grossIncome

  if (numTest(grossIncome) == false) {
    $("gross_income_error").firstChild.nodeValue = required;

    grossIncome = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("gross_income_error").firstChild.nodeValue = "";
  }

  // ssn

  if (ssnTest(ssn) == false) {
    $("ssn_error").firstChild.nodeValue = required;

    ssn = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("ssn_error").firstChild.nodeValue = "";

    ssn = "****";
  }

  // terms_and_conditions

  if (terms_and_conditions == false) {
    $("terms_and_conditions_error").firstChild.nodeValue =
      "This box must be checked.";

    terms_and_conditions = requiredSpan;

    header = msg;

    isValid = false;
  } else {
    $("terms_and_conditions_error").firstChild.nodeValue = "";
  }

  // if all valid....

  if ((isValid == true) & (grossIncome >= 45000)) {
    $("form").submit();

    alert(
      "Congratulations! You are pre-qualified for a loan. A representative will contact you soon."
    );

    resetForm();
  } else if ((isValid == true) & (grossIncome < 45000)) {
    $("form").submit();

    alert("We're sorry, you do not qualify for a loan at this time.");

    resetForm();
  }
};

var resetForms = function () {
  resetForm();

  $("first_name").focus();
};

window.onload = function () {
  $("btnSubmit").onclick = prequalify;

  $("reset_form").onclick = resetForms;

  $("first_name").focus();
};
