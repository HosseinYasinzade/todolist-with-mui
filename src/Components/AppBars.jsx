import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const AppBars = ({ btnText }) => {
  const navigate = useNavigate();
  return (
    <AppBar color="error">
      <Toolbar>
        <Typography variant="h4">Todo List</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(btnText === "Login" ? "/login" : "/")}
        >
          {btnText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBars;
