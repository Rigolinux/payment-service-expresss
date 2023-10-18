import  express from 'express';
import paymentroute from './routes/payment.routes.js';
import cors from 'cors';

import { EnvConfig } from './config/config.js';

const app = express();

app.use(express.json());

//enable cors
app.use(cors());

app.use('/api', paymentroute);

app.listen(EnvConfig.port, () => {
    console.log('Server on port', 3000);
});