/**
 * Created by root on 16/9/26.
 */

const logger =require('../utils/logger');
logger.debug(111);
Function.prototype.bind = function(){
    var self =this;
    var context = [].shift.call(arguments);
    var args = [].slice.call(arguments);
    return function () {
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
    }
};

var obj = {
    name:'bar'
};

var func = function(a,b,c,d){
    logger.debug(this.name);
    logger.debug(a,b,c,d);
    logger.debug(arguments);
}.bind(obj,1,2);

func.bind(3,4);