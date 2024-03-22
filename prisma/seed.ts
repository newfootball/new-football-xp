import { PrismaClient } from "@prisma/client";
import { users } from "./seeds/users";

const prisma = new PrismaClient();

const main = async () => {
  for (let user of users) {
    const dbUser = await prisma.user.create({ data: user });
    users.push(dbUser);
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
