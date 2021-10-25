const express = require("express").Router;
const router = express();

router.get("/", async (req, res) => {
    res.json("poop");
});

module.exports = router;
