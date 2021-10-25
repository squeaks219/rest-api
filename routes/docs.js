const express = require("express").Router;
const pool = require("../db");

const router = express();

// create doc

router.post("/docs", async (req, res) => {
    try {
        const { images, title, teacher, school, description } = req.body;
        const newDoc = await pool.query(
            "INSERT INTO docs (images, title, teacher, school, description) VALUES ($1, $2, $3, $4, $5)",
            [images, title, teacher, school, description]
        );

        res.json(newDoc);
    } catch (err) {
        console.log(err.message);
    }
});

// get all doc

router.get("/docs", async (req, res) => {
    try {
        const allDocs = await pool.query("SELECT * FROM docs");
        res.json(allDocs.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// get doc by id
router.get("/docs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const docs = await pool.query("SELECT * FROM docs WHERE doc_id = $1", [
            id,
        ]);

        res.json(docs.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// delete doc

router.put("/docs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const updateDocs = await pool.query(
            "UPDATE docs SET title = $1 WHERE doc_id = $2",
            [title, id]
        );
        res.json("doc was updated");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
