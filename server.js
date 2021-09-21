// Express server. Back-end data-relaying, mild security and serving the SPA.
const express = require('express');
const path = require('path');
const axios = require('axios');

const ROSTER_API = "https://rosterbuster.aero/wp-content/uploads/dummy-response.json";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));

app.get('/api/getRoster', (req, res) => {
    axios.get(ROSTER_API).then(response => {
        res.send(response.data);
    }).catch(error => {
        console.log(error);
    });
});

if(process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '/build')));
}

app.get('/', (req, res) => {
    res.render('./index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}`));