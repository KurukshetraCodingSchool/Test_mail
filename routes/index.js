var express = require('express');
const nodemailer = require('nodemailer')
const sendMail = require('../utils/sendmail')
const maildata  =require('../models/testmail');
const testModel = require('../models/testmail');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/signup', async function(req, res, next) {
  const {email,password} = req.body
  const user = await testModel.create({
    email,
    password
  })
  res.redirect('/sendmail')
});

router.get('/sendmail', function(req, res, next) {
  res.render('sendmail');
});

router.post('/sendmail', async function(req, res, next) {
  const user = await testModel.findOne({email:req.body.email})
  sendMail(user.email,user,res,req)
});


module.exports = router;
