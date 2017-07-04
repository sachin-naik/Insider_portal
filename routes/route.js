const express = require('express');
const router = express.Router();
module.exports = router;

//const Login = require('../models/login');
const Timesheet = require('../models/timesheet');


//get timesheet
router.get('/timesheets/:uname',(req,res,next)=>{
    //res.send('Retrieving contacts');
    Timesheet.find({"username":req.params.uname},(err,contacts)=>{
        res.json(contacts);
    })
});


//post timesheet
router.post('/timesheet',(req,res,next)=>{
    //logic to add
    let newTimesheet = new Timesheet({
        username: req.body.username,
        workpackage: req.body.workpackage,
        task: req.body.task,
        hours: req.body.hours,
        date: req.body.date,
    });

    newTimesheet.save((err,contact)=>{
        if(err)
        {
            res.json({msg : 'failed to add contact'});
        }
        else{
            res.json({msg : 'contact added successfully'});
        }
    });

});


//update timesheet
router.put('/timesheet/',(req,res,next)=>{
    //logic to delete
    Timesheet.update({username: req.body.username,date : req.body.date},{workpackage: req.body.workpackage,task: req.body.task,hours: req.body.hours,},(err,result)=>{
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});


//delete timesheet
router.delete('/timesheet/:uname/:date/:task',(req,res,next)=>{
    //logic to delete
    Timesheet.remove({username: req.params.uname, task : req.params.task,date: req.params.date},(err,result)=>{
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});