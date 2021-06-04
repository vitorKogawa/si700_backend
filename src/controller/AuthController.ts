import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "./../entity/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUser } from "../models/IUser";
import { jwtConfig } from "./../config/jwt.config";

class AuthController {
  async auth(request: Request, response: Response) {
    const repository = getRepository(User);
    const { email, password } = request.body;

    const user = await repository.findOne({ where: { email } });
    if (!user)
      return response.json({
        message: "Este usuário não está cadastrado na base de dados.",
      });

    console.log(user, request.body);
    console.log(await compare(password, user.password));

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) return response.json({ message: "Senha incorreta." });

    const token = sign(
      { id: user.id, email: user.email } as IUser,
      jwtConfig.secret,
      { expiresIn: "1d" }
    );

    delete user.password;

    return response.json({
      user,
      token,
    });
  }
}

export default new AuthController();
