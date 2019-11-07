const validateSecret = (req, res, next) =>{
    const authToken = req.headers.token;

    if(authToken){
        if(authToken == 'LambdaRocks!'){
            next();
        }else{
            res.status(401).json({error: "Invalid auth-token, please provided a valid key."});
        }
    }else{
        res.status(400).json({error: "Please remember to include the auth-token in the header."});
    }
};

module.exports = validateSecret;