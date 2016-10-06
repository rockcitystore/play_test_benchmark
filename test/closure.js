/**
 * Created by root on 16/10/1.
 */
"use strict";
let logger = require('../utils/logger').getLogger('closure');

var mult = (function() {
    let cache = {};
    return function(){
        let args = Array.prototype.join.call(arguments, ',');
        logger.debug(arguments);
        if (args in cache) {
            return cache[args]
        }
        let a = 1;
        for (let i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return cache[args] = a;
    }
})();




logger.debug(mult(1,2,3));
logger.debug(mult(1,2,3));