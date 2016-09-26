/**
 * Created by bar on 16/8/29.
 */

'use strict';

const constant = require("../../utils/constant.js");
const logger = require("../../utils/logger").getLogger('base_test');
const util = require("util");
const Promise = require('bluebird');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;

let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push(Math.random());
}
suite
    .add('forIn', ()=> {
    let tem = [];
    for (let i in arr) {
        tem.push(arr[i]);
    }
    return tem;
})
    .add('forlength++', ()=> {
        let tem = [];
        for (let i = 0, al = arr.length; i < al; i++) {
            tem.push(arr[i]);
        }
        return tem;
    })
    .add('forlength--', ()=> {
        let tem = [];
        for (let i = arr.length, al = 0; i > al; i--) {
            tem.push(arr[i]);
        }
        return tem;
    })
    .add('recursion--', () => {
        let tem = [];
        let al = arr.length-1;
        let t = (i) => {
            if (i === 0){
                return tem;
            }else{
                tem.push(arr[i]);
                return t(al--);
            }
        };
        t(al);
    })
    .add('foreach', ()=> {
        let tem = [];
        arr.forEach((i)=>{
            tem.push(i);
        })
        return tem;
    })
    .add('forlength;', ()=> {
        let tem = [];
        for (let i = 0,a; a = arr[i++]; ) {
            tem.push(a);
        }
        return tem;
    })



    .on('cycle', (event)=> {
        logger.debug(String(event.target));
    })
    .on('complete', function () {
        logger.debug('Fastest is:' + this.filter('fastest').map('name'));
    })
    .run();
