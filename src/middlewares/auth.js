
import jwt from "jsonwebtoken";

import { EnvConfig } from "../config/config.js";

export default function auth(req, res, next) {

    const token = req.headers['authorization'].split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, EnvConfig.SecretKey);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
}