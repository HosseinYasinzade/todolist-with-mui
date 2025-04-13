import { Paper, Box, Checkbox, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todos = ({ todos, role, onCheckboxChange, onDelete }) => {
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
            <Checkbox
              checked={todo.action === "on"}
              onChange={(e) => onCheckboxChange(todo.id, e.target.checked)}
            />

            <Typography variant="h6" sx={{ flexGrow: 1, minWidth: 100 }}>
              {todo.todo}
            </Typography>

            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              size="small"
              disabled={!isAdmin}
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="info"
              startIcon={<EditIcon />}
              size="small"
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
