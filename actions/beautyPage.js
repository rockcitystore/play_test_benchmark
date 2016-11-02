/**
 * Created by root on 16/11/01.
 */


let halloween =function(req,res){
    res.render('halloween')
}

module.exports = function (app) {
    app.get("/beauty/halloween", halloween);

};
