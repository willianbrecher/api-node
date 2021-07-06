import { getCustomRepository } from "typeorm";
import { UserRepository } from "../domain/repositories/UserRepository";
import { NextFunction, Request, Response } from "express";
import { compareSync } from "bcrypt";
import { jwt } from "jsonwebtoken";

export class AuthenticationController {
  private userRepository = getCustomRepository(UserRepository);

  async authentication(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    this.userRepository
      .findByEmail(email)
      .then((response) => {
        console.log(response);
        if (response === null || !compareSync(password, response.password)) {
          return res
            .status(401)
            .json({ message: "Bad credentials: Inválid E-mail or password" });
        }

        const payload = {
          userid: response.id,
        };

        const signOptions = {
          subject: response.id,
          expiresIn: "1d",
        };

        return jwt.sign(payload, "@#$%df!#GD@", signOptions);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  }
}
