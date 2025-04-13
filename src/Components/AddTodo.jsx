import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const AddTodo = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onAdd(value.trim());
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
        color="success"
        startIcon={<AutoAwesomeIcon />}
        sx={{ width: { xs: "100%", sm: "200px" } }}
      >
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
