const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

// connect to the database and load models
require('./models').connect(config.dbUri);

const app = express();
// tell the app to look for static files in these directories
// app.use(express.static('./client/dist/'));
// app.use(express.static('./client/public/'));
app.use(express.static("client/build"));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/client/public/index.html')
  })

// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3000));

// start the server
app.listen(app.get('port'), () => {
  console.log(`🌎 Server is running on port ${app.get('port')}`);
});
