let express = require('express');
let mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://hemantharadhya3:moxdanSP7jTHShXG@cluster0.ulvmcmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) => {
        console.log('Successfully connected to mongo DB');
    })
    .catch((err) => {
        console.log('Error connecting to mongo DB');
    });

    const app = express();
    constserver = app.listen(4000,()=>{
        console.log('Connected to port 4000');
    })