const app = require('./app');
require('./database');
require("dotenv").config();


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});

