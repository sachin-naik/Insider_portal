const mongoose= require('mongoose');

const EstimationSchema=mongoose.Schema({
    name:{
        type:String
       
     
    },

     distribution:{
        type:String
       
    },

     pHours:{
        type:String
    },
     pDays:{
        type:String
    }
    //  html:{ type:String }, htmlPhours:{ type:String }, htmlPdays:{ type:String },
    //  java:{ type:String }, javaPhours:{ type:String }, javaPdays:{ type:String },
    //  angular:{ type:String }, angularPhours:{ type:String }, angularPdays:{ type:String },
    //  spring:{ type:String }, springPhours:{ type:String }, springPdays:{ type:String },
    //  process:{ type:String }, processPhours:{ type:String }, processPdays:{ type:String },
    //  release:{ type:String }, releasePhours:{ type:String }, releasePdays:{ type:String },
    //  document:{ type:String }, documentPhours:{ type:String }, documentPdays:{ type:String },
    //  totalDesign:{ type:String }, totalDesignPhours:{ type:String }, totalDesignPdays:{ type:String }
});

const estimation=module.exports=mongoose.model('Estimation',EstimationSchema);