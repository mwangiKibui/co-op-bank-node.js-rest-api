require('dotenv').config();
const axios = require('axios');
const qs = require('querystring');
const uniqueString = require('unique-string');
const https = require('https');

/**
 * @class
 */
class CoopController {

    constructor(){

        this.data = qs.stringify({
            'grant_type':'client_credentials'
        });

    };

    /**
     * Get the access token
     * @returns {string} - The access token
     */
    async getAccessToken(req,res,next){        

    };

    /**
     * Send to Mpesa.
     * 
     */
    async sendToMpesa(req,res,next){

    };

    /**
     * account ministatement
     */
    async accountMinistatement(req,res,next){

    };

    /**
     * account fullstatement
     */
    async accountFullstatement(req,res,next){

    };

    /**
     * account balance
     */
    async accountBalance(req,res,next){

    };

    /**
     * account validation
     */
    async accountValidation(req,res,next){

    };

    /**
     * callback
     */
    async callback(req,res,next){

    }
};

module.exports = CoopController;