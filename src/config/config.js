import dotenv from 'dotenv';

dotenv.config();


export const EnvConfig = {
    port: process.env.PORT || 3000,
    SecretKey: process.env.TOKEN_SUPABESE_SECRET,
    Wompi_KEY: process.env.WOMPI_API_BASE,
    Wompi_SECRET: process.env.WOMPI_API_KEY,
    HostPort : process.env.HOST_PORT,
    Paypal_url: process.env.PAYPAL_URL,
    Paypal_client_id: process.env.PAYPAL_CLIENT_KEY,
    Paypal_client_secret: process.env.PAYPAL_SECRET_KEY,
}