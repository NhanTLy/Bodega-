const db = require('../../dbSetup.js');
const bcrypt = require('bcryptjs');

const authSignup = (req, res, next) => {
  // write code here
  // take user info from client

  console.log('in authSignup');
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      let values = [req.body.username, hash];
      const qStr = `INSERT INTO auth (user_name, passkey) VALUES($1, $2);`;
      db.query(qStr, values)
        .then((data) => {
          res.locals.userId = data._id;
          return next();
        })
        .catch((err) => next(err));
    })
    .catch((bcryptError) => next(bcryptError));
};

module.exports = authSignup;
