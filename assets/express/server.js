//TO create server
const express = require('express');
const app = express();
app.listen(3002);
app.get('/',(req,res) => {
    //res.send('<p>Hi Home Page </p>');
    res.sendFile('./index.html', {root:__dirname});
});
