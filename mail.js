// Lib
import nodemailer from 'nodemailer';
import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';

// template file
const source = fs.readFileSync(path.join(process.cwd(),'/template/verifyCode.hbs'),'utf8');
const template = Handlebars.compile(source);

const transporter = nodemailer.createTransport({
    host: '$YOUR_HOST',
    auth: {
        user: '$username',
        pass: 'dha96bKcA7',
    },
    port: 587,
    secure: false,
});

async function sendVerifyCode(username, email, code) {
    const data = {
        "username": username,
        "code" : code,
    };
    const mailOptions = {
        from: '$YOUR_HOST',
        to: email,
        subject: 'Validation Code',
        // html: verifyCodeContent,
        html: template(data),
    };
    return new Promise((res,rej) => {
        transporter.sendMail(mailOptions, function(err,info){
            if (err) {
                console.log('Error : ',err);
                rej(false)
            }
            console.log('Email Send: ', info.response);
            res(true);
        });
    });
    
}

export default sendVerifyCode;