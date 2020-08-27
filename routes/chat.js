var express = require('express');
var router = express.Router();


router.get("/hello", async function (req, res) {
    console.log("[GET] --- /stock ");
    res.status(200).send('hello from routdasdscacacacaes hihirewre not yse');
});


exports.router = router;