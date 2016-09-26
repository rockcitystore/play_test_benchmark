/**
 * Created by bar on 4/13/16.
 */


var Promise = require('bluebird');
var validator = require('../utils/validatorUtils');
var constant = require("../utils/constant.js");
var util =require("util");
var tool = require('../utils/tool');
var apiService = require('../services/apiService_p');
var fs = Promise.promisifyAll(require("fs"));
var md5 =require('../utils/md5');
var tokens =require('../member_mobiledrivers').RECORDS;
var items =require('../items').RECORDS;
var itemsLen = items.length;
var tokensLen = tokens.length;

//var logger = require("../utils/logger");

module.exports = function(err,where) {
        if(typeof err == 'object'){
            if(err.code && err.code  ==  'ETIMEDOUT') return Promise.resolve(509);
            if(err.code && err.code  ==  'ESOCKETTIMEDOUT')  return Promise.resolve(510);
            console.error( 'object ' + where);
            console.error(err);
            console.log(err.code);
            return Promise.resolve(505);
        }else if(typeof err == 'number'){
            return Promise.resolve(err);
        }else if(typeof err == 'string'){
            console.error('string '+ where);
            console.error(err);
            return Promise.resolve(507);
        }else{
            console.error(where);
            console.log(typeof err);
            console.error(err);
            return Promise.resolve(508);
        }

}