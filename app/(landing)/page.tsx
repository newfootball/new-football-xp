import { Layout } from "@/components/layout";
import { PageParams } from "@/lib/next";
import { getLatestPosts } from "@/query/posts.query";
import { HomePost } from "./HomePost";

export default async function RoutePage(props: PageParams<{}>) {
  const posts = await getLatestPosts();

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <HomePost post={post} />
        ))}
      </div>
    </Layout>
  );
}
