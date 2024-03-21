/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "contract" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "footer" TEXT,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "license" TEXT,
ADD COLUMN     "localisation" TEXT,
ADD COLUMN     "position" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "userTypeId" TEXT,
ADD COLUMN     "username" TEXT,
ADD COLUMN     "weight" INTEGER;

-- CreateTable
CREATE TABLE "UserType" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
