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
        
        const body = req.body;

        const config_2 = {
            method: 'post',
            url: 'https://api.wompi.sv/EnlacePago',
            headers: {
                authorization: 'Bearer ' + response.data.access_token,
                'Content-Type': 'application/json',
            },
            data: {
                // un generador de pago
                identificadorEnlaceComercio: "123456789",
                monto: body.monto,
                nombreProducto: "Pagar a comercio de prueba",
                infoProducto: {
                    //talvez un logo aqui
                    urlImagenProducto : "https://clqqyepphecgzgrmpjos.supabase.co/storage/v1/object/public/profile_photos/public/3pqmji2bzwj.jpg?t=2023-10-17T21%3A57%3A49.199Z"
                },
                configuracion: {
                    urlRedirect: `http://localhost:5173/?type=Wompy`,
                    urlWebhook: `http://localhost:5173/`,
                },
            }
        }

        const response_2 = await axios(config_2);

        res.json({ ...response_2.data });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }

    
};

export const successPayment = async (req, res) => {
    try{
        
        //req.body.products has the products
        const token = req.body.token;

        const body = {
            identificadorEnlaceComercio: "123456789",
            monto: 100,
            nombreProducto: "Producto de prueba pancitos",
            configuracion: {
                urlRedirect: `http://localhost:5174/?token=${1234}`,
                urlRetorno: `http://localhost:5174/?tokenR=${1234}`,
            },
        }

        const config = {
            method: 'post',
            url: 'https://sandbox.wompi.sv/links',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            data: body,
        }

        const response = await axios(config);
        console.log(response.data);
        res.json({ message: 'Hello World' });

    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    
        res.json({ message: 'Hello World' });
};

export const cancelPayment = async (req, res) => {};