import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Stack,
  Paper,
  Typography,
} from "@mui/material";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return;
    }

    try {
      const checkUser = await axios.get("http://localhost:3000/users", {
        params: { username },
      });

      if (checkUser.data.length > 0) {
        return;
      }

      const allUsers = await axios.get("http://localhost:3000/users");
      const lastId =
        allUsers.data.length > 0
          ? Math.max(...allUsers.data.map((u) => u.id))
          : 0;
      const newId = lastId + 1;

      const role =
        username === "admin" && password === "123" ? "admin" : "user";

      const newUser = {
        id: newId,
        username,
        password,
        role,
      };

      await axios.post("http://localhost:3000/users", newUser);
      setUsername("");
      setPassword("");
      setRepeatPassword("");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5" align="center">
              Register
            </Typography>
            <TextField
              label="User Name"
              variant="outlined"
              required
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Password Again"
              variant="outlined"
              type="password"
              required
              fullWidth
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
