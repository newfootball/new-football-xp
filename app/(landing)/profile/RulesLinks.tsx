import { Layout } from "@/components/layout";
import Link from "next/link";

export const RulesLinks = () => {
  return (
    <div className="m-auto mt-5 border-t border-accent bg-background py-2">
      <Layout className=" flex items-center gap-2">
        <div className="flex-1">
          <p className="text-xs">
            &copy; 2021 Example, Inc. All rights reserved.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};
