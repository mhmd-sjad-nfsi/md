import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
  } from "@mui/material";
  import { Brightness4, Brightness7 } from "@mui/icons-material";
  import { Link as RouterLink,  } from "react-router-dom";
  
  function Header({ mode, setMode }) {
  
    const toggleMode = () => {
      setMode((prev) => (prev === "light" ? "dark" : "light"));
    };
  
    return (
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar>
          {/* عنوان سمت چپ */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            MUI Shop
          </Typography>
  
          {/* دکمه‌های مسیر سمت راست */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              variant="outlined"
              size="small"
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              color="inherit"
              variant="outlined"
              size="small"
            >
              Register
            </Button>
            <IconButton onClick={toggleMode} color="inherit">
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  