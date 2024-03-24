import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./seeds/users";
import { seedPosts } from "./seeds/posts";

const prisma = new PrismaClient();

const main = async () => {
  const users = await seedUsers(prisma);
  const posts = await seedPosts({ prisma, users });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
