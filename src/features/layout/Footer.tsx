import { Layout } from "@/components/layout";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 m-auto border-t border-accent bg-background py-2">
      <Layout className=" flex items-center gap-2">
        <div className="flex-1">
          <p className="text-xs">
            &copy; 2021 Example, Inc. All rights reserved.
          </p>
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
