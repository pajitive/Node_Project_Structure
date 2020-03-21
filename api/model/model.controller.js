const model = require('./model.model');

module.exports = {
   
    create:async(req,res)=>{
        try{
            let result = await model.create(req.body);
            if(result){
                res.status(200).send(result);
            }
           }
           catch(e){
              console.log(e.message);
              res.status(500).send('Something went wrong...')
           }
    },

    get:async(req,res)=>{
        try{
            let result = await model.find()
            .populate('brand','name description -_id')
            .populate('category','name description -_id');
            res.status(200).send(result);
        }
        catch(e){
            console.log(e.message);
        }
    },

    updateModel: async(req,res)=>{
     let result = await model.findById(req.body._id)
     .populate('category','name -_id');
     if(result){
         console.log("result===", result.category.name);
         result.category.name = 'Ajeet Mishra';
         result.save();
         res.status(200).send(result);
     }
    }
}