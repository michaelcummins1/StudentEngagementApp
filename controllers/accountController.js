//dependencies
const Account = require('../models/accountModel');
//creation date here(?)
exports.create= (req, res)=> {
    const {} = req.body;
    Account.createAccount(email,password,pfp,creationDate), (err, id)=> {
        if(err){
            //Deal with Errors,
            return res.render('aRoute'), {
                //Error Messsage
            }
        }
        //Success Response
    }
}