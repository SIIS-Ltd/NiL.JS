// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The internal helper function CharacterRange takes two CharSet parameters A and B and performs the
 * following:
 * If A does not contain exactly one character or B does not contain exactly one character then throw
 * a SyntaxError exception
 *
 * @path ch15/15.10/15.10.2/15.10.2.15/S15.10.2.15_A1_T38.js
 * @description Checking if execution of "/[d-G\c0001]/.exec("1")" leads to throwing the correct exception
 */

//CHECK#1
try {
  $ERROR('#1.1: /[d-G\\c0001]/.exec("1") throw SyntaxError. Actual: ' + (new RegExp("[d-G\\c0001]").exec("1")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[d-G\\c0001]/.exec("1") throw SyntaxError. Actual: ' + (e));
  }
}

