import { Post } from "../components/SocialPosts";
import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";
import { IconX } from "@tabler/icons";

export interface PostFormProps {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export default function PostForm({ onSubmit, onClose }: PostFormProps) {
  const [newPost, setNewPost] = useState<Post>({
    id: nanoid(),
    title: "",
    thought: "",
  });

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setNewPost({ ...newPost, ...{ [e.target.name]: e.target.value } });
  }

  function handleChangeElement(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewPost({ ...newPost, ...{ [e.target.name]: e.target.value } });
  }

  return (
    <div className="form-container">
      <div className="another-div">
        <form>
          <IconX onClick={onClose} className="btn-close" size={24} />

          <div className="inputs">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleChangeInput}
            />

            <label htmlFor="">Thought?</label>
            <textarea
              name="thought"
              id=""
              cols={30}
              rows={7}
              value={newPost.thought}
              onChange={handleChangeElement}
            ></textarea>

            <button
              className="submit"
              type="submit"
              onClick={() => onSubmit(newPost)}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
