const Player = require("../controllers/index.controllers");

module.exports = app => {
    app.get("/api/players", Player.findAll);
    app.get("/api/players/:id", Player.findOne);
    app.post("/api/players", Player.createOne);
    app.put("/api/players/:id", Player.updateOne);
    app.delete("/api/players/:id", Player.delete);
};
