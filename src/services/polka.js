const log = require('../lib/log');
const config = require('config');
const axios = require("axios");

function metadata(req, res) {
    const max = 1000000;
    const min = 1;

    const apiUrl = `http://${config.server.address}:${config.server.port}`;
    const data = {
        jsonRpc: "2.0",
        method: "state_getMetadata",
        params: [],
        id: Math.floor(Math.random() * (max - min + 1)) + min
    };
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .post(apiUrl, data, axiosConfig)
        .then(response => {
            // console.log(response)
            res.json(response.data)
        })
        .catch(error => {
            log.error(error);
            res.status(500).send('An error has been encountered while processing request.')
        });
}


module.exports = {
    metadata,
}