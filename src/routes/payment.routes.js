import { Router } from 'express';
import { createCheckoutSession,cancelPayment,successPayment } from '../controllers/payment.controller.js';


import auth from './../middlewares/auth.js';

const router = Router();

router.get('/verify', auth , createCheckoutSession);

router.get('/success', auth , successPayment);

router.get('/cancel', auth , cancelPayment);



export default router;