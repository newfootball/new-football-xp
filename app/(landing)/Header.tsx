import { Layout } from "@/components/layout";
import { LoggedinButton } from "@/features/auth/LoggedinButton";
import { ModeToggle } from "@/features/theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-border px-4 py-1">
      <Layout className="flex items-center gap-4">
        <h1 className="flex-1">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          </Link>
        </h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedinButton />
        </div>
      </Layout>
    </header>
  );
};
