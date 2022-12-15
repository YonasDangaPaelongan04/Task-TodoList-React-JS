import logo from "../logo.svg";
import axios from "axios";
import "../App.css";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import FormInput from "../components/FormInput.js";
import TodoList from "../components/TodoList.js";
import EditModal from "../components/EditModal.js";
import ModalDelete from "../components/ModalDelete";
import Button from "../components/Button";

const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1/todo";

const Task = () => {
  const { logout } = useContext(AuthContext);
  const { loading, setLoading } = useState(false);
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsedit] = useState(false);
  const [editData, setEditdata] = useState({
    id: "",
    title: "",
  });

  const deletemodulTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    await axios.get(`${baseUrl}/todo/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    setTodos(todos.filter((item) => item._id !== id));
  };
  // Update Data di button Edit

  const update = () => {
    const { id, title } = editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    setTodos(newTodos);
    setIsedit(false);
    setEditdata({ id: "", title: "" });
  };

  // Mengubah data pada modal edit

  const setTitle = (e) => {
    setEditdata({
      editData: {
        ...editData,
        title: e.target.value,
      },
    });
  };

  // Open modal ketika button edit di klik

  const openModal = (id, data) => {
    setIsedit(true);
    setEditdata({ id, title: data });
  };

  // Close modal ketika button tutup pada modal di klik

  const closeModal = () => {
    setIsedit(false);
  };

  // Menambahkan data ketika button Add di klik

  const addTask = (data) => {
    setTodos([...todos, data]);
  };

  const getData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await axios.get(`${baseUrl}/todo`, {
      headers: {
        Authorization: token,
      },
    });
    setTodos(res.data.todos);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="app">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h3> React Todo App </h3>
          <Button text="logout" variant="primary" action={logout} />
        </div>
        {/* Menampilkan List Item */}
        <div className="List">
          {todos.map((item) => (
            <TodoList
              key={item._id}
              del={deleteTask}
              deltask={deletemodulTask}
              todo={item}
              close={closeModal}
              open={openModal}
              edit={isEdit}
              loading={loading}
            />
          ))}
        </div>
        {/* Menambahkan List Item */}
        <div>
          <FormInput add={addTask} />
        </div>
        <div>
          {/* Menampilkan modal Edit */}
          <EditModal
            edit={isEdit}
            close={closeModal}
            change={setTitle}
            data={editData}
            update={update}
          />
        </div>
        {/* Menampilkan modal delete */}
        <div>
          {todos.map((item) => (
            <ModalDelete
              key={item.id}
              deltask={deletemodulTask}
              todo={item}
              // close={closedeleteModal}
              del={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
