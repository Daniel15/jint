/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-4-15.js
 * @description Allow reserved words as property names by set function within an object, verified with hasOwnProperty: package, protected, static
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set package(value){
                test0 = value;
            },
            get package(){
                return test0;
            },
            set protected(value){
                test1 = value;
            },
            get protected(){
                return test1
            },
            set static(value){
                test2 = value;
            },
            get static(){
                return test2;
            }
        };      
        var arr = [
            'package',
            'protected',
            'static'  
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
