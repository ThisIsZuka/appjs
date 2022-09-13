const express = require('express');
const sql = require('mssql');
const config = require('../config/db.config');

const transporter = require('../config/mail.config.js');

require('dotenv').config()
const path = require('path')

const ftp = require("basic-ftp")
const NCB_config = require('../config/fpt_NCB.config');
const client = new ftp.Client()
client.ftp.verbose = true
client.prepareTransfer = ftp.enterPassiveModeIPv4

var archiver = require('archiver');
archiver.registerFormat('zip-encryptable', require('archiver-zip-encryptable'));
const fs = require('fs');

const _dir_storage = path.join(__dirname + '/../public/storage/')


const ZipFile = async (data) => {
    try {
        const output = fs.createWriteStream(_dir_storage + 'examplepass.zip');

        let path_zip = _dir_storage + 'examplepass.zip'

        const archive = archiver('zip-encryptable', {
            zlib: {
                level: 9
            },
            encryptionMethod: 'aes256',
            forceLocalTime: true,
            password: 'test'
        });
        // const archive = archiver('zip', {
        //     zlib: { level: 8 } // Sets the compression level.
        //   });


        // pipe archive data to the file
        archive.pipe(output);

        archive.append(Buffer.from(JSON.stringify(data)), {
            name: 'test.txt'
        });
        // archive.append('string cheese!', { name: 'file2.txt' });

        await archive.finalize();

        return {
            path_zip: path_zip
        }

    } catch (err) {
        console.error(err)
    }
}


const create_file_txt = async (req, res) => {

    try {

        // res.send(path.join(__dirname))
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT TOP 10 * from dbo.APPLICATION");
        res.send(products.recordsets)

        // retuenData = await ZipFile(products.recordsets)
        // // res.send(retuenData["path_zip"]);

        // await client.access(NCB_config)
        // // res.send(await client.list())
        // await client.uploadFrom(retuenData["path_zip"], "uat.ufundportal.com/examplepass.zip")

        // res.send("Process Success")

    } catch (error) {
        console.log(error);
    }
    client.close()
}

const mail = async (req, res) => {

    try {

        let info = await transporter.sendMail({
            from: `"ZUKA Capital Services Co., Ltd. 👻" ${process.env.MAIL_USERNAME}` , // sender address
            // to: "frank.anorider@gmail.com", // list of receivers
            to: "bubbledeepin@outlook.co.th , frank.anorider@gmail.com", // list of receivers
            subject: "Dear, Khun Chaiwit phonkhen ✔", // Subject line
            // text: "Hello world? kittisak", // plain text body
            html: `<p><span style="font-size:18px"><span style="font-family:Comic Sans MS,cursive">We are a fast growing company in a short time. We are creating a technology that the history of the world must engrave. We want to be number one in the world. and to get to that point </span></span></p>

            <p style="text-align:center"><span style="font-family:Comic Sans MS,cursive"><strong><span style="color:#ff0000"><span style="font-size:36px">I want you</span></span></strong></span></p>
            
            <p><strong><span style="color:#f39c12">write a fucking resignation letter</span></strong></p>
            
            <p><strong><span style="color:#f39c12">Dr. Professor Specialist Kittisak U.</span></strong></p>
            `, // html body
        });

        console.log("Message sent: %s", info.messageId);
        res.send("Mail Sending")
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    create_file_txt,
    mail
}