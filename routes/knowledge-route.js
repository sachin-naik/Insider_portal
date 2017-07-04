const express= require('express');
const router=express.Router();

const Technical =require('../models/technical');
const Lesson =require('../models/lesson');
const Project =require('../models/project');
const Account =require('../models/account');


//retriving technical
router.get('/technicals/:uname',(req, res, next)=>{

    Technical.find({username: req.params.uname},function(err,tech){
        res.json(tech);
    })
});

//adding technical
router.post('/technical',(req, res, next)=>{
 //logic
 let newTechnical= new Technical({
     username:req.body.username,
     techlibtitle:req.body.techlibtitle,
     techlibdescription:req.body.techlibdescription,
     benefit:req.body.benefit,
     subcategory:req.body.subcategory,
     domain:req.body.domain,
     account:req.body.account,
     buname:req.body.buname,
     remarks:req.body.remarks
 });

 newTechnical.save((err,technical)=>{
    if(err)
    {
   
       res.json({msg:'Failed to add technicalstuff'});
    }
    else
    {
          res.json({msg:'technicalstuff added successfully'});
    }
 })
});


//retriving lesson
router.get('/lessons/:uname',(req, res, next)=>{

    Lesson.find({username: req.params.uname},function(err,less){
        res.json(less);
    })
});

//adding lesson
router.post('/lesson',(req, res, next)=>{
 //logic
 let newLesson= new Lesson({
     username:req.body.username,
     lessontitle:req.body.lessontitle,
     lessondescription:req.body.lessondescription,
     challanges:req.body.challanges,
     impact:req.body.impact,
     effort:req.body.effort,
     cost:req.body.cost,
     overcome:req.body.overcome,
     area:req.body.area,
     domain:req.body.domain,
     projectid:req.body.projectid,
     laccount:req.body.laccount,
     lbuname:req.body.lbuname,
     location:req.body.location,
     remarks:req.body.remarks
 });

 newLesson.save((err,lesson)=>{
    if(err)
    {
   
       res.json({msg:'Failed to add lesson'+err});
    }
    else
    {
          res.json({msg:'lesson added successfully'});
    }
 })
});


//retriving project
router.get('/projects/:uname',(req, res, next)=>{

    Project.find({username: req.params.uname},function(err,proj){
        res.json(proj);
    })
});

//adding project
router.post('/project',(req, res, next)=>{
 //logic
 let newProject = new Project ({
     username:req.body.username,
     projecttitle:req.body.projecttitle,
     projectdescription:req.body.projectdescription,
     benefit:req.body.benefit,
     experience:req.body.experience,
     effort:req.body.effort,
     cost:req.body.cost,
     details:req.body.details,
     gptype:req.body.gptype,
     area:req.body.area,
     technology:req.body.technology,
     phase:req.body.phase,
     domain:req.body.domain,
     projectid:req.body.projectid,
     projectname:req.body.projectname,
     account:req.body.account,
     buname:req.body.buname,
     location:req.body.location,
     remarks:req.body.remarks
 });

 newProject .save((err,project)=>{
    if(err)
    {
   
       res.json({msg:'Failed to add project' +err});
    }
    else
    {
          res.json({msg:'project added successfully'});
    }
 })
});

//retriving account
router.get('/accounts/:uname',(req, res, next)=>{

   Account.find({username: req.params.uname},function(err,acct){
        res.json(acct);
    })
});

//adding Account
router.post('/account',(req, res, next)=>{
 //logic
 let newAccount = new Account({
     username:req.body.username,
     accounttitle:req.body.accounttitle,
     accountdescription:req.body.accountdescription,
     benefit:req.body.benefit,
     experience:req.body.experience,
     benefittype:req.body.benefittype,
     impact:req.body.impact,
     effort:req.body.effort,
     cost:req.body.cost,
     details:req.body.details,
     gptype:req.body.gptype,
     area:req.body.area,
     technology:req.body.technology,
     phase:req.body.phase,
     domain:req.body.domain,
     deliverymanager:req.body.deliverymanager,
     gaccount:req.body.gaccount,
     gbuname:req.body.gbuname,
     location:req.body.location,
     remarks:req.body.remarks
 });

 newAccount .save((err,account)=>{
    if(err)
    {
   
       res.json({msg:'Failed to add account' +err});
    }
    else
    {
          res.json({msg:'account added successfully'});
    }
 })
});

module.exports=router;
