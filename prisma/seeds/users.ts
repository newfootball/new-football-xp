import { faker } from "@faker-js/faker/locale/fr";
import { Prisma } from "@prisma/client";

const users: Prisma.UserCreateInput[] = [];
for (let i = 0; i < 20; i++) {
  const user = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    firstName: faker.internet.userName(),
    image: faker.image.avatar(),
    biography: faker.lorem.sentence(),
  } satisfies Prisma.UserCreateInput;
}

export { users };
