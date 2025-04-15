import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EditIcon from "@mui/icons-material/Edit";

const AddTodo = ({ onAdd, onEdit, editTodo }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editTodo) {
      setValue(editTodo.username);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    if (editTodo) {
      onEdit(value.trim());
    } else {
      onAdd(value.trim());
    }

    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "1rem", flex: 1 }}
    >
      <TextField
        label="Add / Edit"
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color={editTodo ? "info" : "success"}
        startIcon={editTodo ? <EditIcon /> : <AutoAwesomeIcon />}
        sx={{ width: { xs: "100%", sm: "200px" } }}
      >
        {editTodo ? "Edit" : "Add"}
      </Button>
    </form>
  );
};

export default AddTodo;
