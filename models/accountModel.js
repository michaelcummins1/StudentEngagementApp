const db = require('../databaseinit');
// We need an encryption module (pls find)
//Creation date also gonna need some kind of magic.
exports.createAccount = async (email, password, creationDate) => {
    //Encrypt PW before committing to DB
    db.run(
        'INSERT INTO accounts ()',
        [email, password, creationDate],
        function (err){
            callback(err, this?.lastID);
        }
    );
};