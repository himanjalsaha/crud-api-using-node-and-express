const errorhandler = (err,req,res,next) =>{
    const statuscode = res.statusCode ? res.statusCode : 500;
    res.json({message : err.message , stacktree: err.stack })
    switch(statusCode){
        case 404:
            res.json({title:"Not found" , message : err.message , stacktree: err.stack })
            break;
        case 400:
            res.json({title:"Validation failed" , message : err.message , stacktree: err.stack })
            break;
        default:
            break;    



    }


}

module.exports = errorhandler