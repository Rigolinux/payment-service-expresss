import { Router } from 'express';
import { createCheckoutSession } from '../controllers/payment.controller';


const router = Router();

router.get('/create-checkout-session', createCheckoutSession);

router.get('/success', (req, res) => {
    
});

router.get('/cancel', (req, res) => {});



export default router;