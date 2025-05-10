const db = require('../databaseinit');
const bcrypt = require('bcrypt');

exports.createAccount = async (email, password, creationDate, callback) => {
    //Encrypting User's Password
    const encryptedPass = await bcrypt.hash(password, 10);
//Promise Block to facilitate Callbacks
new Promise(function (resolve,reject){
    const insertAccount = db.prepare('INSERT INTO accounts (email, password, creationDate, deletedAccount) VALUES (?,?,?,FALSE)');
    insertAccount.run(email,encryptedPass,creationDate);
    const lastInsertID = db.prepare('select last_insert_rowid()').get().last_insert_rowid;
    //Go back to Controller
    console.log("Account has been added to the DB");
    if(lastInsertID){
    resolve(lastInsertID)
    } else {reject();}
})
.then(function(accountID){
    callback(null,accountID);
})
.catch(function(){
    callback("error",null);
});
};

exports.findByEmail = (email, callback) => {
new Promise(function (resolve,reject){
   const findEmail = db.prepare('SELECT accountID,email,password FROM accounts WHERE email = ?');
   const user = findEmail.get(email);
   //Go back to controller
   console.log("Grabbed account: " , user.password);
   if(user){
   resolve(user)
   } else {reject();}
})
.then(function(user){
    callback(null,user);
})
.catch(function(){
    callback("error",null)
});
};