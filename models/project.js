const mongoose= require('mongoose');

const ProjectSchema=mongoose.Schema({
      username:{
        type:String,
        required:true,
        unique: true
    },
    projecttitle:{
        type:String,
        required:true,
        unique: true
    },

     projectdescription:{
        type:String,
        required:true
    },
    benefit:{
        type:String,
        required:true
    },
    experience:{
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
    details:{
        type:String,
        required:true
    },
     gptype:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
   technology:{
        type:String,
        required:true
    },
    phase:{
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
    projectname:{
        type:String,
        required:true
    },
       account:{
        type:String,
        required:true
    },
         buname:{
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

const Project=module.exports=mongoose.model('Project',ProjectSchema);