const db = require('../databaseinit');
const bcrypt = require('bcrypt');

exports.createAccount = async (email, password, creationDate, callback) => {
new Promise(function (resolve,reject){
    insertAccount = db.prepare('INSERT INTO accounts (email, password, creationDate, deletedAccount) VALUES (?,?,?,FALSE)');
    insertAccount.run(email,password,creationDate);
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
    callback("error",null)
});
};
