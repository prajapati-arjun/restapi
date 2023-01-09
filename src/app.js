const express = require("express");
const app = express();
const MenRanking = require("../models/mans");
const router = require("../routers/men");
require("../db/conn")
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(router);





app.listen(PORT,()=>{
    console.log(`The server is running at 127.0.0.1:${PORT}`)

})