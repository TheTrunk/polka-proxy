const polka = require('./services/polka');

module.exports = (app) => {
    app.get('/metadata', function (req, res) {
        polka.metadata(req, res)
    })
};