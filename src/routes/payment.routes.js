import { Router } from 'express';
import { createCheckoutSession,cancelPayment,successPayment } from '../controllers/payment.controller.js';

import { SendToBill,captureOrder } from '../controllers/paypalPayment.controller.js';


import auth from './../middlewares/auth.js';

const router = Router();

router.get('/verify', auth , createCheckoutSession);

router.get('/success', auth , successPayment);

router.get('/cancel', auth , cancelPayment);

//payment routes paypal

router.get('/paypal/sendtobill', auth , SendToBill);

router.get('/paypal/captureorder', auth , captureOrder);



export default router;