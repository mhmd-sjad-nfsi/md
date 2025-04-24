import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
import { useState } from "react";
function LoginForm() {
    const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("email : ", email);
        console.log("password :", password);
      };
      
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
        <Typography variant="h4" mb={3} textAlign="center">
            Login
        </Typography>
        <Box component="form" onSubmit={handleLogin}>
            <Stack spacing={2}>
                <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                />
                 <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </Stack>
        </Box>
    </Paper>
  )};
  export default LoginForm;
