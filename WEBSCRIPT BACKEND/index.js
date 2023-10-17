const express = require("express")
const router = express.Router()
const controler = require("..:controler/file.controler")

let routes = (app) => {
    router.post("/upload", controler.upload);
    router.get("/files/ :name", controler.download)
    router.delete("/files/:name", controler.remove);

    app.use(router);
}

module.exports = routes;