import React, { Fragment } from "react";
import { AuthProvider } from "./context/Auth";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Task from "./views/Task";
import PrivateRoute from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <AuthProvider> */}
        <Route path="/" element={<Auth />} />
        <PrivateRoute path="/task" element={<Task />} />
        {/* </AuthProvider> */}
      </Routes>
    </div>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import FormInput from "./components/FormInput.js";
// import TodoList from "./components/TodoList.js";
// import EditModal from "./components/EditModal.js";
// import ModalDelete from "./components/ModalDelete";

// class App extends React.Component {
//   state = {
//     todos: [
//       {
//         id: 1,
//         title: "reading a book",
//       },
//       {
//         id: 2,
//         title: "workout training",
//       },
//     ],
//     isEdit: false,
//     editData: {
//       id: "",
//       title: "",
//     },
//     isDelete: false,
//     deleteData: {
//       id: "",
//     },
//   };

//   deletemodulTask = (id) => {
//     this.setState({
//       isDelete: true,
//       deleteData: {
//         id,
//         todos: this.state.todos.filter((item) => item.id != id),
//       },
//     });
//   };

//   // Update Data di button Edit

//   update = () => {
//     const { id, title } = this.state.editData;
//     const newData = { id, title };
//     const newTodos = this.state.todos;
//     newTodos.splice(id - 1, 1, newData);
//     this.setState({
//       todos: newTodos,
//       isEdit: false,
//       editData: {
//         id: "",
//         title: "",
//       },
//     });
//   };

//   // Mengubah data pada modal edit

//   setTitle = (e) => {
//     this.setState({
//       editData: {
//         ...this.state.editData,
//         title: e.target.value,
//       },
//     });
//   };

//   // Open modal ketika button edit di klik

//   openModal = (id, data) => {
//     this.setState({
//       isEdit: true,
//       editData: {
//         id,
//         title: data,
//       },
//     });
//   };

//   // Close modal ketika button tutup pada modal di klik

//   closeModal = () => {
//     this.setState({
//       isEdit: false,
//     });
//   };

//   closedeleteModal = () => {
//     this.setState({
//       isDelete: false,
//     });
//   };

//   deleteTask = (id) => {
//     this.setState({
//       id: "",
//       todos: this.state.todos.filter((item) => item != id),
//     });
//   };

//   // Menambahkan data ketika button Add di klik

//   addTask = (data) => {
//     const id = this.state.todos.length;
//     const newData = {
//       id: id + 1,
//       title: data,
//     };

//     this.setState({
//       todos: [...this.state.todos, newData],
//     });
//   };
//   render() {
//     const { todos } = this.state;
//     return (
//       <div>
//         <div className="app">
//           <div className="Logo">
//             <img src={logo} alt="logo" />
//             <h3> React Todo App </h3>
//           </div>
//           {/* Menampilkan List Item */}
//           <div className="List">
//             {todos.map((item) => (
//               <TodoList
//                 key={item.id}
//                 del={this.deleteTask}
//                 deltask={this.deletemodulTask}
//                 todo={item}
//                 close={this.closeModal}
//                 open={this.openModal}
//                 edit={this.state.isEdit}
//               />
//             ))}
//           </div>
//           {/* Menambahkan List Item */}
//           <div>
//             <FormInput add={this.addTask} />
//           </div>
//           <div>
//             {/* Menampilkan modal Edit */}
//             <EditModal
//               edit={this.state.isEdit}
//               close={this.closeModal}
//               change={this.setTitle}
//               data={this.state.editData}
//               update={this.update}
//             />
//           </div>
//           {/* Menampilkan modal delete */}
//           <div>
//             {todos.map((item) => (
//               <ModalDelete
//                 key={item.id}
//                 deltask={this.deletemodulTask}
//                 todo={item}
//                 close={this.closedeleteModal}
//                 isdelete={this.state.isDelete}
//                 del={this.deleteTask}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
