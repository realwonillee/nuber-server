import Mailgun from "mailgun-js";

const mainGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxb1804f5f621f4cef91c51e3f5b1753d0.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "leethmic.wonil@gmail.com",
    to: "leethmic.wonil@gmail.com",
    subject,
    html
  };

  return mainGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;

  return sendEmail(emailSubject, emailBody);
};
