import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { PageParams } from "@/lib/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <div>Home page</div>
      <Button>Click me</Button>
    </Layout>
  );
}
