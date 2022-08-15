const mongoose = require("mongoose")

const Post = new mongoose.Schema({			
    title: {
        type: String,        
        required: true  
    },
    text: {
        type: String,
        required: true  
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },    
    date: {
        type: Date,
        default: Date.now()
    }
});

    const aPost = new mongoose.model("post", Post); 
    module.exports = aPost