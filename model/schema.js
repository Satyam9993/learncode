const mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    txtName :  {
        type : String,
        required : "Required"
    },
    txtEmail : {
        type : String
    },
    txtPhone : {
        type : String
    },
    txtMsg : {
        type : String
    }
});

mongoose.model("Contact", ContactSchema);