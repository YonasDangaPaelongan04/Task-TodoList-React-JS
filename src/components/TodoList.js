import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import SkeletonLoading from "./SkeletonLoading";

const TodoList = ({ loading, todo, open, del }) => {
  const delById = (id) => {
    del(id);
  };

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <div style={list}>
          <p>{todo.title}</p>
          <div style={butn}>
            <Button
              text="Edit"
              variant="success"
              action={() => open(todo.id, todo.title)}
            />
            <Button
              text="Delete"
              variant="warning"
              action={() => delById(todo._id)}
            />
          </div>
        </div>
      )}
    </>
  );
};

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
  deltask: PropTypes.func,
};

export default TodoList;

const list = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3.5rem",
  padding: "1rem 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
  borderRadius: "20px",
};

const butn = {
  display: "flex",
};
