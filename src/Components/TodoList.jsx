import AppBars from "./AppBars";
import { Box } from "@mui/material";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || "user";

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Error in fetch: ", err));
  }, []);

  const handleCheckboxChange = async (id, checked) => {
    const updatedAction = checked ? "on" : "off";

    try {
      await axios.patch(`http://localhost:3000/todos/${id}`, {
        action: updatedAction,
      });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, action: updatedAction } : todo
        )
      );
    } catch (err) {
      console.error("Error to update: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("error: ", err);
    }
  };

  const handleAdd = async (text) => {
    try {
      const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
      const newTodo = {
        id: maxId + 1,
        todo: text,
        action: "off",
      };

      const res = await axios.post("http://localhost:3000/todos", newTodo);
      setTodos((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  const handleEditSubmit = async (text) => {
    try {
      const updatedTodo = { ...editTodo, todo: text };

      const res = await axios.put(
        `http://localhost:3000/todos/${editTodo.id}`,
        updatedTodo
      );

      setTodos((prev) =>
        prev.map((todo) => (todo.id === editTodo.id ? res.data : todo))
      );

      setEditTodo(null);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleEditClick = (todo) => {
    setEditTodo(todo);
  };

  return (
    <>
      <header>
        <AppBars btnText="Login" />
      </header>
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: 600,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <AddTodo
              onAdd={handleAdd}
              onEdit={handleEditSubmit}
              editTodo={editTodo}
            />
          </Box>

          <Todos
            todos={todos}
            role={role}
            onCheckboxChange={handleCheckboxChange}
            onDelete={handleDelete}
            onEditClick={handleEditClick}
          />
        </Box>
      </Box>
    </>
  );
};

export default TodoList;
