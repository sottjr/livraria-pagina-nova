const express = require('express');
const routes = require("./routes");
const db = require("./database");

const app = express();
app.use(express.json())
db.hasConection();




app.listen(6000, () => {
    console.log('Server running on port 6000');
});