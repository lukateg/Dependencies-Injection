import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();
  // you can register some resources right now below...

  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.register("users", Users);

  return ioc;
};

export const logger = createIoCContainer().resolve("logger");
export const http = createIoCContainer().resolve("http");
export const users = createIoCContainer().resolve("users");
