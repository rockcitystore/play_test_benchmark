for (var i = 0; i < 10; i++) {
    console.log(111);
    setTimeout(()=> {
        console.error("error:" + i);
        console.log("log:" + i)
    }, 1000)
    console.log(222);
}