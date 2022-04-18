const express = require('express')
const route = express.Router()
const Contact = require('../model/Contact')
route.post('/adduser' , async (req , res)=>{
     const user = req.body
    try {
        const contact = await new Contact(user) 
        await contact.save()
        res.status(200).send({ "added with succes" : contact   })
    } catch (error) {
       console.log(error) 
    }
})


route.get('/getuser' , async(req , res)=>{
    try {
       const contact = await Contact.find()
       res.status(200).send({ "users" : contact   })
    } catch (error) {
     
    }
})

route.put('/edituser/:id' , async(req, res)=>{
    const {id} = req.params
    const {name , email , phone} = req.body
    try {
        const contact = await  Contact.findByIdAndUpdate(id, {$set :{name , email , phone}})
        res.status(200).send({"user updated" : contact})
    } catch (error) {
        console.log(error)
    }
})

route.delete('/deleteuser/:id' , async(req , res)=>{
    const {id} =req.params
    try {
         await Contact.findByIdAndDelete(id)
        res.status(200).send("user delted" )
    } catch (error) {
        console.log(error)
    }
})
module.exports = route