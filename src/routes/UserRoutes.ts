import { UserController } from "../controller/UserController";
import { verifyJWT } from "../middleware/Authentication";

export const UserRoutes = [
  {
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "findAll",
    middlewares: [verifyJWT]
  },
  {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "findById",
    middlewares: [verifyJWT]
  },
  {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "save",
    middlewares: [verifyJWT]
  },
  {
    method: "put",
    route: "/api/users/:id",
    controller: UserController,
    action: "update",
    middlewares: [verifyJWT]
  },
  {
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove",
    middlewares: [verifyJWT]
  }
];
