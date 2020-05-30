const express = require('express');
const bodyParser = require('body-parser');

const bowlingAlleyRouter = express.Router();

bowlingAlleyRouter.use(bodyParser.json());

bowlingAlleyRouter.route('/')

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the bowling alleys to you');
    })
    .post((req, res) => {
        res.end(`Will add the bowling alley: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /bowlingalley');
    })
    .delete((req, res) => {
        res.end('Deleting all bowling alleys');
    });

module.exports = bowlingAlleyRouter;