const polka = require('./services/polka');

module.exports = (app) => {
    // POST methods route
    app.post('/metadata', function (req, res) {
        polka.metadata(req, res)
    })
};