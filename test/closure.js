/**
 * Created by root on 16/10/1.
 */
"use strict";
const logger = require('../utils/logger').getLogger(__filename.split("/").pop());

var mult = (function () {
    let cache = {};
    return function () {
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


logger.debug(mult(1, 2, 3));
logger.debug(mult(1, 2, 3));

logger.debug('--------------------');


var scope = 'globalScope';
function checkScope() {
    var scope = 'localScope';

    function f() {
        logger.debug(scope);
        return scope;
    }

    return f
}
checkScope()()//this is fuck closure
function checkScopeA() {
    var scope = 'localScope';

    function f() {
        logger.debug(scope);
        return scope;
    }

    return f()
}
checkScopeA()


logger.debug('--------------------');


function counter() {
    var n = 0;
    return {
        count: function () {
            logger.debug(n);
            return n++
        }
        , reset: function () {
            n = 0
            logger.debug(n);
            return n
        }
    }
}


var a =counter(),b=counter();
counter().count();
counter().count();
counter().count();
a.count()
a.count()
a.count()
b.count()
b.count()
b.reset();



logger.debug('--------------------');



function constfuncs(){//P187
    var f =[];
    for(var i =0;i<10;i++){
        f[i] = function(){return i}
    }
    return f;
}
var c = constfuncs();
logger.debug(c.toString());
logger.debug(c[5]());