import { Paper, Checkbox, Button, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todos = ({ todos, role }) => {
  const isAdmin = role === "admin";

  return (
    <>
      {todos.map((todo) => (
        <Paper key={todo.id} elevation={3} sx={{ p: 2, mb: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Checkbox defaultChecked={todo.action === "on"} />

            <Typography variant="h6" sx={{ flexGrow: 1, minWidth: 100 }}>
              {todo.todo}
            </Typography>

            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              disabled={!isAdmin}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="info"
              startIcon={<EditIcon />}
              disabled={!isAdmin}
            >
              Edit
            </Button>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default Todos;
