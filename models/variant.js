const mongoose = required('mongoose');


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
module.exports = mongoose.model("Variant",variantSchema);