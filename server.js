const express = require("express");
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const cohortRoutes = require("./controllers/cohort");
app.use('/cohorts',cohortRoutes) ;

app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.post('/',(req,res)=>{
    res.status(405).send('Not allowed');    
})


module.exports = app;