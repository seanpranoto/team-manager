const express = require("express");
const app = express();
const cors = require("cors");

require("./server/config/index.config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./server/routes/index.routes")(app);

app.listen(8000, ()=>console.log("Server is running on PORT 8000"));