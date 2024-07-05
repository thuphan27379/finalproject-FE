import * as React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { Badge, Stack, Divider, InputAdornment } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import PublicIcon from "@mui/icons-material/Public";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";

import useAuth from "../hooks/useAuth";

// main menu
const pages = [
  {
    label: "About us",
    path: "",
    icon: <AdsClickOutlinedIcon sx={{ color: "primary" }} />, //???
  },
  { label: "Projects", path: "" },
  { label: "Domains", path: "" },
  { label: "Startup", path: "" },
  { label: "Community", path: "blog" }, //path: "blog"
  { label: "Contact us", path: "" },
];

// avatar menu
const settings = [
  { label: "My Domains", path: "" }, //home
  { label: "My Profile", path: "blog" },
  { label: "My Groups", path: "blog" }, //group
  { label: "Settings", path: "account" }, //login
  { label: "Logout", path: "login" },
];

//
function ResponsiveAppBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // menu of avatar
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  //
  const handleLogout = async () => {
    try {
      handleCloseNavMenu();
      await logout(() => {
        navigate("/login"); //home
      });
    } catch (error) {
      console.error(error);
    }
  };

  // search
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  //
  return (
    <>
      <AppBar
        position="fixed"
        maxWidth="100%"
        maxHeight="64px"
        sx={{
          backgroundColor: "black",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
        }}
      >
        {/* logo */}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              direction="row"
              sx={{
                paddingLeft: "50px",
                alignItems: "center",
              }}
              to="/"
            >
              <IconButton sx={{ p: 0, mr: 2 }}>
                <Avatar
                  sx={{
                    width: "65px",
                    height: "60px",
                    borderRadius: "unset",
                  }}
                  alt=""
                  src="./huongsac-logo.png"
                  to="/"
                  component={RouterLink}
                />
              </IconButton>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "#B31942 ",
                  textDecoration: "none",
                }}
              >
                MyCompany
              </Typography>
            </Stack>

            {/* main menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                paddingLeft: "50px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                    fontWeight: 400,
                  }}
                  to={`/${page.path}`}
                  component={RouterLink}
                  //icon for main menu ???
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" color="white">
                        {page.icon}
                      </InputAdornment>
                    ),
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* search input, width!  */}
            <Stack>
              <Search sx={{ width: "300px" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search domain..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>

            {/* icons */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingLeft: "20px",
                paddingRight: "50px",
              }}
            >
              <IconButton
                size="large"
                aria-label="switch dark/light modes"
                color="inherit"
                title="Dark Mode"
              >
                <LightModeIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="switch languages English/ Vietnamese"
                color="inherit"
                title="EN-VN"
              >
                <PublicIcon />
              </IconButton>

              {/* avt account & menu  */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Badge>
                      <Avatar
                        alt="Account"
                        src={user?.avatarUrl}
                        sx={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      color: "#B31942",
                      paddingBottom: "7px",
                    }}
                  >
                    {user?.name}
                  </Typography>
                  <Divider />
                  {/* if login - logout, else login */}
                  {settings.map((setting, index) => (
                    <MenuItem
                      key={index}
                      onClick={
                        setting.label === "Logout"
                          ? handleLogout
                          : handleCloseUserMenu
                      }
                      to={`/${setting.path}`}
                      component={RouterLink}
                    >
                      <Typography textAlign="center">
                        {setting.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
