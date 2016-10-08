"use strict";

const logger =require('../utils/logger').getLogger(__filename.split("/").pop());


let a = [1,2,3].reduce((x,y)=>{
    return x+y
})
logger.debug(a);
logger.debug('-----------------------');

let array =[1,2,3]
let b =function(x,y){
    logger.debug(arguments);
    logger.debug(Array.isArray(arguments));//可判断出类数组对象
    logger.debug(Array.isArray(array));//可判断出类数组对象

    logger.debug(arguments.toString());//可判断出类数组对象
    logger.debug(array.toString());//可判断出类数组对象

    // arguments.join(',')//可判断出类数组对象 类数组对象没有继承Array.prototype //arguments.join is not a function

    logger.debug(Array.prototype.splice(arguments,1,1));
}
b(1,3)
logger.debug(typeof array);