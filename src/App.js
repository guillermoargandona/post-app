import React, { useEffect, useState } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

import PostTable from "./components/PostTable";
import PostFilter from "./components/PostFilter";
import PostCreate from "./components/PostCreate";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postName, setPostName] = useState();
  const [postContent, setPostContent] = useState();
  const [postInputFilter, setPostInputFilter] = useState();
  const [postFilter, setPostFilter] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios("http://localhost:4000/api/posts");

      setPosts(result.data);
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await axios({
      method: "post",
      url: "http://localhost:4000/api/posts",
      data: {
        nombre: postName,
        descripcion: postContent,
      },
    });

    setPostName("");
    setPostContent("");

    const { id, nombre, descripcion } = result.data;

    const newPosts = [
      ...posts,
      { id: id, nombre: nombre, descripcion: descripcion },
    ];

    setPosts(newPosts);
  };

  const handleSubmitPostFilter = (event) => {
    event.preventDefault();
    setPostFilter(postInputFilter);
  };

  const handleDelete = async (event, postToDelete) => {
    event.preventDefault();

    await axios({
      method: "delete",
      url: `http://localhost:4000/api/posts/${postToDelete.id}`,
    });

    const newPosts = posts.filter((post) => post.id !== postToDelete.id);
    setPosts(newPosts);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="center">Post App</h1>
      </div>

      <div className="row" style={{ marginTop: "30px" }}>
        <PostFilter
          posts={posts}
          setPostInputFilter={setPostInputFilter}
          handleSubmitPostFilter={handleSubmitPostFilter}
        />
      </div>

      <div className="row">
        <PostTable
          posts={posts}
          postFilter={postFilter}
          handleDelete={handleDelete}
        />
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <PostCreate
          postName={postName}
          postContent={postContent}
          setPostName={setPostName}
          setPostContent={setPostContent}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
