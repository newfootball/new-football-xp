import { Layout } from "@/components/layout";
import Link from "next/link";

export const RulesLinks = () => {
  return (
    <div className="m-auto border-t border-accent bg-background py-2">
      <Layout className=" flex items-center gap-2">
        <div className="flex-1">
          <p className="text-xs">
            &copy; 2021 Example, Inc. All rights reserved.
          </p>
        </div>
        <div>
          <Link href="/privacy" className="text-xs">
            Privacy Policy
          </Link>
        </div>
      </Layout>
    </div>
  );
};
