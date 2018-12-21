const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/hero',(req,res)=>{
    res.send('Hero Test Build');
})

app.listen(process.env.PORT || 3000);

module.exports = app;