import sendVerifyCode from './mail.js';

const data = {
    username: 'holysheet',
    email: 'yourmail@gmail.com',
    code: 9850
};

async function main(){
    const mail = await sendVerifyCode(data.username, data.email, data.code);
    console.log('Result : ',mail);
}

main();