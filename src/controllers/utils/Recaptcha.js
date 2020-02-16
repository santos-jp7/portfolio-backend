const axios = require('axios');

module.exports = async function(token){
    const {data} = await axios.post('https://www.google.com/recaptcha/api/siteverify', `secret=${process.env.SECRET_G_CAPTCHA}&response=${token}`);
    const {success} = data;

    return success;
}