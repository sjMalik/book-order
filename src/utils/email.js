/* eslint-disable import/no-extraneous-dependencies */
const sgMail = require('@sendgrid/mail');
const format = require('string-template');
const debug = require('debug')('order:email');

const { SENDGRID_API_KEY, SENDGRID_NOREPLY_EMAIL } = require('../../config');

sgMail.setApiKey(SENDGRID_API_KEY);

const email = `Hello {userName},<br/><br/>
Welcome To Online Book Order App. Please use the token below to confirm your email address<br/>
<h3 style="
   color: black;
   font-weight: bold;">{token}</h3>      
<br/><br/>
<p style="font-size: 15px;
   color: red;">N.B: Please don't reply to this email</p>
`;

/**
 *
 * @param {*} tokens
 * @param {*} userEmail
 * @param {*} siteurl
 * @returns
 */
exports.sendConfirmationMail = (token, userName, userEmail) => {
    debug(userEmail);
    debug(SENDGRID_NOREPLY_EMAIL);
    const msg = {
        to: userEmail,
        from: SENDGRID_NOREPLY_EMAIL,
        subject: 'Confirm Your Email For Registration in Online Book Order Application',
        html: format(email, {
            userName,
            token,
        }),
    };
    return sgMail.send(msg);
};
