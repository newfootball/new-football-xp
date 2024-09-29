import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="mx-auto"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-600 p-4">
            <h2 className="text-2xl font-bold text-white text-center">
              New Football Experience
            </h2>
            <p className="text-indigo-200 text-center">
              Your favorite social network
            </p>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
