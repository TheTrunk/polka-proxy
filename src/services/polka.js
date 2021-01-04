const log = require('../lib/log');
const config = require('config');
const axios = require("axios");

function metadata(req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        const processedBody = JSON.parse(body)
        const obtainedAddresses = processedBody.addresses; //"params":{addresses:[V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A,VDuSjNZ4xHb7bXTR9Y1Rt8Qe5J5awg]}
        const max = 1000000;
        const min = 1;

        const apiUrl = `http://${config.server}:${config.port}`;
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
                const errMessage = {
                    status: "error",
                    data: {
                        message: "An error has been encountered while processing request."
                    }
                }
                log.error(error);
                res.status(500).send('An error has been encountered while processing request.')
            });
    });
}


module.exports = {
    metadata,
}