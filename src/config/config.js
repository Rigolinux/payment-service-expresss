import dotenv from 'dotenv';

dotenv.config();


export const EnvConfig = {
    port: process.env.PORT || 3000,
    SecretKey: process.env.TOKEN_SUPABESE_SECRET,
}