"use strict";

const logger =require('../utils/logger').getLogger(__filename.split("/").pop());


let a = [1,2,3].reduce((x,y)=>{
    return x+y
})
logger.debug(a);

