/**
 * Created by root on 16/10/1.
 */
"use strict";
let logger = require('../utils/logger').getLogger('arrow');


let a = ()=>{
    logger.debug(this);
    logger.debug(arguments);

}
let b =function(){
    logger.debug(this);
    logger.debug(arguments);
}




logger.debug(this);//全局
logger.debug(arguments);//全局
a();//继承自外层 即全局
b();//严格模式下是undefined