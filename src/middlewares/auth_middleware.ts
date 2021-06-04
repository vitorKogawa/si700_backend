import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { jwtConfig } from './../config/jwt.config'

export default function authMiddleware(
  request: Request,
  response: Response,
  next_function: NextFunction
) {
  const { authorization } = request.headers;

  //verificando se existe o módulo de autenticação no cabeçalho de requisição
  if (!authorization) return response.sendStatus(401);

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = verify(token, jwtConfig.secret);

    next_function();
  } catch {
    return response.sendStatus(401);
  }
}
