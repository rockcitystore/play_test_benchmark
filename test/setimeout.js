for (var i = 0; i < 1; i++) {
    console.log(11);
    setTimeout(function () {
        console.log('async ' + i)
    }, 0)
    setTimeout(function(){console.log('async1000 ' + i)}, 1000)
    console.log(22);
}


