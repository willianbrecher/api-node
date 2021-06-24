import { UserController } from "../controller/UserController";

export const UserRoutes = [
  {
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "findAll",
  },
  {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "findById",
  },
  {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "put",
    route: "/api/users/:id",
    controller: UserController,
    action: "update",
  },
  {
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove",
  },
];
