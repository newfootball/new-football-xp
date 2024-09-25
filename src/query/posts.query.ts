import { prisma } from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const postSelectQuery = (userId?: string) =>
  ({
    id: true,
    title: true,
    description: true,
    createdAt: true,
    medias: {
      select: {
        id: true,
        url: true,
        mimetype: true,
      },
    },
    user: {
      select: {
        id: true,
        name: true,
      },
    },
    likes: {
      select: {
        userId: true,
      },
      where: {
        userId: userId ?? "error",
      },
    },
    _count: {
      select: {
        likes: true,
      },
    },
  } satisfies Prisma.PostSelect);

export const getLatestPosts = (
  userId?: string,
  page: number = 1,
  pageSize: number = 10
) =>
  prisma.post.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    select: postSelectQuery(userId),
    orderBy: {
      createdAt: "desc",
    },
  });

export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number];
