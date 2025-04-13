import AppBars from "./AppBars";
import { Box } from "@mui/material";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || "user";

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("خطا در دریافت تسک‌ها:", err));
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
      console.error("خطا در به‌روزرسانی:", err);
    }
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
            <AddTodo />
          </Box>

          <Todos
            todos={todos}
            role={role}
            onCheckboxChange={handleCheckboxChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default TodoList;
