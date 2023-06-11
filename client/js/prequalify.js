//

"use strict";

//

const prequalify = function () {
  let isValid = true;

  const required = "This field is required.";

  let header = "";

  // let html = "";

  const requiredSpan = "<span>This field is required.<span>";

  const requiredSpan2 = "<span>This entry must equal first entry.<span>";

  const msg = "Please review your entries and complete all required fields.";

  // get values

  let emailAddress = $("email_address").value;

  let emailAddress1 = $("email_address1").value;

  let firstName = $("first_name").value;

  let lastName = $("last_name").value;

  let city = $("city").value;

  let state = $("state").value;

  let zipCode = $("zip_code").value;

  let grossIncome = $("gross_income").value;

  let ssn = $("ssn").value;

  let terms_and_conditions = $("terms_and_conditions").checked;

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

const resetForms = function () {
  resetForm();

  $("first_name").focus();
};

window.onload = function () {
  $("btnSubmit").onclick = prequalify;

  $("reset_form").onclick = resetForms;

  $("first_name").focus();
};
