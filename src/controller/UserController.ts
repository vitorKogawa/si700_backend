import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { IUser } from "../models/IUser";
import { v4 as uuidv4 } from "uuid";
import { User } from "../entity/User";

class UserController {
  async store(request: Request, response: Response) {
    try {
      const userRepository = getRepository(User);
      const { firstName, lastName, email, password, isEnabled } = request.body;

      const userExists = await userRepository.findOne({ where: { email } });

      if (userExists) {
        return response.sendStatus(400);
      } else {
        const newUser = {
          id: uuidv4(),
          firstName,
          lastName,
          email,
          password,
          isEnabled: isEnabled ? isEnabled : false,
        } as IUser;

        await userRepository.save(userRepository.create(newUser));

        return response.sendStatus(200);
      }
    } catch (error) {
      console.log(error);
      return response.sendStatus(500);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const userRepository = getRepository(User);

      const users = await userRepository
        .createQueryBuilder("user")
        .select(["user.id", "user.firstName", "user.lastName", "user.email", "user.isEnabled"])
        .orderBy("user.id", "DESC")
        .getMany();

      if (users.length !== 0) {
        return response.status(200).json(users);
      } else {
        return response
          .status(200)
          .json({ message: "Nenhum usuário cadastrado na base de dados." });
      }
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }

  async findByID(request: Request, response: Response) {
    try {
      if (!request.params.id)
        return response.status(400).json({ message: "Nenhum id informado." });

      const userRepository = getRepository(User);

      const user = await userRepository
        .createQueryBuilder("user")
        .select(["user.id", "user.firstName", "user.lastName", "user.email", "user.isEnabled"])
        .where("user.id = :id", { id: request.params.id })
        .getOne();

      if (user) {
        return response.status(200).json(user);
      } else {
        return response.status(400).json({
          message: `Usuário de id ${request.params.id} não foi encontrado.`,
        });
      }
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }

  async enableUserByID(request: Request, response: Response) {
    try {
      if (!request.params.id)
        return response
          .status(400)
          .json({ message: "Nenhum id foi informado." });
      const userRepository = getRepository(User);

      await userRepository
        .createQueryBuilder()
        .update("User")
        .set({ isEnabled: true })
        .where("id = :id", { id: request.params.id })
        .execute();

      return response.sendStatus(200);
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }

  async disableUserByID(request: Request, response: Response) {
    try {
      if (!request.params.id)
        return response
          .status(400)
          .json({ message: "Nenhum id foi informado." });
      const userRepository = getRepository(User);

      await userRepository
        .createQueryBuilder()
        .update("User")
        .set({ isEnabled: false })
        .where("id = :id", { id: request.params.id })
        .execute();

      return response.sendStatus(200);
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }
}

export default new UserController();
