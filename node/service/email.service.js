const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const { User } = require('../dataBase/model');
const { errorMessages, ErrorHendler } = require('../textMessages');

const { ROOT_EMAIL, ROOT_EMAIL_PASSWORD } = require('../config/config');
const templatesInfo = require('../email-templates');

const templatesParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
});

const sendMail = async (userMail, action, context) => {
    try {
        const templatesInfoElement = templatesInfo[action];

        if (!templatesInfoElement) {
            throw new ErrorHendler(errorMessages.WRONG_EMAIL_TEMPLATE.status, errorMessages.WRONG_EMAIL_TEMPLATE.customCode);
        }

        const html = await templatesParser.render(templatesInfoElement.templateName, context);

        return transporter.sendMail({
            from: 'Dance Education Team',
            to: userMail,
            subject: templatesInfoElement.subject,
            html,
            attachments: [{
                filename: 'Logo_DanceEducation.png',
                path: path.join(process.cwd(), 'public', 'logo_final.png'),
                cid: 'logoDanceEducation'
            }]
        });
    } catch (e) {
        console.log(e);
    }
};
//
// const sendMailMass = async (action, emailMass) => {
//     try {
//         const templatesInfoElement = templatesInfo[action];
//         // { templateName: 'info', subject: 'We want to be a friends with You' }
//
//         if (!templatesInfoElement) {
//             throw new ErrorHendler(errorMessages.WRONG_EMAIL_TEMPLATE.status, errorMessages.WRONG_EMAIL_TEMPLATE.customCode);
//         }
//
//         const html = await templatesParser.render(templatesInfoElement.templateName);
//
//         emailMass.forEach((to, i) => {
//             const msg = {
//                 from: 'Dance Education Team', // sender address
//                 subject: templatesInfoElement.subject, // Subject line
//                 html,
//                 attachments: [{
//                     filename: 'Logo_DanceEducation.png',
//                     path: path.join(process.cwd(), 'public', 'logo_final.png'),
//                     cid: 'logoDanceEducation'
//                 }]
//             };
//             msg.to = to;
//
//             transporter.sendMail(msg, (err) => {
//                 if (err) {
//                     console.log(`Sending to ${to} failed: ${err}`);
//                     return;
//                 }
//                 console.log(`Sent to ${to}`);
//
//                 if (i === emailMass.length - 1) { msg.transport.close(); }
//             });
//         });
//     } catch (e) {
//         console.log(e);
//     }
// };

module.exports = {
    sendMail
};
