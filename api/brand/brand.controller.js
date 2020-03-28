const brand = require('./brand.model');

module.exports = {
    create: async(req,res,next)=>{
        try{
        let result = await brand.create(req.body);
        res.status(200).send(result);
        }
        catch(e){
           next(e);
        }
    }
}