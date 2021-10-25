const express = require("express");
const app = require("./main");
const { success, error } = require("consola");
const { PORT } = require("./config");

const server = express();

server.use(app);

server
    .listen(PORT, () => {
        success({
            message: `[SERVER] Listing on port ${PORT}`,
            badge: true,
        });
    })
    .on("error", (err) => {
        error({
            message: err,
            badge: true,
        });
    });
