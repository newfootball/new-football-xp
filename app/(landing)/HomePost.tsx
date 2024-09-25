import { Button } from "@/components/ui/button";
import { PostHome } from "@/query/posts.query";

export const HomePost = ({ post }: { post: PostHome }) => {
  return (
    <div key={post.id} className="bg-white py-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>

      {post.medias.map((media) => (
        <div key={media.id} className="mb-4">
          <video controls className="w-full h-auto">
            <source src={media.url} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      ))}

      <div className="px-4 divide-y divide-muted">
        <p className="text-gray-600 mb-4">{post.likes.length}</p>

        <Button variant="outline" className="text-blue-500 hover:text-blue-700">
          Lire la suite
        </Button>
      </div>
    </div>
  );
};
