import { getCustomRepository, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../domain/entity/User";
import { UserRepository } from "../domain/repositories/UserRepository";
import { hashSync } from "bcrypt";

export class UserController {
  private userRepository = getCustomRepository(UserRepository);

  async findAll(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    let newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = hashSync(user.password, 8);

    return this.userRepository
      .save(newUser)
      .then((response) => {
        delete response.password;
        return response;
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const userId = req.params.id;

    let dbUser = await this.userRepository.findOne(userId);

    let updateUser = new User();
    updateUser.name = user.name;
    updateUser.email = user.email;
    updateUser.password =
      dbUser.password != hashSync(user.password, 8)
        ? hashSync(user.password, 8)
        : dbUser.password;

    return this.userRepository
      .update(userId, updateUser)
      .then((response) => response)
      .catch((error) => res.status(500).json({ message: error.message }));
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOne(request.params.id);

    if (userToRemove !== undefined) {
      return await this.userRepository.remove(userToRemove);
    } else {
      return response.status(404).json({ message: "User not found" });
    }
  }
}
