import React from "react";

const PostFilter = (props) => {
  return (
    <form>
      <div className="row valign-wrapper ">
        <div className="col s4">
          <label>
            Filtro por nombre
            <input
              type="text"
              name="filtro"
              onChange={(e) => props.setPostInputFilter(e.target.value)}
            />
          </label>
        </div>
        <div className="col s8">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            value="Buscar"
            disabled={props.posts.length === 0}
            onClick={props.handleSubmitPostFilter}
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostFilter;
