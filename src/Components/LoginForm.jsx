import { TextField, Button, Box, Stack, Paper } from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper elevation={3} sx={{ p: 5, width: 400 }}>
        <form>
          <Stack spacing={2}>
            <TextField
              label="User Name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
            />
            <Button variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
