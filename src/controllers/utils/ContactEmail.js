const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_OWNER,
        pass: process.env.EMAIL_OWNER_PASSWORD
    }
});

module.exports = async function(data){
    const {_id, name, email, message} = data;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_SEND,
        subject: 'Contato - Portifolio',
        text: `Mensagem: ${message} \n\n ID: ${_id} \n\n De: ${name} (${email})`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Email enviado: ' + info.response);
        }
    });
}