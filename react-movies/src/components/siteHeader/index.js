import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dropdownOpen = Boolean(dropdownAnchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular Movies", path: "/movies/popular" },
  ];

  const dropdownMenuOptions = [
    { label: "Trending Movies", path: "/movies/trending" },
    { label: "Now Playing Movies", path: "/movies/now-playing" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorEl(null);
    setDropdownAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownMenu = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have logged out.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
                <MenuItem aria-haspopup="true" onClick={handleDropdownMenu}>
                  More
                </MenuItem>
                <Menu
                  id="dropdown-menu"
                  anchorEl={dropdownAnchorEl}
                  open={dropdownOpen}
                  onClose={() => setDropdownAnchorEl(null)}
                >
                  {dropdownMenuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
                {user ? (
                  <>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => handleMenuSelect("/login")}>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuSelect("/signup")}>
                      Sign Up
                    </MenuItem>
                  </>
                )}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
              <Button
                color="inherit"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleDropdownMenu}
              >
                More
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={dropdownAnchorEl}
                open={dropdownOpen}
                onClose={() => setDropdownAnchorEl(null)}
              >
                {dropdownMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
              {user ? (
                <>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "1em", color: "white" }}
                  >
                    Welcome, {user.email}
                  </Typography>
                  <Button color="inherit" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="inherit"
                    onClick={() => handleMenuSelect("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleMenuSelect("/signup")}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
