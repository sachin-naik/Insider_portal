const mongoose= require('mongoose');

const WorkpackageSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },

     project:{
        type:String,
        required:true
    },

     usecase:{
        type:String,
        required:true
    },
      recievedDate:{
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
        status:{
        type:String
       
    }
});

const Workpackage=module.exports=mongoose.model('Workpackage',WorkpackageSchema);