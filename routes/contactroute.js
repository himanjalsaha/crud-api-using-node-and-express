const express = require("express")
const router = express.Router();
const {getcontact,createcontact,updatecontact,deletecontact,} = require("../controller/contactcontroller")
router.route("/:id").get(getcontact);

router.route("/").post(createcontact)


router.route("/:id").put(updatecontact)

router.route("/:id").delete(deletecontact)
 
    // router.route("/:id").delete((req,res)=>{
    //     res.status(200).json({message : `delete contacts for ${req.params.id}`})
    // }) 

    module.exports = router; 