const express = require('express');
const app = express();
const auth = require('./routes/auth');
const post = require('./routes/post');
const voiture = require('./routes/voiture');


app.use('/auth',auth);
app.use('/post',post);
app.use('/voiture',voiture);






app.listen(8000,()=>{
    console.log('server is running on port 8000....')
})