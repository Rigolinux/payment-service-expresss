import axios from "axios";

import { EnvConfig } from "../config/config.js";

export const SendToBill = async(req,res)=> {
    // async sendtoBillPaypal() {

    //aumont means the price to pay
    try{
        const monto = req.body.monto;
    
      
        const order = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                    currency_code: 'USD',
                    //TOtal a pagar por el cliente
                    // value: '1',
                    value: monto,
                    },
                },
            ],
            application_context: {
                brand_name: 'Prueba Negocio',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `${EnvConfig.HostPort}/proccess-order?type=Paypal`,
                cancel_url: `${EnvConfig.HostPort}/cart`,
            },
      };
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      const {
        data: { access_token },
      } = await axios.post(`${env.Paypal_url}/v1/oauth2/token`, params, {
        auth: {
          username: EnvConfig.Paypal_client_id,
          password: EnvConfig.Paypal_client_secret,
        },
      });
      const response = await axios.post(
        `${EnvConfig.Paypal_url}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
  
      // return response.data;
      // Capturar el ID DE LA ORDEN
      // const orderId = response.data.id;
      // Llamar al metodo de captura
      // await this.captureOrder(orderId);
  
      res.json({ message: response.data });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

export const captureOrder = async(req,res)=> {
    //capturar orden de compra
    try{
      
   
        const resp = await axios.post(
            `${EnvConfig.Paypal_url}/v2/checkout/orders/${orderId}/capture`,
        {},
        {
            auth: {
                username: EnvConfig.Paypal_client_id,
                password: EnvConfig.Paypal_client_secret,
            },
        },
        );
        return resp.data

    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}