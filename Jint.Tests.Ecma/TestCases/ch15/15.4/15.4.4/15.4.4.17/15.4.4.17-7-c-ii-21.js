/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-c-ii-21.js
 * @description Array.prototype.some - callbackfn called with correct parameters (kValue is correct)
 */


function testcase() {

        var firstIndex = false;
        var secondIndex = false;

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                firstIndex = (val === 11);
                return false;
            }
            if (idx === 1) {
                secondIndex = (val === 12);
                return false;
            }
        }

        var obj = { 0: 11, 1: 12, length: 2 };

        return !Array.prototype.some.call(obj, callbackfn) && firstIndex && secondIndex;
    }
runTestCase(testcase);
