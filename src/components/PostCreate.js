import React from "react";

const PostCreate = (props) => {
  return (
    <form>
      <h5>Crear Post</h5>
      <div className="row valign-wrapper">
        <div className="col s3">
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={props.postName}
              onChange={(e) => props.setPostName(e.target.value)}
            />
          </label>
        </div>
        <div className="col s7">
          <label>
            Descripción:
            <input
              type="text"
              name="descripcion"
              value={props.postContent}
              onChange={(e) => props.setPostContent(e.target.value)}
            />
          </label>
        </div>
        <div className="col s2">
          <input
            className="btn waves-effect waves-light right"
            type="submit"
            value="Crear"
            disabled={!props.postName || !props.postContent}
            onClick={props.handleSubmit}
          />
        </div>
      </div>
    </form>
  );
};

export default PostCreate;
