import axios from "axios";
import { EnvConfig} from "../config/config.js";



export const createCheckoutSession = async (req, res) => {
    try {
        const requestBody = new URLSearchParams();
        requestBody.append('grant_type', 'client_credentials');
        requestBody.append('audience', 'wompi_api');
        requestBody.append('client_id', EnvConfig.Wompi_KEY);
        requestBody.append('client_secret', EnvConfig.Wompi_SECRET);

        const config = {
            method: 'post',
            url: 'https://id.wompi.sv/connect/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: requestBody.toString(), 
        };

        const response = await axios(config);
        console.log(response.data);
        res.json({ message: 'Hello World' });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }

    
};

export const successPayment = async (req, res) => {
    try{
        //req.body.products has the products
        

    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    
        res.json({ message: 'Hello World' });
};

export const cancelPayment = async (req, res) => {};