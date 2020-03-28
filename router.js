const error = require('./common/error');

module.exports = app=>{
   app.use('/api/brand',require('./api/brand'));
   app.use('/api/category',require('./api/category'));
   app.use('/api/model',require('./api/model'));
   app.use('/api/user',require('./api/user'));

   app.use(error);
}