/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-121.js
 * @description Object.defineProperties - 'value' property of 'descObj' is own accessor property that overrides an inherited accessor property (8.10.5 step 5.a)
 */


function testcase() {
        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "value", {
            get: function () {
                return "inheritedAccessorProperty";
            }
        });

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        Object.defineProperty(descObj, "value", {
            get: function () {
                return "ownAccessorProperty";
            }
        });

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "ownAccessorProperty";

    }
runTestCase(testcase);
