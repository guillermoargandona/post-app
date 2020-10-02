import React from "react";

const PostTable = (props) => {
  return (
    <table className="striped responsive-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {props.posts.map((post) => {
          if (
            !props.postFilter ||
            post.nombre.toLowerCase().includes(props.postFilter.toLowerCase())
          ) {
            return (
              <tr key={post.id}>
                <td>{post.nombre}</td>
                <td>{post.descripcion}</td>
                <td>
                  <button
                    className="btn red darken-1"
                    type="submit"
                    value="Eliminar"
                    onClick={(e) => props.handleDelete(e, post)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          } else return null;
        })}
      </tbody>
    </table>
  );
};

export default PostTable;
