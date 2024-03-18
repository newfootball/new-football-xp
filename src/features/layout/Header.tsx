import { Layout } from "@/components/layout";
import Image from "next/image";
import { LoggedinButton } from "../auth/LoggedinButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = () => {
  return (
    <header className="w-full border-b border-border px-4 py-1">
      <Layout className="flex items-center gap-4">
        <h1 className="flex-1">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        </h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedinButton />
        </div>
      </Layout>
    </header>
  );
};
