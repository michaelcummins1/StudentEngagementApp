//dependencies
const Account = require('../models/accountModel');
//creation date here(?)
exports.create= (req, res)=> {
    const {} = req.body;
    Account.createAccount(email,password,pfp,creationDate), (err, id)=> {
        if(err){
            //Deal with Errors I think(???)
            return res.status(500), {
                //Error Messsage
            }
        }
        //Success Response will be a res function
    }
}

exports.delete= (req, res) =>{
    Account.deleteAccount(TRUE), (err, id)=> {
        if(err) {
            return res.status(500), {
                //Error Message
            }
        }
        //Success Response will be a res function
    }
}
