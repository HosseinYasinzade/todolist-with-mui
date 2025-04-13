import { Paper, Checkbox, Button, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todos = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Checkbox />
        <Typography variant="h6" sx={{ flexGrow: 1, minWidth: 100 }}>
          Test 1
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="info"
          startIcon={<EditIcon />}
          size="small"
        >
          Edit
        </Button>
      </Box>
    </Paper>
  );
};

export default Todos;
