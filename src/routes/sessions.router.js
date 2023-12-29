import { Router } from 'express';
import passport from 'passport';
import { generateToken } from '../utils.js';

const router = Router();

router.post('/singup', passport.authenticate('signup'), (req, res) => {
    res.json({ message: 'Signed up' });
});

router.post('/login', passport.authenticate('login'), (req, res) => {
    const token = generateToken(req.user);
    res.cookie('token', token, { maxAge: 60000, httpOnly: true }).send('Welcome');
});

export default router;