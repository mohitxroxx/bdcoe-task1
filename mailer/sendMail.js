const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "olin85@ethereal.email",
      pass: "G2dxS5gqt3jkUrYPva",
    },
  });

  let info = await transporter.sendMail({
    from: '"MohiT" <mohit@roxx.com>',
    to: "bdcoe@bdcoe.com",
    subject: "Registration Completed",
    text: "Your Registration is successful, Thank you for choosing Expense Tracker to be your financial companion. We believe you're on the path to better financial management and smarter spending decisions. If you have any questions or need assistance with using Expense Tracker, please feel free to contact our support team. We're here to help you at every step of your financial journey. Thank you for joining our community, and we look forward to seeing you succeed in your financial goals.",
    html: "<bRegistration Successful</b>",
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
};
module.exports = sendMail;