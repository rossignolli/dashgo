import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name: () => faker.name.findName(),
        email: () => faker.internet.email().toLowerCase(),
        createdAt: () => faker.date.recent(10),
      }),
    },

    seeds(server) {
      server.createList("user", 50);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/users");
      this.post("/users");
      this.namespace = "";
      this.passthrough();
      faker.setLocale("pt_BR");
    },
  });

  return server;
}
