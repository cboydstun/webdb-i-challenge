const Accounts = require('../data/dbConfig');

const validateID = (req,res, next) =>{
    if(req.params.id){
        Accounts('accounts').select('*')
        .where({id: req.params.id})
        .then(result =>{
            if(result.length > 0){
                next();
            }else{
                res.status(500).json({error: "Oops it seems we dropped the ID :("});
            }
        }).catch(error =>{
            res.status(404).json({error: "Looks like you entered the wrong ID :("});
        });
    }else{
        res.status(400).json({error: "Please include an ID parameter!"});
    }
};

module.exports = validateID;