const express = require("express")
const router = new express.Router();

const MenRanking = require("../models/mans");



router.post("/mens",async(req,res)=>{
    try {
        // we are hardcoding these which is not good 
        // const addingMensRecord = new MenRanking({
        //     "ranking":1,
        //     "name":"Arjun Prajapatii",
        //     "dob":"1 jan 2001",
        //     "country":"INDIA",
        //     "score":"1000",
        // })
        // addingMensRecord.save();


        const addingMensRecord = new MenRanking(req.body);
        console.log(req.body);
        const createMens = await addingMensRecord.save();
        res.status(201).send(createMens)

    } catch (error) {
        res.send(400).send()
    }
})
router.get("/mens",async(req,res)=>{
    try {
        const getMens = await MenRanking.find({}).sort({"ranking":1});

        res.status(200).send(getMens)

    } catch (error) {
        res.send(400).send()
    }
})
// we will handle get request of individual man 
router.get("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const getMens = await MenRanking.findById(_id);

        res.status(200).send(getMens)

    } catch (error) {
        res.send(400).send()
    }
})

router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateMens = await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});

        res.status(200).send(updateMens)

    } catch (error) {
        res.send(500).send()
    }
})

router.delete("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const deleteMens = await MenRanking.findByIdAndDelete(_id);

        res.status(200).send(deleteMens)

    } catch (error) {
        res.send(500).send()
    }
})

module.exports = router;