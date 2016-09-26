/**
 * Created by root on 16/9/26.
 */
"use strict";

let logger =require('../utils/logger').getLogger('bind');

//自写
// Function.prototype.bind = function(){
//     var self =this;
//     logger.debug(arguments);
//     var context = [].shift.call(arguments);
//     logger.debug(context);
//     var args = [].slice.call(arguments);
//     logger.debug(args);
//     return function () {
//         logger.debug(`inner: ${JSON.stringify(arguments)}`);
//         return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
//     }
// };

var obj = {
    name:'bar'
};

var func = function(a,b,c,d){
    // logger.debug(this.name);
    // logger.debug(a,b,c,d);
    logger.debug(arguments);
}.bind(obj,1,2);
func();
func(3,4);
