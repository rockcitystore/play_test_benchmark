/**
 * Created by root on 16/9/26.
 */
"use strict";

let logger =require('../utils/logger').getLogger('prototype');

var objA = function () {
    var a = 1;
}
objA.prototype.b =1;
var A = new objA();
logger.debug(objA.hasOwnProperty('b'));
logger.debug(objA.hasOwnProperty('a'));
logger.debug(objA.hasOwnProperty('hasOwnProperty'));
logger.debug(A.b);

var objB ={
    b : 1
}
var obj = Object.create(objB);
logger.debug(obj.a);//undefined
logger.debug(objB.hasOwnProperty('b'));//true
