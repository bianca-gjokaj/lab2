import { nanoid } from "nanoid";
import { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./PostForm.css";
import "./PostInList.css";

export interface Post {
  id: string;
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [displayForm, setDisplayForm] = useState(false);

  const [posts, setPosts] = useState<Post[]>([
    { id: nanoid(), title: "Hello!", thought: "We just getting started!!!" },
    { id: nanoid(), title: "See ya!", thought: "Now we ended!!!" },
  ]);

  function submitForms(post: Post) {
    setPosts((old) => [post, ...old]);
    close();
  }

  function display() {
    setDisplayForm(true);
  }

  function close() {
    setDisplayForm(false);
  }

  function deletePosts(id: string) {
    const postDuplicate = [...posts];
    let postIndex = postDuplicate.findIndex((e) => e.id === id);
    postDuplicate.splice(postIndex, 1);
    setPosts(postDuplicate);
  }

  return (
    <div className="social-container">
      <h1>My Thoughts</h1>
      <button onClick={display}>New Thought</button>

      <div className="form">
        {displayForm === true && (
          <PostForm onSubmit={submitForms} onClose={close} />
        )}
      </div>

      <div className="post">
        {posts.map((post) => (
          <PostInList key={post.id} post={post} onDelete={deletePosts} />
        ))}
      </div>
    </div>
  );
}
