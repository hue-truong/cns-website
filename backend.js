const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8888;
const routerAuth = express.Router();
const routerPublic = express.Router();

app.use(express.static(__dirname + '/frontend'))

routerAuth.use((r, res, next) => {
    let auth = r.body || "password"
    auth === process.env.SECRET || "password" ? next() : res.status(401).send("Not authorized")
});

//Phorest bookings
routerAuth.post('/booking/create', (r, res) => {

});

routerAuth.post('/booking/activate', (r, res) => {
    
});

routerAuth.post('booking/add-note', (r, res) => {

});

routerAuth.post('booking/cancel', (r, res) => {

});

routerPublic.get('/', (r, res) => {
    res.sendFile(path.join(__dirname + '/frontend', '/index.html'));
});



app.listen(port);
console.log('Server started at http://localhost:' + port);