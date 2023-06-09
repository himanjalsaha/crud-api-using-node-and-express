//@desc Get all contacts
// @route GET/api/contacts
const asynhandler = require("express-async-handler")
const Contact = require("../models/contactmodel")

const getcontact = asynhandler( async(req,res)=>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts) {
        res.status(404);  
        throw new Error("contact not found")
    }
    res.status(200).json(contacts)
})

const createcontact = asynhandler( async(req,res)=>{
    console.log(req.body);
    const {name,email,phone} = req.body
    if(!name||!email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact)
})

const updatecontact =asynhandler( async(req,res)=>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts) {
        res.status(404);  
        throw new Error("contact not found")
    }
    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    ); 


    res.status(200).json(updatecontact)
})

const deletecontact = asynhandler( async(req,res)=>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts) {
        res.status(404);  
        throw new Error("contact not found")
    }
    deleteccontact = await Contact.findByIdAndRemove(req.params.id,
        req.body,)
    res.status(200).json(deletecontact)

    



    // res.status(200).json({message : `delete the contact ${req.params.id}`})
})

module.exports = {getcontact,
createcontact,
updatecontact,
deletecontact,} 

