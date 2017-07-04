const express= require('express');
const router=express.Router();

//const Contact =require('../models/contacts');

const Workpackage =require('../models/workpackage');
const Usecase =require('../models/usecase');
const Estimation =require('../models/estimation');



//retriving Workpackage
router.get('/workpackages',(req, res, next)=>{

    Workpackage.find(function(err,workpackages){
        res.json(workpackages);
    })
    // res.send('retriving the contact list');
});

//retriving usecases
router.get('/usecases',(req, res, next)=>{

    Usecase.find(function(err,usecases){
        res.json(usecases);
    })
    // res.send('retriving the contact list');
});

//retriving estimations
router.get('/estimations',(req, res, next)=>{

    Estimation.find(function(err,estimations){
        res.json(estimations);
    })
    // res.send('retriving the contact list');
});




//adding workpackage 
router.post('/workpackage',(req, res, next)=>{
 //logic
 let newWorkpackage= new Workpackage({
     name:req.body.name,
     project:req.body.project,
     usecase:req.body.usecase,
     recievedDate:req.body.recievedDate,
     pStartDate:req.body.pStartDate,
     pEndDate:req.body.pEndDate,
     aStartDate:req.body.aStartDate,
     aEndDate:req.body.aEndDate,
     status:req.body.status
 });

 newWorkpackage.save((err,workpackage)=>{
    if(err)
    {
        res.json({msg:'Failed to add workpackage'});
    }
    else
    {
          res.json({msg:'Workpackage added successfully'});
    }
 })
});
//adding usecase 
router.post('/usecase',(req, res, next)=>{
 //logic
 let newUsecase= new Usecase({
     workpackage:req.body.workpackage,
     uid:req.body.uid,
     description:req.body.description,
     eHours:req.body.eHours,
     pStartDate:req.body.pStartDate,
     pEndDate:req.body.pEndDate,
     aStartDate:req.body.aStartDate,
     aEndDate:req.body.aEndDate,
     assignedTo:req.body.assignedTo,
     ready:req.body.ready
 });

 newUsecase.save((err,usecase)=>{
    if(err)
    {
        res.json({msg:'Failed to add usecase details'});
    }
    else
    {
          res.json({msg:'Usecase details added successfully'});
    }
 })
});

//delete
router.delete('/workpackage/:id',(req, res, next)=>{
 //logic

 Workpackage.remove({_id:req.params.id}, function(err,result){
     if(err)
    {
        res.json(err);
    }
    else
    {
          res.json(result);
    } 
 
    });

});

//delete usecases
router.delete('/usecase/:id',(req, res, next)=>{
 //logic

 Usecase.remove({_id:req.params.id}, function(err,result){
     if(err)
    {
        res.json(err);
    }
    else
    {
          res.json(result);
    } 
 
    });

});

//updating workpackage 
router.put('/workpackage',(req, res, next)=>{

 Workpackage.update({name:req.body.name},{name:req.body.name,  project:req.body.project, usecase:req.body.usecase,recievedDate:req.body.recievedDate, pStartDate:req.body.pStartDate, pEndDate:req.body.pEndDate,aStartDate:req.body.aStartDate,  aEndDate:req.body.aEndDate,   status:req.body.status},(err,result)=>{
    if(err)
    {
        res.json({msg:'Failed to update workpackage'});
    }
    else
    {
          res.json({msg:'Workpackage updated successfully'});
    }
 })
});


//updating usecase
router.put('/usecase',(req, res, next)=>{

 Usecase.update({uid:req.body.uid},{workpackage:req.body.workpackage,  uid:req.body.uid, description:req.body.description, eHours:req.body.eHours, pStartDate:req.body.pStartDate, pEndDate:req.body.pEndDate, aStartDate:req.body.aStartDate,  aEndDate:req.body.aEndDate,   assignedTo:req.body.assignedTo, ready:req.body.ready},(err,result)=>{
    if(err)
    {
        res.json({msg:'Failed to update usecase'});
    }
    else
    {
          res.json({msg:'usecase updated successfully'});
    }
 })
});

 efforts=["Static HTML Design","java Design","GUI Angular Development","GUI  Integration with spring services","process Engine",
 "Release bundle creation & CL,Scm","Documentation & Contigency","Total Design & Coding efforts"];
//updating estimations
router.put('/estimation',(req, res, next)=>{
// for(i=0; i<8; i++){
// console.log(efforts[i]);

 Estimation.update({name:req.body.name},{distribution:req.body.distribution,  pHours:req.body.pHours, 
     pDays:req.body.pDays},(err,result)=>{
    if(err)
    {
        res.json({msg:'Failed to update usecase'+err});
    }
    else
    {
          res.json({msg:'usecase updated successfully'});
    }
 })
});

//adding estimation
router.post('/estimation',(req, res, next)=>{
 //logic
 let newEstimation= new Estimation({
    name:req.body.name,
    distribution:req.body.distribution,
    pHours:req.body.pHours,
    pDays:req.body.pDays

 });

 newEstimation.save((err,estimation)=>{
    if(err)
    {
        res.json({msg:'Failed to add usecase details'});
    }
    else
    {
          res.json({msg:'Usecase details added successfully'});
    }
 })
});


module.exports=router;
