import { Prisma } from "@prisma/client";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function ProfileInfo({
  user,
}: {
  user: Prisma.UserCreateInput;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image
          src="/images/cover-image.jpg"
          alt="Cover image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="px-4 py-5">
        <div className="flex justify-between items-start mb-4">
          <div className="relative -mt-16">
            {user.image ? (
              <Image
                src={user.image}
                alt={`${user.name ?? "-"}'s profile picture`}
                width={80}
                height={80}
                className="rounded-full border-4 border-white"
              />
            ) : null}
          </div>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full flex items-center">
            <Settings size={16} className="mr-2" />
            Edit profile
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
        <p className="text-gray-600 mb-3">{user.email}</p>
        <div className="flex space-x-2 mb-4">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            #art
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            #music
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            #uidesign
          </span>
        </div>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold">200</p>
            <p className="text-gray-600 text-sm">posts</p>
          </div>
          <div>
            <p className="font-bold">25k</p>
            <p className="text-gray-600 text-sm">followers</p>
          </div>
          <div>
            <p className="font-bold">500</p>
            <p className="text-gray-600 text-sm">following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
