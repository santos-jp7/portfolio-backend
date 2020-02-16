const yup = require('yup');

module.exports = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    captcha: yup.string().required()
})