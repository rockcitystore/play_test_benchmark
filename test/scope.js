"use strict";

const logger =require('../utils/logger').getLogger(__filename.split("/").pop());

var a = function (o) {
 var i = 0;
    if(typeof o == "object"){
        var j =0;
        for(var k =0;k<10;k++){
            // logger.debug(k);
        }
        for(let n =0;n<10;n++){
            // logger.debug(n);
        }
        logger.debug(k);//10
        // logger.debug(n);// n is not defined
    }
    logger.debug(j);//undefined
    // logger.debug(m);// m is not defined

}
// a({});
// a();


let b = ()=>{
    logger.debug(i);
    // let i =0;//i is not defined
    var i =0;//undefined

    (()=>{
        logger.debug(i);
    })()
}
b();

let scope = 'gg'
let c =() =>{
    let scope = 'll'
    let f  = ()=>{

    }
}