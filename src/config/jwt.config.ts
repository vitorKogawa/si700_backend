import "./env.config";

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  salt: parseInt(process.env.JWT_SALT),
} as { secret: string, salt: number };

export { jwtConfig };
