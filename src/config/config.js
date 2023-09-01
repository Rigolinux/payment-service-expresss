import dotenv from 'dotenv';

dotenv.config();


export const EnvConfig = {
    port: process.env.PORT || 3000,
    SecretKey: process.env.TOKEN_SUPABESE_SECRET,
    Wompi_KEY: process.env.WOMPI_API_BASE,
    Wompi_SECRET: process.env.WOMPI_API_KEY,
}