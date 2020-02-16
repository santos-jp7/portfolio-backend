const schema = require('./utils/ContactSchema')
const Contact = require('../models/Contact');
const recaptcha = require('./utils/Recaptcha');
const sendEmail = require('./utils/ContactEmail');

module.exports = async function(req, res){
    
    const valid = await schema.isValid(req.body);
    if(valid == false) return res.json({status: false, message: "Verifique suas informações."});
    
    const {name, email, message, captcha} = req.body;
    
    const verifyCaptcha = await recaptcha(captcha);
    if(verifyCaptcha == false) return res.json({status: false, message: "Verifique o desafio recaptcha."});

    const response = await Contact.create({
        name: name,
        email: email,
        message: message,
        date: new Date
    })

    res.json({status: true, message: "Mensagem enviada com sucesso."});
    res.end();

    return sendEmail(response);
}