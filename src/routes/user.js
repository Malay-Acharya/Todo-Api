const express = require('express');
const router = express.Router();
const User = require("../models/usermodel");
const bcryptjs = require('bcryptjs');

router.post('/register', async (req,res)=>{
    const {username, email, password} = req.body;
    try{
        let userExist = await User.findOne({email: email});
        if(userExist){
            res.json({
                success: false
            });
        }
        else{
            console.log("HELO");
            let user = new User();
            user.username = username;
            user.email = email;
        
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt);

            await user.save();
            res.json({
                success: true,
                user: user
            });
        }
    }catch(e){
        res.send(e);
    }
});

module.exports= router;


