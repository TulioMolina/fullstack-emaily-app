const sgMail = require("@sendgrid/mail");
const { sendGridKey } = require("../config/keys");
sgMail.setApiKey(sendGridKey);

const sendSurvey = (survey, htmlBody) => {
  const { subject, recipients } = survey;
  const msg = {
    to: recipients.map((recipient) => recipient.email),
    from: "tuliojose8@gmail.com",
    replyTo: "no-reply@emaily.com",
    subject,
    html: htmlBody,
    trackingSettings: {
      clickTracking: {
        enable: true,
        enableText: true,
      },
    },
  };

  return sgMail.sendMultiple(msg);
};

module.exports = sendSurvey;
