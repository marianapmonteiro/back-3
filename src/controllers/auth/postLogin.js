
var async = require('async');

const postLogin = async (req, res=>{
    res.send(req.body)
})

module.exports = postLogin;