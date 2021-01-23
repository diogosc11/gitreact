const express = require('express');
const { account } = require('../models')
const bcrypt = require('bcrypt');
const { accountSignUp, accountSignIn } = require('../validators/account');
const { getMessage } = require('../helper/validator');
const { generateJwt, generateRefreshJwt } = require('../helper/jwt')

const router = express.Router();

const saltRounds = 10;

router.post('/sign-in', accountSignIn, async(req, res) => {
    const { email, password } = req.body;

    const findAccount = await account.findOne({where: {email}});

    const match = findAccount ? bcrypt.compareSync( password, findAccount.password ) : null;
    if(!match) return res.jsonBadRequest(null, getMessage('account.signin.invalid'));

    const token = generateJwt({id: findAccount.id});
    const refreshToken = generateRefreshJwt({id: findAccount.id});

    return res.jsonOK( findAccount, getMessage('account.signup.sucess'), { token, refreshToken });
})

router.post('/sign-up', accountSignUp, async(req, res) => {
    const { email, password } = req.body;

    const findAccount = await account.findOne({where: {email}});
    if(findAccount) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await account.create({email, password: hash});

    const token = generateJwt({id: newAccount.id});
    const refreshToken = generateRefreshJwt({id: newAccount.id});

    return res.jsonOK( newAccount, getMessage('account.signup.sucess'), {token, refreshToken} );
})

module.exports = router;