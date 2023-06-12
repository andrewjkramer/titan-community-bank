//

"use strict";

//

// getElementbyID function

const $ = (id) => document.getElementById(id);

// resetForm function

const resetForm = () => {
  $("form").reset();

  const collection = document.getElementsByClassName("form_error");

  for (let i = 0; i < collection.length; i++) {
    collection[i].innerHTML = " ";
  }
};

// regex library

// contact

const emailExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const nameExp = /^[a-z ,.'-]+$/i;

// addresses

const cityExp =
  /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/i;

const stateExp = /^[a-z ,.'-]+$/i;

const zipExp = /^[0-9]{5}(?:-[0-9]{4})?$/;

// misc

const numExp = /^\d+$/;

// const twoDecExp = /^[0-9]*(\.[0-9]{0,2})?$/;

const twoDecExp = /^(?=.*[1-9].*$)\d{0,14}(?:\.\d{0,2})?$/;

const ssnExp = /^\d{4}$/;

// const usernameExp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const usernameExp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]$/;

const pwdExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

// validate library

// contact

const emailTest = (id) => emailExp.test(id);

const nameTest = (id) => nameExp.test(id);

// addresses

const cityTest = (id) => cityExp.test(id);

const stateTest = (id) => stateExp.test(id);

const zipTest = (id) => zipExp.test(id);

// misc

const numTest = (id) => numExp.test(id);

const twoDecTest = (id) => twoDecExp.test(id);

const pwdTest = (id) => pwdExp.test(id);

const usernameTest = (id) => usernameExp.test(id);

const ssnTest = (id) => ssnExp.test(id);

// error message library

// const required = "This field is required.";

// const header = "";

// const html = "";

// const requiredSpan = "<span>This field is required.<span>";

// const requiredSpanEmail2 = "<span>This entry must equal first entry.<span>";

// const msg = "Please review your entries and complete all required fields.";

// lastModified footer

// format date as dd-mmm-yy
// example: 12-Jan-99

const date_ddmmmyy = (date) => {
  let d = date.getDate();

  let m = date.getMonth() + 1;

  let y = date.getYear();

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

  const mmm =
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
};

// get last modified date of the
// current document.

const date_lastmodified = () => {
  const lmd = document.lastModified;

  let s = "Unknown";

  let d1;

  // check if we have a valid date
  // before proceeding

  if (0 != (d1 = Date.parse(lmd))) {
    s = "" + date_ddmmmyy(new Date(d1));
  }

  return s;
};

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
