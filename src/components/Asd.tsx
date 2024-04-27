import { useState, useEffect, FC, useRef, ChangeEvent } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
// import { v4 as uuidv4 } from "uuid";

const BASE_URL = "http://localhost:4000";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const generateRandomUniqueId = () =>
  Date.now() + Math.floor(Math.random() * 1000000);

const capitalizeFirstLetter = (content: string) => {
  return content.charAt(0).toUpperCase() + content.slice(1);
};

export const UserList: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  // Allows you to call the abort function on it and then cancel a request and...

  // MARK: GET
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

  // MARK: HANDLE FUNC
  const handleInputChange =
    (inputName: keyof Omit<IPost, "id" | "userId">) =>
    (
      e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [inputName]: value,
      }));
    };

  // MARK: POST
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, body } = formData;
    const userId = 10;
    const id = generateRandomUniqueId();

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          id,
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

      setPosts((prevPosts) => [...prevPosts, newPost]);
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleEditClick = (postId: number) => {
    setEditingPostId(postId);
    const postToEdit = posts.find((post) => post.id === postId);
    if (postToEdit) {
      setFormData({
        title: postToEdit.title,
        body: postToEdit.body,
      });
    }
  };

  // MARK: PUT
  const handleEditSubmit = async (postId: number) => {
    if (!editingPostId) return;

    const { title, body } = formData;

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: 10,
          id: postId,
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to edit post");
      }

      const editedPost = await response.json();

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === editedPost.id ? { ...post, ...editedPost } : post
        )
      );

      setEditingPostId(null);
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  // MARK: DELETE
  const onDeletePost = (postId: number) => {
    fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
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
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-4 h-full">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-center items-end p-8 gap-x-4 w-[48%] border-2 rounded-3xl h-full"
                style={{ flex: "0 1 48%" }}
              >
                <div className="flex flex-col justify-center items-start w-full [&>*]:w-full">
                  {editingPostId === post.id ? (
                    <>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={handleInputChange("title")}
                        className="border outline-none px-1 mb-2 font-bold"
                      />
                      <textarea
                        value={formData.body}
                        onChange={handleInputChange("body")}
                        className="border outline-none p-1 h-[100px] resize-none mb-8"
                      />

                      <div className="flex items-center justify-end mt-auto [&>*]:mx-2">
                        <Button
                          title="Save Changes"
                          onClick={() => handleEditSubmit(post.id)}
                        />

                        <Button
                          title="Cancel"
                          onClick={() => setEditingPostId(null)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-xl font-bold mb-1">
                        {capitalizeFirstLetter(post.title)}
                      </div>

                      <div className="mb-8">
                        {capitalizeFirstLetter(post.body)}
                      </div>

                      <div className="flex items-center justify-end mt-auto [&>*]:mx-2">
                        <Button
                          title="Edit"
                          onClick={() => handleEditClick(post.id)}
                        />

                        <Button
                          title="Delete"
                          onClick={() => onDeletePost(post.id)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleFormSubmit} className="flex my-10">
            <div className="flex items-center [&>*]:mx-2">
              <label>
                Title:
                <input
                  required
                  className="border outline-none ml-1.5 px-1"
                  type="text"
                  value={editingPostId ? "" : formData.title}
                  onChange={handleInputChange("title")}
                />
              </label>

              <label>
                Description:
                <input
                  required
                  className="border outline-none ml-1.5 px-1"
                  type="text"
                  value={editingPostId ? "" : formData.body}
                  onChange={handleInputChange("body")}
                />
              </label>
            </div>

            <Button title="Create Post" type="submit" className="ml-4" />
          </form>
        </Container>
      )}
    </>
  );
};
