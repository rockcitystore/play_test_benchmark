// "use strict";

const logger =require('../utils/logger').getLogger(__filename.split("/").pop());

//作为方法method被调用时
var a ={
    name:'a',
    f1:function(){
        logger.debug(this.name);//作为方法method被调用时 this指向当前对象即a
        logger.debug('-------');
        return this;
    },
    f2:function () {
        logger.debug(this.name);
        function f3() {
            logger.debug(this.name);//普通函数有自己的this this指向严格模式undefined 严格模式下指向全局对象
            logger.debug('-------');
        }
        f3();
        return this;
    }
    ,
    f3:function () {
        logger.debug(this.name);
         let f3 = () =>{
            logger.debug(this.name);//箭头函数没有自己的this 被调用时 this指向外层作用域
             logger.debug('-------');
         }
        f3();
        return this;
    }
    ,f4:()=>{
        logger.debug(this);//todo f4的外层作用域是?
        return this;
    }
}
a.f1().f2().f3().f4();

logger.debug('--------------------');
var B =function(){
    logger.debug(this.name);//作为函数被调用时 this指向严格模式undefined 严格模式下指向全局对象
    logger.debug(arguments.callee);// [Function: B]
}
B();
logger.debug('--------------------');

var c =new a.f1()//作为构造函数调用时 this指向新创建的这个对象即c

logger.debug('--------------------');

var d = (function(x){
    logger.debug(x);
    if(x<=1) return 1;
    return x * arguments.callee(x-1)//匿名函数中递归调用自身
})(7);
logger.debug('--------------------');

// var e = (function(x){
//     logger.debug(x);
//     if(x<=1) return 1;
//     return e(x-1)// e is not a function
// })(7)
// logger.debug('--------------------');

var d = function () {
    this.name ='d';
    (()=>{
        logger.debug(this.name);
    })();
    var df = function () {
        logger.debug(this.name);
    }
    df()
}
d()


