import { Box, TextField, Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const AddTodo = ({ role }) => {
  const isAdmin = role === "admin";
  return (
    <>
      <TextField label="Add / Edit" variant="outlined" fullWidth />
      <Button
        variant="contained"
        color="success"
        startIcon={<AutoAwesomeIcon />}
        sx={{ width: { xs: "100%", sm: "200px" } }}
        disabled={!isAdmin}
      >
        Add / Edit
      </Button>
    </>
  );
};

export default AddTodo;
