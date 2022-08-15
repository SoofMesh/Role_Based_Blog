const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/challenge',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB_Connection established...');
}).catch((e)=>{
    console.log(`DB_Connection failed... error: ${e}`);
})