const express = require('express')
const router= express.Router();
const postLogin = require('../../controllers/auth/postLogin')
var req = require("./node_modules/req/node_modules/request");


// router.get("", (req, res=>{
//     res.send("Chamadas v1")
// } ))
app.get("/", (req, res) => {
    res.send("Hello World!")
  })
router.post("/login", postLogin)

router.get("/users", (req, res=>{
    res.json({
        params: req.params,
        body: req.body,
    })
} ))
router.get("/users/:userId", (req, res=>{
    console.log("[]....", req.params, req.query)
    res.json({
        params: req.params,
        body: req.body,
    })
} ))


module.exports= router;