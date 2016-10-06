/**
 * Created by root on 16/9/26.
 */
"use strict";

let logger =require('../utils/logger').getLogger('object');
let util =require('util');

//按值传递
var x =1;
var y= x;
y=2;
logger.debug(x);


//按引用传递
var a ={
    x:1
}
var b =a;
b.x=2;
logger.debug(a.x);

//检测属性
logger.debug("x" in a);
logger.debug(a.hasOwnProperty('x'));
logger.debug(a.propertyIsEnumerable('x'));
logger.debug(Object.keys(a))
logger.debug(Object.getOwnPropertyNames(a))



