
const express = require('express');

const router = express.Router();

const Coop = require('../controllers/Coop');

//send to mpesa

router.post( 
    'send-to-mpesa',
    (req,res,next) => new Coop().getAccessToken(req,res,next),
    (req,res,next) => new Coop().sendToMpesa(req,res,next)
);

// account mini statement

router.post(
    'account-mini-statement',
    (req,res,next) => new Coop().getAccessToken(req,res,next),
    (req,res,next) => new Coop().accountMinistatement(req,res,next)
);

// account full statement.

router.post(
    'account-full-statement',
    (req,res,next) => new Coop().getAccessToken(req,res,next),
    (req,res,next) => new Coop().accountFullstatement(req,res,next)
);

//callback

router.post(
    'callback',
    (req,res,next) => new Coop().callback(req,res,next)
);

module.exports = router;