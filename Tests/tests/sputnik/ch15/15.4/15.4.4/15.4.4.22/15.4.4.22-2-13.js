/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-2-13.js
 * @description Array.prototype.reduceRight applied to the Array-like object that 'length' is inherited accessor property without a get function
 */


function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return curVal > 10;
        }

        var proto = {};
        Object.defineProperty(proto, "length", {
            set: function () { },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[0] = 11;
        child[1] = 12;

        return Array.prototype.reduceRight.call(child, callbackfn, 111) === 111 && !accessed;
    }
runTestCase(testcase);
