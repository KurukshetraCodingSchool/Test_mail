// const nodemailer = require('nodemailer')
// function sendMail(email, res) {
//   const transport = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       auth: {
//           user: "vikashpal1039@gmail.com",
//           pass: "msiincvtuiwgoldy",
//       },
//   });

//   const mailOptions = {
//       from:" Vikash Baghel Pvt. Ltd.<vikashpal1039@gmail.com>",
//       to: email,
//       subject: "Password Reset Link",
//       // text: "Do not share this link to anyone.",
//       html: `This is Test Mail`,
//   };

//   transport.sendMail(mailOptions, (err, info) => {
//       if (err) return res.send(err);
//       console.log(info);

//       return res.send(
//           "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
//       );
//   });
// }

// module.exports= sendMail

const nodemailer = require("nodemailer")
sendMail = function(email,user,res,req) {
    const token = Math.floor(1000 + Math.random() * 9000);
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "vikashpal1039@gmail.com",
            pass: "muwtxtogapwmbgrx",
        },
    });

    const mailOptions = {
        from:" Vikash Baghel Pvt. Ltd.<vikashpal1039@gmail.com>",
        to: email,
        subject: "Password Reset Token",
        // text: "Do not share this link to anyone.",
        html: `<h1>${token}</h1>`,
    };

    transport.sendMail(mailOptions, async (err, info) => {
        if (err) return res.send(err);
        // console.log(info);

        user.token = token;
        await user.save();

        // return res.send(
        //     "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
        // );
        // console.log(req.user);
        // res.render("verify", { admin: req.user, id: user._id });
        res.send('Otp send succesfuuly')
    });
}
module.exports=sendMail;




