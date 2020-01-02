
module.exports.postCreate = function(req, res, next){

    var errors = [];
    if(req.body.name === ""){
        errors.push("Enter name");
    }
    if(req.body.age === ""){
        errors.push("Enter age");
    }
    if(errors.length > 0){
        res.render('user/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}