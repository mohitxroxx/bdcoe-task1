const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');


const signup = (req, res) => {
    let config = {
        service : 'Gmail',
        auth : {
            user: '<EMAIL@GMAIL.COM>',
            pass: '<PASSWORD KYU JAAN NA HAI>'
        }
    }
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })
    let response = {
        body: {
            name : "there!",
            intro: "Thanks for signing upYour Registration is successful, Thank you for us.",
            table : {
                data : [
                    {
                        description: "If you have any questions or need assistance, please feel free to contact our support team. We're here to help you. Thank you for joining us",
                    }
                ]
            },
            outro: "THANKS n WELCOME"
        }
    }
    let mail = MailGenerator.generate(response)
    
    let message = {
        from : 'gauss10056@gmail.com',
        to : 'mohit35753@gmail.com',
        subject: "Registration Completed",
        html: mail
        // "Thanks for signing upYour Registration is successful, Thank you for us. If you have any questions or need assistance, please feel free to contact our support team. We're here to help you. Thank you for joining us"
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
        } else {
          console.log('Email sent successfully' + info.response);
        }
      });
}


module.exports = signup