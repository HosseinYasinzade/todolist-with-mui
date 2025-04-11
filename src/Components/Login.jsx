import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <header>
      <AppBar color="error">
        <Toolbar>
          <Typography variant="h4">Todo List</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="success">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Login;
