const mongooose = require('mongoose');

mongooose.connect('mongodb://localhost/zoomDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db) =>console.log('DB is connected')).catch((err) => console.log(err));