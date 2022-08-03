import { Post } from "../components/SocialPosts";
import { IconTrash } from "@tabler/icons";

export interface PostProp {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostInList({ post, onDelete }: PostProp) {
  return (
    <div>
      <div className="post-container">
        <div className="list-info">
          <h2>{post.title}</h2>
          <p>{post.thought}</p>
        </div>
        <div className="delete-btn">
          <IconTrash size={24} onClick={() => onDelete(post.id)} />
        </div>
      </div>
    </div>
  );
}
