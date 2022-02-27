const express = require("express");
const { route } = require("express/lib/application");
const router = new express.Router();
require("../db/mongoose");
const User = require("../models/user");
const auth = require("../middlewares/auth");

router.post("/users", async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    const user2 = await User.findOne({ email: req.body.email });
    if (user2) {
        return res.status(404).send("Email already in use!");
    }
    try {
        await user.save();
        const token = await user.genauthToken();

        res.status(201).send({ user: user.getPublicProfile(user), token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.genauthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(404).send(e);
    }
});
router.get("/users/me", auth, async (req, res) => {
    res.send(req.user);
});

router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(400).send("Error");
    }
});
router.post("/users/logoutall", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return 0;
        });
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(400).send("Error");
    }
});

router.patch("/users/me", auth, async (req, res) => {
    const update = Object.keys(req.body);
    const allowedupdate = ["name", "email", "password", "field"];
    const isvalid = update.every((upd) => allowedupdate.includes(upd));
    if (!isvalid) {
        return res.status(404).send("Invalid Update");
    }
    try {
        const user = req.user;
        update.forEach((upd) => {
            user[upd] = req.body[upd];
        });
        await user.save();

        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.delete("/users/me", auth, async (req, res) => {
    try {
        console.log(req.user);
        await req.user.remove();
        res.status(200).send("Deleted Successfully");
    } catch (e) {
        res.status(404).send(e);
    }
});
router.get("/users/list", auth, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (e) {
        res.status(401).send(e);
    }
});
router.post("/users/add", auth, async (req, res) => {
    try {
        const val = req.body.university;
        const val2 = req.body.profs;
        console.log("Add request called" + val + "?" + val2);
        const user = req.user;
        await user.colleges.push(val);
        await user.profs.push(val2);

        await user.save();
        res.status(200).send("Done");
    } catch (e) {
        console.log(e);
    }
});
const schedulemail = require("../mailnotify/scheduler");
router.get("/users/test", auth, async (req, res) => {
    try {
        const user = req.user;
        schedulemail(user.email, "Hello");
        console.log("mail sent to " + user.email);
        res.status(200).send(res);
    } catch (e) {
        console.log(e);
    }
});
module.exports = router;
