const express = require('express');
const {account} = require('../models')
const bcrypt = require('bcrypt');
const {accountSignUp} = require('../validators/account');
const { getMessage } = require('../helper/validator');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in');
})

router.get('/sign-up', accountSignUp ,async(req, res) => {
    const {email, password} = req.body;

    const findAccount = await account.findOne({where: {email}});
    if(findAccount) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await account.create({email, password: hash});

    return res.jsonOK(newAccount, getMessage('account.signup.sucess'));
})

module.exports = router;