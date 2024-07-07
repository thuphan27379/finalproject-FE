import * as React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
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
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

import useAuth from "../hooks/useAuth";
import Aboutus from "../pages/AboutUs";
import { ColorModeContext } from "../theme/index"; // dark/light

// main menu
const pages = [
  {
    label: "About us",
    path: "", //aboutus
    element: <Aboutus />, //??
    icon: <AdsClickOutlinedIcon sx={{ color: "primary" }} />, //??
  },
  { label: "Projects", path: "" }, //project
  { label: "Domains", path: "" }, //domain
  { label: "Startup", path: "" }, //startup
  // cong ðong khoi nghiep, ho so doanh nghiep (friend=follow)
  { label: "Community", path: "blog" }, //path: "blog"
  { label: "Contact us", path: "" },
];

// avatar menu
const settings = [
  { label: "My Domains", path: "" },
  { label: "My Profile", path: "blog" },
  { label: "My Groups", path: "blog" }, //group
  { label: "Settings", path: "account" },
  { label: "Logout", path: "login" }, // home
  // { label: "Login", path: "login" },
];

//
function ResponsiveAppBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const colorMode = React.useContext(ColorModeContext); // dark/light
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null); //icon menu for responsive
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // menu responsive
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

  // logout
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

  // search style
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
          color: "", //black
          backgroundColor: "black",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* logo */}
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
                  title="BizHolding"
                  src="./huongsac-logo.png"
                  to="/"
                  component={RouterLink}
                />
              </IconButton>

              {/* company name */}
              <Typography
                variant="h5"
                noWrap
                to="/"
                component={RouterLink}
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
                    fontWeight: 450,
                  }}
                  to={`/${page.path}`}
                  component={RouterLink} //{pages.element}
                  //icon for main menu ??
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

            {/* search input  */}
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

            {/* feature icons */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingLeft: "20px",
                paddingRight: "50px",
              }}
            >
              {/* dark/light */}
              {/* mode OR colorMode */}
              {theme.palette.mode} mode
              <IconButton
                size="large"
                aria-label="switch dark/light modes"
                color="inherit"
                title="Dark Mode"
                onClick={colorMode.toggleColorMode}
              >
                {theme.palette.colorMode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <NightlightOutlinedIcon />
                )}
                {/* <LightModeIcon /> */}
              </IconButton>
              {/*  */}
              <IconButton
                size="large"
                aria-label="switch languages English/Vietnamese"
                color="inherit"
                title="EN-VN"
              >
                <PublicIcon />
              </IconButton>
              {/* avt account & menu  */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* show notification if login only  */}
                    <Badge
                      variant="dot" //
                      badgeContent=" " //{4}
                      color="primary" //secondary
                      showZero
                    >
                      <Avatar
                        src={user?.avatarUrl}
                        sx={{
                          width: "35px",
                          height: "35px",
                          border: "2px solid #B31942 ",
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "40px" }}
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

                  {/* hide if logout */}
                  <Divider />

                  {/* if login - show logout, else login ??*/}
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
                      {/*  if (!user) return (<Typography textAlign="center">{setting.label = }Login</Typography>) else {}                              */}

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
