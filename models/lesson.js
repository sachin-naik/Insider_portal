const mongoose= require('mongoose');

const LessonSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    lessontitle:{
        type:String,
        required:true,
        unique: true
    },

     lessondescription:{
        type:String,
        required:true
    },

    challanges:{
        type:String,
        required:true
    },
      impact:{
        type:String,
        required:true
    },
    effort:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    overcome:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
      domain:{
        type:String,
        required:true
    },
    projectid:{
        type:String,
        required:true
    },
       laccount:{
        type:String,
        required:true
    },
         lbuname:{
        type:String,
        required:true  
    },
    location:{
        type:String,
        required:true
    },
       remarks:{
        type:String,
        required:true
    
    }
});

const Lesson=module.exports=mongoose.model('Lesson',LessonSchema);