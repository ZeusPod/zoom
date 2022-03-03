const express = require('express');
const app = express();
const authRoutes = require("./routes/auth.routes");
const cors=require('cors');




app.use(cors());
app.use(express.json());

/* creamos la primera ruta */
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/api/auth", authRoutes);


module.exports = app;