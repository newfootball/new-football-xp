import { Container } from "@/components/container";
import NewPostForm from "./NewPostForm";

export default function NewPostPage() {
  return (
    <Container>
      <h1 className="text-2xl">Add a new post</h1>
      <NewPostForm />
    </Container>
  );
}
