import React, { useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
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
import InputBase from "@mui/material/InputBase";
import { Badge, Stack, Divider, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LightModeIcon from "@mui/icons-material/LightMode";
import PublicIcon from "@mui/icons-material/Public";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";

import useAuth from "../hooks/useAuth";
import Aboutus from "../pages/AboutUs";
import Projects from "../pages/Projects";
import Domains from "../pages/Domains";
import Startup from "../pages/Startup";
import { ColorModeContext } from "../theme/index"; // dark/light
import { getDomainForSale, getSearchDomain } from "../features/home/homeSlice";

// main menu
const pages = [
  {
    label: "About us",
    path: "about", //about
    element: <Aboutus />, //??
    icon: <AdsClickOutlinedIcon sx={{ color: "primary" }} />, //??
  },
  { label: "Project", path: "project", element: <Projects /> }, //our projects
  { label: "Startup", path: "startup", element: <Startup /> }, // startup
  { label: "Domain", path: "domain", element: <Domains /> }, // domain for sale
  // cong ðong khoi nghiep & ho so doanh nghiep (friend=follow)
  { label: "Community", path: "blog" }, //path: "blog"
  { label: "Contact us", path: "about", element: <Aboutus /> },
];

// avatar menu
const settings = [
  { label: "My Startup", path: "" },
  { label: "My Domain", path: "" },
  { label: "My Profile", path: "blog" },
  { label: "My Group", path: "group" }, // group
  { label: "Setting", path: "account" },
  { label: "Logout", path: "login" }, // home
  // { label: "Login", path: "login" },
];

// go to top
function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  // ???
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

//
function ResponsiveAppBar(props) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const colorMode = React.useContext(ColorModeContext); // dark/light
  const theme = useTheme();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [value, setValue] = useState(""); // search
  // console.log(value);

  const [anchorElNav, setAnchorElNav] = React.useState(null); // icon menu for responsive
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // menu responsive
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
    // responsive
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
      // responsive
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // from BE
  const { searchDomainResult, domains, currentPage, isLoading, totalPages } =
    useSelector((state) => state.home);
  // console.log(searchDomainResult);

  // handle Search Domain by name
  // const handleSearchDomain = (e) => {
  //   // setFilterDomain(e);
  //   props.click(value);
  //   console.log(e);
  // };

  const handleSearch = (event) => {
    event.preventDefault();
    // setValue(event.target.value); // lag lag lag
    const q = value;
    dispatch(getDomainForSale({ q }));
    console.log(event.target.value);
  };

  // dispatch
  useEffect(() => {
    dispatch(getDomainForSale({ page: page + 1 }));
  }, [page]);

  //
  return (
    <>
      <AppBar
        position="fixed"
        maxWidth="100%"
        maxHeight="64px"
        sx={{
          color: "#fff", //
          backgroundColor: "#000",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
          borderBottom: "1px solid #0A3161",
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
                BizHolding
              </Typography>
            </Stack>

            {/* main menu, when active? */}
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
                    color: "#fff",
                    display: "block",
                    textTransform: "none",
                    fontWeight: 450,
                  }}
                  to={`/${page.path}`}
                  component={RouterLink} //{pages.element}
                  //icon for main menu ??
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" color="#fff">
                        {page.icon}
                      </InputAdornment>
                    ),
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* search input, search domain by name  */}
            <Stack>
              <Search sx={{ width: "300px" }}>
                <SearchIconWrapper>
                  <SearchIcon onClick={handleSearch} />
                </SearchIconWrapper>

                <form onSubmit={handleSearch}>
                  <StyledInputBase
                    // handleSubmit={handleSearchDomain} //q
                    placeholder="Search domain..."
                    inputProps={{
                      "aria-label": "search",
                      // onKeyPress: (e) => {
                      //   // e.preventDefault();
                      //   if (e.key === "Enter") {
                      //     console.log(value);
                      //   }
                      // },
                    }}
                    // value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onSubmit={handleSearch}
                  />
                </form>
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
                "& .MuiStack-root div.css-1kfvitx-MuiStack-root:empty": {
                  display: "none",
                },
              }}
            >
              {/* dark/light */}
              <IconButton
                size="large"
                aria-label="switch dark/light modes"
                color="inherit"
                title="Dark/Light Mode"
                onClick={colorMode.toggleColorMode}
              >
                {theme.palette.colorMode === "dark" ? (
                  <NightlightOutlinedIcon />
                ) : (
                  <LightModeIcon />
                )}
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
                  <Divider sx={{ backgroundColor: "#0A3161" }} />

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
                      sx={{ color: "#0A3161" }}
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

        {/* go to top of page
        color="secondary"
        style={{ fill: "#0A3161" }}
        sx={{ color: "#0A3161" }}
        htmlColor="#0A3161"
        ?*/}
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardDoubleArrowUpOutlinedIcon
              sx={{ color: "#0A3161", backgroundColor: "transparent" }}
            />
          </Fab>
        </ScrollTop>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
