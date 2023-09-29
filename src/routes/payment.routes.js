import { Router } from 'express';
import { createCheckoutSession,cancelPayment,successPayment } from '../controllers/payment.controller.js';

import { SendToBill,captureOrder } from '../controllers/paypalPayment.controller.js';


import auth from './../middlewares/auth.js';

const router = Router();

router.post('/wompy/sendtobill', auth , createCheckoutSession);

router.get('/wompy/success', auth , successPayment);



//payment routes paypal

router.get('/paypal/sendtobill', auth , SendToBill);

router.get('/paypal/captureorder', auth , captureOrder);

router.post('/success/:id', (req,res)=>{
    console.log("wh");

    res.send("success paypal");
});


export default router;