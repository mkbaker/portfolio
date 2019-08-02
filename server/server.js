
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

let sendgridkey = process.env.SENDGRID_API_KEY;

/* Routes */
app.use('/api/user', userRouter);

//route for SendGrid 
app.post('/send', (req, res) => {
    console.log("/send route hit");
   // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
//   const sgMail = require('@sendgrid/mail');
//   sgMail.setApiKey(sendgridkey);
//  const msg = {
//    to: "mkellenbaker@gmail.com",
//    from: "test@example.com",
//    subject: "Sending with Twilio SendGrid is Fun",
//    text: "and easy to do anywhere, even with Node.js",
//    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//  };
//     sgMail.send(msg)
//     res.sendStatus(200);
  })

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
