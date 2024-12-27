import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    fullName:  {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        min : 8,
        max: 40,
        required: true
        
    },
    password: {
        type: String,
        min : 8,
        max: 40,
        required: true
        
    },

})

 const User = mongoose.model("User",UserSchema)



 export default User