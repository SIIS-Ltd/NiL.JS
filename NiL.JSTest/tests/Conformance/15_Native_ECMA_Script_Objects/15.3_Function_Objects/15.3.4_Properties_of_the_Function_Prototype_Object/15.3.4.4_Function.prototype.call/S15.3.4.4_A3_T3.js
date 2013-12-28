// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T3;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Argument at call function is void 0;
*/

Function("this.field=\"battle\"").call(void 0);

//CHECK#1
if (this["field"] !== "battle") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}
