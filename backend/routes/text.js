const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Texts = require("../models/Texts");
const { body, validationResult } = require("express-validator");

// ROUTE-1 :: get all recipes - GET - "/api/blog/getposts" - DOES NOT REQUIRE LOGIN
router.get("/get", async (req, res) => {
    const diff = req.body.difficulty;
    const min = 1;
    let max = 10;

    // Texts.count({ difficulty: diff }, function (err, count) {
    //     max = count;
    // });

    // console.log(max);

    const num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);

    Texts.find({ number: num, difficulty: diff}, function (errs, posts) {
        if (errs) {
            console.log(errs);
            return res.status(500).json({ error: "some error occoured" });
        }
        
        return res.json(posts);
    });
});


router.post('/add', 
fetchuser, // middleware to get user info from jwt
[
   
], async (req, res) => {
    
    const newText = new Texts({
        number: req.body.number,
        text: req.body.text,
        difficulty: req.body.difficulty,
        });

        newText.save((err, post) => {
        if(err)
        {
            return res.status(500).json({ error: "some error occoured" });
        } 
        else {
            return res.json(post);
        }
        });
    
});



module.exports = router;


