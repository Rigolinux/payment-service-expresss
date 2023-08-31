import  express from 'express';
import paymentroute from './routes/payment.routes.js';


import { EnvConfig } from './config/config.js';

const app = express();

app.use(express.json());

app.use('/api', paymentroute);

app.listen(EnvConfig.port, () => {
    console.log('Server on port', 3000);
});