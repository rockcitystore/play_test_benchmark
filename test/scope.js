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

logger.debug("-------------------------");

let b = ()=>{
    logger.debug(i);
    // let i =0;//i is not defined
    var i =0;//undefined

    (()=>{
        logger.debug(i);
    })()
}
b();
logger.debug("-------------------------");

let scope = 'gg'
let c =() =>{
    let scope = 'll'
    let f  = ()=>{

    }
}

logger.debug("-------------------------");


var foo = 1;
function bar() {
     foo=10;
    return;
    function foo() {//等同于var foo ＝ function(){}

    }
}
bar();
logger.debug(foo);//1


logger.debug("-------------------------");

var x =3;
var foo ={
    x:2,
    baz:{
        x:1,
        bar:function () {
            logger.debug(this.x);
            return this.x;
        }
    }
}
var go = foo.baz.bar;
// console.debug(go());
// logger.debug(foo.baz.bar());

logger.debug("-------------------------");

var x   = 4,
    obj = {
        x: 3,
        bar: function() {
            var x = 2;
            logger.debug(this.x);
            setTimeout(function() {
                var x = 1;
                logger.debug(this.x);
            }, 1000);
        }
    };
obj.bar();


logger.debug("-------------------------");

