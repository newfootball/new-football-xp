import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./seeds/users";

const prisma = new PrismaClient();

const main = async () => {
  const users = await seedUsers(prisma);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
