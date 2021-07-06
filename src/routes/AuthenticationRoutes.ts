import { AuthenticationController } from "../controller/AuthenticationController";

export const AuthenticationRoutes = [
  {
    method: "post",
    route: "/authentication",
    controller: AuthenticationController,
    action: "authentication",
  },
];
