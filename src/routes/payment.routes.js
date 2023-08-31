import { Router } from 'express';
import { createCheckoutSession } from '../controllers/payment.controller.js';


import auth from './../middlewares/auth.js';

const router = Router();

router.get('/verify', auth , createCheckoutSession);

router.get('/success', (req, res) => {

});

router.get('/cancel', (req, res) => {});



export default router;