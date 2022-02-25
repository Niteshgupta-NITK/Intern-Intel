const express = require("express");
const router = new express.Router();
require("../db/mongoose");
const Feed = require("../models/feeds");
const auth = require("../middlewares/auth");
router.post("/feed",auth, async (req, res) => {
    try {
        const feed = new Feed({
            ...req.body,
            owner:req.user._id
        });
        const saved = await feed.save();
        res.status(200).send(saved);
    } catch (e) {
        res.status(400).send(e);
    }
});

//sorted ,paginated data tasks
router.get("/feeds",auth, async (req, res) => {
    const match ={}
    const sort={}
    if(req.query.completed){
        match.completed=(req.query.completed==='true')
    }
    if(req.query.sortBy){
        const parts=req.query.sortBy.split(':');
        sort[parts[0]]=(parts[0]=='desc')?-1:1;
      
    }
    try {
        await req.user.populate({
            path:'feeds',
           match,
           options:{
               limit:parseInt(req.query.limit),
               skip:parseInt(req.query.skip),
                sort,
           }
        }).execPopulate();
        res.status(200).send(req.user.tasks);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get("/feeds/:id",auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const feeds = await Feed.findOne({_id,owner:req.user._id});
        console.log(_id);
        console.log(req.user._id)
        if(!task)return res.status(404).send();
        res.status(200).send(feeds);
    } catch (e) { 
        res.status(400).send(e);
    }
 });

router.delete("/feeds/:id",auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const feeds = await Feed.findOneAndDelete({_id,owner:req.user._id});
        if (!feeds) return res.send("User doesn't exist");
        res.status(200).send("Deleted Successfully");
    } catch (e) {
        res.status(404).send(e);
    }
});
module.exports = router;