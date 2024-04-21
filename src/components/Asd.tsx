import { useState, useEffect, FC, useRef } from "react";
// import { v4 as uuidv4 } from "uuid"; - string

const BASE_URL = "http://localhost:4000";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const UserList: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  // Allows you to call the abort function on it and then cancel a request and...

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        setError(null);

        const response = await fetch(`${BASE_URL}/posts`, {
          method: "GET",
          signal: abortControllerRef.current?.signal,
          // ... that works through this signal
          // React Query preporuka
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const posts = (await response.json()) as IPost[];
        setPosts(posts);
      } catch (error: any) {
        if (error.name === "AbortError") {
          return;
        }

        setError("Something went wrong while fetching posts.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleInputChange =
    (inputName: keyof Omit<IPost, "id" | "userId">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [inputName]: value,
      }));
    };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, body } = formData;

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const newPost = await response.json();
      newPost.id = posts.length + 1;
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const onDeletePost = (postId: number) => {
    fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Deleting post", postId);
      })
      .finally(() => {
        console.log("Deleted post", postId);
      });
  };

  if (isLoading) {
    return <div className="text-xl font-bold">Loading...</div>;
  }

  return (
    <>
      {error && JSON.stringify(error)}
      {!isLoading && !error && posts && (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id} onClick={() => onDeletePost(post.id)}>
                <strong>{post.id} </strong>
                <strong>Title: {post.title}</strong>
                <br />
                Description: {post.body}
              </li>
            ))}
          </ul>

          <form onSubmit={handleFormSubmit} className="mt-3">
            <label>
              Title:
              <input
                required
                type="text"
                value={formData.title}
                onChange={handleInputChange("title")}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                required
                type="text"
                value={formData.body}
                onChange={handleInputChange("body")}
              />
            </label>
            <br />
            <button className="border p-1 font-bold mt-1" type="submit">
              Create Post
            </button>
          </form>
        </>
      )}
    </>
  );
};
