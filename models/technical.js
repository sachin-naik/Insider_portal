const mongoose= require('mongoose');

const TechnicalSchema=mongoose.Schema({
     username:{
        type:String,
        required:true,
        unique: true
    },
    techlibtitle:{
        type:String,
        required:true,
        unique: true
    },

     techlibdescription:{
        type:String,
        required:true
    },

    benefit:{
        type:String,
        required:true
    },
      subcategory:{
        type:String,
        required:true
    },
      domain:{
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
       remarks:{
        type:String,
        required:true
    
    }
});

const Technical=module.exports=mongoose.model('Technical',TechnicalSchema);