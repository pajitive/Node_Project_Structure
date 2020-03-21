const category = require('./category.model');

module.exports = {
    create: async(req,res)=>{
        try{
            const result = await category.create(req.body);
            res.status(200).send(result);
        }
        catch(e){
            res.status(500).send(e.message);
        }

    }
}