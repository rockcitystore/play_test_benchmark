for (var i = 0; i < 3; i++) {
    console.log(11);
    setTimeout(function () {
        console.log('async ' + i)
    }, 0)
    setTimeout(console.log('sync ' + i), 1000)
    console.log(22);
}


