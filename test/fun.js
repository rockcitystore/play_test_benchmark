// "use strict";

const logger =require('../utils/logger').getLogger(__filename.split("/").pop());


var a ={
    name:'a',
    f1:function(){

        logger.debug(this);//作为方法method被调用时 this指向当前对象
        return this;
    },
    f2:function () {
        function f3() {
            logger.debug(this);//作为嵌套函数被调用时 this指向严格模式undefined 严格模式下指向全局对象
        }
        f3();
        return this;
    }
}
a.f1().f2();


var B =function(){
    logger.debug(arguments.callee);// [Function: B]
    logger.debug(this);//作为嵌套函数被调用时 this指向严格模式undefined 严格模式下指向全局对象
}
B();

var c =new a.f1()//作为构造函数调用时 this指向新创建的这个对象即c