const  mongoose = require("mongoose");
const variant = require("./variant");
const {ObjectId} = mongoose.Schema; 


const variantSchema = new mongoose.Schema({
    variantName:{
        type : String,
        required : true,
    },
    var_image : {
        data : Buffer,
        contentType : String,
        
    },
    image :{
       data : Buffer,
       contentType : String     
    }
},
{timestamps : true});

const Variant = mongoose.model("Variant",variantSchema);

const productSchema = new mongoose.Schema({
    merchant_id : {
        type : ObjectId,
        ref : "User"
    },
    image :{
            
        data : Buffer,
        required :true, 
        contentType : String       
    } ,
    subTitle : {
        type :String,
        trim : true,
        maxlength : 30
    },
    title  : {
        type : String,
        trim : true,
        required: true,
        maxlength : 50
    } ,
    oldPrice : {
        type : String,
        trim : true,

    },
    newPrice : {
        type : String,
        trim : true,
        required : true
    },
    description : {
        type : String,
        trim : 'true',
        maxlength: 300,
        required : true
    },
    variants : [variantSchema],       

},
{timestamps : true});

const Product = mongoose.model("Product",productSchema)

module.exports = {Product,Variant};

