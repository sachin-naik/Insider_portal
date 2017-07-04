//const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const mongoose = require('mongoose');
// const config = require('./config/database');
// const users = require('./routes/users');
// const requirement = require('./routes/route-requirement');
// const knowledge = require('./routes/knowledge-route');
// const timesheet = require('./routes/route');
// const efforts = require('./routes/route2');
// var conn = mongoose.connection;
// var multer = require('multer');
// var GridFsStorage = require('multer-gridfs-storage');
// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// var gfs = Grid(conn.db);
// Connect To Database
// mongoose.connect(config.database);
 var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
const users = require('./routes/users');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const requirement = require('./routes/route-requirement');
const knowledge = require('./routes/knowledge-route');
const timesheet = require('./routes/route');
const efforts = require('./routes/route2');
var mongoose = require('mongoose');
mongoose.connect('mongodb://172.29.144.74/nodeauth');
var conn = mongoose.connection;
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = Grid(conn.db);

app.use(cors());

/** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });





// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ');
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

// const app = express();



// Port Number
const port = 3000;

// CORS Middleware
// app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
/** Setting up storage using multer-gridfs-storage */
    var storage = GridFsStorage({
        gfs : gfs,
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        },
        /** With gridfs we can store aditional meta-data along with the file */
        metadata: function(req, file, cb) {
            cb(null, { originalname: file.originalname });
        },
        root: 'ctFiles' //root name for collection to store files into
    });

    var upload = multer({ //multer settings for single upload
        storage: storage
    }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

app.get('/file/:filename', function(req, res){
        gfs.collection('ctFiles'); //set collection name to lookup into

        /** First check if file exists */
        gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
            if(!files || files.length === 0){
                return res.status(404).json({
                    responseCode: 1,
                    responseMessage: "error"
                });
            }
            /** create read stream */
            var readstream = gfs.createReadStream({
                filename: files[0].filename,
                root: "ctFiles"
            });
            /** set the proper content type */
            res.set('Content-Type', files[0].contentType)
            /** return response */
            return readstream.pipe(res);
        });
    });


require('./config/passport')(passport);

app.use('/users', users);
app.use('/api', timesheet);
app.use('/api', requirement);
app.use('/api', knowledge);
app.use('/api', efforts);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});