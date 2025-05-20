var express = require('express');
const nodemailer = require('nodemailer')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendmail', function(req, res, next) {
  res.render('sendmail');
});

router.post('/sendmail', function(req, res, next) {
  sendMail(req.body.email,res);
});

function sendMail(email, res) {
  const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
          user: "vikashpal1039@gmail.com",
          pass: "msiincvtuiwgoldy",
      },
  });

  const mailOptions = {
      from:" Vikash Baghel Pvt. Ltd.<vikashpal1039@gmail.com>",
      to: email,
      subject: "Password Reset Link",
      // text: "Do not share this link to anyone.",
      html: `This is Test Mail`,
  };

  transport.sendMail(mailOptions, (err, info) => {
      if (err) return res.send(err);
      console.log(info);

      return res.send(
          "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
      );
  });
}


module.exports = router;
