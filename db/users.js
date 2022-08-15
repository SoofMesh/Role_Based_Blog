const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const user = new mongoose.Schema({
			
    username: {
        type: String,
        unique: true,
        required: true  
    },
    email: {
        type: String,
        unique: true,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    posts: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'post'
    }],
    roles: {
        type: Array,
        required: true  
    }
});

    const User = new mongoose.model("user", user); 

    async function create()
    {
        if(await User.findOne({roles:'admin'})){
            return
        }
        else{
            const password = await bcrypt.hash('abc', 10);
            const user = new User({username: 'admin1', email: 'admin1@gmail.com', password});
            user.roles.push('superAdmin')
                
            await user.save();
        }        
    }
     create();

        module.exports = User;