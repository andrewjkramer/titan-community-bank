//

"use strict";

//

// getElementbyID function

var $ = function (id) {
  return document.getElementById(id);
};

// resetForm function

var resetForm = function () {
  $("form").reset();

  const collection = document.getElementsByClassName("form_error");

  for (let i = 0; i < collection.length; i++) {
    collection[i].innerHTML = " ";
  }
};

// regex library

// contact

var emailExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

var nameExp = /^[a-z ,.'-]+$/i;

// addresses

var cityExp =
  /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/i;

var stateExp = /^[a-z ,.'-]+$/i;

var zipExp = /^[0-9]{5}(?:-[0-9]{4})?$/;

// misc

var numExp = /^\d+$/;

// var twoDecExp = /^[0-9]*(\.[0-9]{0,2})?$/;

var twoDecExp = /^(?=.*[1-9].*$)\d{0,14}(?:\.\d{0,2})?$/;

var ssnExp = /^\d+$/;

// var usernameExp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
var usernameExp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]$/;

var pwdExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

// validate library

// contact

var emailTest = function (id) {
  return emailExp.test(id);
};

var nameTest = function (id) {
  return nameExp.test(id);
};

// addresses

var cityTest = function (id) {
  return cityExp.test(id);
};

var stateTest = function (id) {
  return stateExp.test(id);
};

var zipTest = function (id) {
  return zipExp.test(id);
};

// misc

var numTest = function (id) {
  return numExp.test(id);
};

var twoDecTest = function (id) {
  return twoDecExp.test(id);
};

var pwdTest = function (id) {
  return pwdExp.test(id);
};

var usernameTest = function (id) {
  return usernameExp.test(id);
};

var ssnTest = function (id) {
  return ssnExp.test(id);
};

// error message library

// var required = "This field is required.";

// var header = "";

// var html = "";

// var requiredSpan = "<span>This field is required.<span>";

// var requiredSpanEmail2 = "<span>This entry must equal first entry.<span>";

// var msg = "Please review your entries and complete all required fields.";

// lastModified footer

// format date as dd-mmm-yy
// example: 12-Jan-99

function date_ddmmmyy(date) {
  var d = date.getDate();

  var m = date.getMonth() + 1;

  var y = date.getYear();

  // handle different year values
  // returned by IE and NS in
  // the year 2000.

  if (y >= 2000) {
    y -= 2000;
  }

  if (y >= 100) {
    y -= 100;
  }

  // could use splitString() here
  // but the following method is
  // more compatible

  var mmm =
    1 == m
      ? "Jan"
      : 2 == m
      ? "Feb"
      : 3 == m
      ? "Mar"
      : 4 == m
      ? "Apr"
      : 5 == m
      ? "May"
      : 6 == m
      ? "Jun"
      : 7 == m
      ? "Jul"
      : 8 == m
      ? "Aug"
      : 9 == m
      ? "Sep"
      : 10 == m
      ? "Oct"
      : 11 == m
      ? "Nov"
      : "Dec";

  return "" + (d < 10 ? "0" + d : d) + "-" + mmm + "-" + (y < 10 ? "0" + y : y);
}

// get last modified date of the
// current document.

function date_lastmodified() {
  var lmd = document.lastModified;

  var s = "Unknown";

  var d1;

  // check if we have a valid date
  // before proceeding

  if (0 != (d1 = Date.parse(lmd))) {
    s = "" + date_ddmmmyy(new Date(d1));
  }

  return s;
}

// finally display the last modified date
// as DD-MMM-YY

// document.write(
//   "This page was updated on " +
//   date_lastmodified() );

//

$("last_modified").innerHTML = date_lastmodified() + ".";

// testing
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
