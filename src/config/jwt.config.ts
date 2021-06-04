import "./env.config";
import { IJWTConfig } from  './../models/IJWTConfig'

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  salt: parseInt(process.env.JWT_SALT),
} as IJWTConfig;

export { jwtConfig };
