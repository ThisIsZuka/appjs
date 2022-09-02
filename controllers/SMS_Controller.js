const express = require('express');
const sql = require('mssql');
const config = require('../config/db.config');
require('dotenv').config()

const axios = require('axios').default;

const API_Key = process.env.SCB_API_Key
const API_Secret = process.env.SCB_API_Secret


const SCB_Oauth = async () => {
    try {
        const resp = await axios({
            method: 'POST',
            url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
            headers: {
                'Content-Type': 'application/json',
                'accept-language': 'EN',
                'requestUId': '85230887-e643-4fa4-84b2-4e56709c4ac4',
                'resourceOwnerId': API_Key
            },
            data: {
                applicationKey: API_Key,
                applicationSecret: API_Secret,
            }
        });

        // res.send(resp.data)

        return resp.data.data.accessToken


        // let pool = await sql.connect(config);
        // let products = await pool.request().query("SELECT TOP 10 * from dbo.APPLICATION");
        // // return products.recordsets
        // res.send(products)

    } catch (error) {
        console.log(error.code);
    }
}


const gen_qrcode = async (req, res) => {
    try {
        console.log(req.params);

        const token = await SCB_Oauth()
        // console.log(token);
        const resp = await axios({
            method: 'POST',
            url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create',
            headers: {
                'Content-Type': 'application/json',
                'accept-language': 'EN',
                'authorization': `Bearer ${token}`,
                'requestUId': '85230887-e643-4fa4-84b2-4e56709c4ac4',
                'resourceOwnerId': API_Key
            },
            data: {
                "qrType": "PP",
                "ppType": "BILLERID",
                "ppId": "526446253766021",
                "amount": "5000.00",
                "ref1": "REFERENCE1",
                "ref2": "REFERENCE2",
                "ref3": "SCB"
            }
        });

        // let pool = await sql.connect(config);
        // await pool.request()
        //     .input('QRD_ID', sql.VarChar, value1)
        //     .input('PAYMENT_REF1', sql.VarChar, value2)
        //     .input('PAYMENT_REF2', sql.VarChar, value2)
        //     .input('QR_PAY_DOWN', sql.VarChar, value2)
        //     .input('UUID', sql.VarChar, value2)
        //     .input('CREATE_DATE', sql.VarChar, value2)
        //     .input('CREATE_DATE', sql.VarChar, value2)
        //     .query('insert into dbo.TTP_QR_DOWN (QRD_ID, PAYMENT_REF1, PAYMENT_REF2, QR_PAY_DOWN, UUID, CREATE_DATE, CREATE_DATE) values(@QRD_ID, @PAYMENT_REF1, @PAYMENT_REF2, @QR_PAY_DOWN, @UUID, @CREATE_DATE, @CREATE_DATE)');
        // return products.recordsets
        // res.send(products)
        
        res.send(resp.data)
        // console.log('error.code');
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    SCB_Oauth,
    gen_qrcode
}