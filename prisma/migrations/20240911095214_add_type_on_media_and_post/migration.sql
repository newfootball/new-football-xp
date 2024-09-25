-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('landingImage', 'mainVideo', 'shortVideo');

-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('video', 'shortVideo');

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "type" "MediaType" NOT NULL DEFAULT 'mainVideo',
ALTER COLUMN "filename" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'video';
