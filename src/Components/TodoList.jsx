import AppBars from "./AppBars";
import { Box } from "@mui/material";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const TodoList = () => {
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

          <Todos />
        </Box>
      </Box>
    </>
  );
};

export default TodoList;
