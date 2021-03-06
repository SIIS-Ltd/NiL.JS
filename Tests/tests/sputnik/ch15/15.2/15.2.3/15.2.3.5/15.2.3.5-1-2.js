/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-1-2.js
 * @description Object.create TypeError is not thrown if 'O' is null
 */


function testcase() {
        try {
            Object.create(null);
            return true;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
