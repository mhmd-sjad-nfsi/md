import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  
  function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError("confirmPassword is wrong");
        return;
      }
      if (password.length < 6) {
        setError("Password character should be older than 6 ");
        return;
      }
      setError("");
      console.log("Sign up is successFull", { name, email, password });
    };
  
    return (
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
        <Typography variant="h5" mb={3} textAlign="center">
            Sign Up
        </Typography>
        <Box component="form" onSubmit={handleRegister}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
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
            <TextField
              label="ConfirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              required
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary">
              SignUp
            </Button>
          </Stack>
        </Box>
      </Paper>
    );
  }
  
  export default RegisterForm;
  