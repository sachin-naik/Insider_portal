const express = require('express');
const router = express.Router();

//const Contact =require('../models/contacts');

const AddTask = require('../models/addtasks');
const BookTask = require('../models/booktasks');



//retriving for AddTask
router.get('/addtasks', (req, res, next) => {

    AddTask.find(function(err, addtask) {
            res.json(addtask);
        })
        // res.send('retriving the contact list');
});

//retriving  for BookTask
router.get('/booktasks', (req, res, next) => {

    BookTask.find(function(err, booktask) {
            res.json(booktask);
        })
        // res.send('retriving the contact list');
});

// router.get('/booktasks',(req, res, next)=>{

//     BookTask.find.(function(err,booktask){
//         res.json(booktask);
//     })
//     // res.send('retriving the contact list');
// });




//adding task in AddTask 
router.post('/addtask', (req, res, next) => {
    //logic
    let newTask = new AddTask({
        workpackage: req.body.workpackage,

        usecase: req.body.usecase,
        task: req.body.task,
        status: req.body.status
    });

    newTask.save((err, addtask) => {
        if (err) {
            res.json({ msg: 'Failed to add task details' + err });
        } else {
            res.json({ msg: 'Tasks details added successfully' });
        }
    })
});
//adding booktask 
router.post('/booktask', (req, res, next) => {
    //logic
    let newBookTask = new BookTask({
        workpackages: req.body.workpackages,
        tasks: req.body.tasks,
        usecases: req.body.usecases,
        psdate: req.body.psdate,
        pcdate: req.body.pcdate,
        asdate: req.body.asdate,
        acdate: req.body.acdate,
        ehours: req.body.ehours,
        actuals: req.body.actuals,
        trem: req.body.trem,
        review: req.body.review
    });

    newBookTask.save((err, booktask) => {
        if (err) {
            res.json({ msg: 'Failed to add booking details ' + err });
        } else {
            res.json({ msg: 'Booking details added successfully' });
        }
    })
});

//delete for add task
router.delete('/addtask/:id', (req, res, next) => {
    //logic

    AddTask.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

//delete for book task
router.delete('/booktask/:id', (req, res, next) => {
    //logic

    BookTask.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

//updating for add task
router.put('/addtask', (req, res, next) => {

    AddTask.update({ usecase: req.body.usecase }, {
        workpackage: req.body.workpackage,

        usecase: req.body.usecase,
        task: req.body.task,
        status: req.body.status
    }, (err, result) => {
        if (err) {
            res.json({ msg: 'Failed to update adding task details' });
        } else {
            res.json({ msg: 'Adding Task details updated successfully' });
        }
    })
});


//updating book task
router.put('/booktask', (req, res, next) => {

    BookTask.update({ usecases: req.body.usecases }, {
        workpackages: req.body.workpackages,
        tasks: req.body.tasks,
        usecases: req.body.usecases,
        psdate: req.body.psdate,
        pcdate: req.body.pcdate,
        asdate: req.body.asdate,
        acdate: req.body.acdate,
        ehours: req.body.ehours,
        actuals: req.body.actuals,
        trem: req.body.trem,
        review: req.body.review
    }, (err, result) => {
        if (err) {
            res.json({ msg: 'Failed to update book tasks' });
        } else {
            res.json({ msg: 'Booking tasks updated successfully' });
        }
    })
});


module.exports = router;