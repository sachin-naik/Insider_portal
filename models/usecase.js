const mongoose= require('mongoose');

const UsecaseSchema=mongoose.Schema({
    workpackage:{
        type:String,
        required:true
     
    },

     uid:{
        type:String,
        required:true,
        unique: true
    },

     description:{
        type:String
    },
     eHours:{
        type:String,
        required:true
    },
      pStartDate:{
        type:String,
        required:true
    },
       pEndDate:{
        type:String,
        required:true
    },
         aStartDate:{
        type:String    
    },
       aEndDate:{
        type:String
    },
        assignedTo:{
        type:String
    },
        ready:{
        type:String
    }
});

const Usecase=module.exports=mongoose.model('Usecase',UsecaseSchema);