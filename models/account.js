const mongoose= require('mongoose');

const AccountSchema=mongoose.Schema({
      username:{
        type:String,
        required:true,
        unique: true
    },
    accounttitle:{
        type:String,
        required:true,
        unique: true
    },

     accountdescription:{
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
      benefittype:{
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
   deliverymanager:{
        type:String,
        required:true
    },
       gaccount:{
        type:String,
        required:true
    },
         gbuname:{
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

const Account=module.exports=mongoose.model('Account',AccountSchema);