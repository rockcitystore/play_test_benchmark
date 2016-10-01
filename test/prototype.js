/**
 * Created by root on 16/9/26.
 */
"use strict";

let logger =require('../utils/logger').getLogger('prototype');

var objA = function () {
    var a = 1;
}

var objB ={
    b : 1
}

var obj = Object.create(objB);
logger.debug(obj.a);

logger.debug(Object.getOwnPropertyDescriptor(objA));