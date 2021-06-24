import { getCustomRepository, getRepository } from "typeorm";
import { UserController } from "../controller/UserController";
import { User } from "../domain/entity/User";
import { UserRepository } from "../domain/repositories/UserRepository";
import { hashSync } from "bcrypt";

export async function initialTask() {
  console.log("Executing initial tasks...");
  const userCustomRepository = getCustomRepository(UserRepository);

  let adminUser = await userCustomRepository.findByEmail("admin@admin.com");

  if (adminUser === undefined) {
    console.log("Creating admin user...");
    await userCustomRepository.save({
      name: "Administrador",
      email: "admin@admin.com",
      password: hashSync("admin", 8),
    });
  }
}
