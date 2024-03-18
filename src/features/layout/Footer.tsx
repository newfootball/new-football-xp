import { Layout } from "@/components/layout";
import { ImagePlus } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 m-auto border-t border-accent bg-background py-2">
      <Layout className=" flex items-center gap-2">
        <div className="flex-1">
          <p className="text-xs">
            &copy; 2021 Example, Inc. All rights reserved.
          </p>
        </div>
        <div className="flex-1">
          <Link href="/post/new">
            <ImagePlus size={32} />
          </Link>
        </div>
        <div>
          <a href="/privacy" className="text-xs">
            Privacy Policy
          </a>
        </div>
      </Layout>
    </footer>
  );
};
