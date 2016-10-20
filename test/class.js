/**
 * Created by root on 16/10/19.
 */
const logger = require('../utils/logger').getLogger(__filename.split("/").pop());

function inherit(p) {
    if (p == null) throw TypeError();
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {
    }

    f.prototype = p;
    return new f();
}
//例9-1 工厂方法创建一个 对象
function range(from, to) {
    var r = inherit(range.m);
    r.from = from;
    r.to = to;
    return r;
}
range.m = {
    includes: function (x) {
        let cb = this.from <= x && x <= this.to;
        return cb;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")"
    }
}

// var r = range(1, 3);
// logger.debug(r.includes(2));
// ;
// r.foreach(console.log);
// console.log(r);

//例9-2 构造函数方法 创建一个 对象
function Range(param) {
    this.from = param.from;
    this.to = param.to;
}

Range.prototype.includes = function (x) {
    let cb = this.from <= x && x <= this.to;
    return cb;
};
Range.prototype.foreach = function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};
Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")"
};

var r = new Range({from: 1, to: 3});
logger.debug(r.includes(2));
r.foreach(console.log);
console.log(r);

