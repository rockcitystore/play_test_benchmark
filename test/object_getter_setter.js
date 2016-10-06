/**
 * Created by root on 16/9/26.
 */

let logger = require('../utils/logger').getLogger(__filename.split("/").pop());


var o = {
    $n: 0,
    get next() {
        this.$n++
        logger.debug('get ' + this.$n);
        return this.$n
    }
    ,
    set next(n) {
        if (n > this.$n) {
            this.$n = n
            logger.debug('set ' + this.$n);
        } else {
            throw ("不能比当前值小 " + this.$n)
        }
    }
}
logger.debug(Object.getOwnPropertyDescriptor(o, 'next'));
o.next = 5
o.next
o.next
o.next = 1

