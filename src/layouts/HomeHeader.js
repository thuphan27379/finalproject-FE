import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Badge, Stack, Divider, InputAdornment } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import PropTypes from 'prop-types';

import useAuth from '../hooks/useAuth';
import Aboutus from '../pages/AboutUs';
import Projects from '../pages/Projects';
import Domains from '../pages/Domains';
import Startup from '../pages/Startup';
import Contact from '../pages/Contact';
import { ColorModeContext } from '../theme/index'; // dark/light
import {
  getDomainForSale,
  getDomainForStartup,
} from '../features/home/homeSlice';

// main menu
const pages = [
  { label: 'About us', path: 'about', element: <Aboutus /> },
  { label: 'Project', path: 'project', element: <Projects /> },
  { label: 'Startup', path: 'startup', element: <Startup /> },
  { label: 'Domain', path: 'domain', element: <Domains /> },
  { label: 'Community', path: 'blog' }, // cong ðong khoi nghiep & ho so doanh nghiep (friend=follow)
  { label: 'Contact us', path: 'contact', element: <Contact /> },
];

// avatar menu
const settings = [
  { label: 'My Startup', path: 'startup' },
  { label: 'My Domain', path: 'domain' },
  { label: 'My Profile', path: 'blog' },
  { label: 'My Group', path: 'blog' }, // group
  { label: 'Setting', path: 'account' },
  { label: 'Admin', path: 'admin' }, // admin login
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
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 30, right: 30 }}
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
  const { user, logout } = useAuth(); // lam sao lay admin
  const navigate = useNavigate();
  const colorMode = React.useContext(ColorModeContext); // dark/light
  const theme = useTheme();
  // console.log(theme);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [value, setValue] = useState(''); // search
  // console.log(value);
  const location = useLocation();
  // console.log(location);
  const path = location.pathname;

  const [anchorElNav, setAnchorElNav] = React.useState(null); // icon menu for responsive
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // how to get roll of user
  // const adminLogged = user.roles;

  // hamburger for tablet
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // menu responsive
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // popup avt menu
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
        navigate('/');
      });
    } catch (error) {
      console.error(error);
    }
  };

  // search domain
  const handleSearch = (event) => {
    event.preventDefault();
    const q = value;

    if (path === `/domain`) {
      dispatch(getDomainForSale({ q }));
    } else {
      dispatch(getDomainForStartup({ q }));
    }
    // console.log(event.target.value);
    setValue();
  };

  useEffect(
    (q) => {
      if (path === `/domain`) {
        dispatch(getDomainForSale({ q, page: page + 1 }));
      } else {
        dispatch(getDomainForStartup({ q, page: page + 1 }));
      }
    },
    [dispatch, page]
  );

  //
  return (
    <>
      <AppBar
        position="fixed" // sticky
        maxWidth="100%"
        maxHeight="64px"
        sx={{
          backgroundColor: '#000',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 'none',
          borderBottom: '1px solid #0A3161',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            disableGutters
          >
            <Stack
              direction="row"
              sx={{
                paddingLeft: '50px',
                alignItems: 'center',
              }}
              to="/"
            >
              {/* hamburger */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle}
                onClick={handleOpenNavMenu}
                sx={{
                  mr: 2,
                  p: 0,
                  display: { sm: 'block', md: 'block', lg: 'none' },
                }} // responsive hamburger
              >
                <CottageOutlinedIcon />
              </IconButton>

              {/* logo */}
              <IconButton sx={{ p: 0, mr: 2 }}>
                <Avatar
                  sx={{
                    width: '65px',
                    height: '60px',
                    borderRadius: 'unset',
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
                  display: { sm: 'none', md: 'none', lg: 'block' }, // responsive company name
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                  color: '#B31942 ',
                }}
              >
                BizHolding
              </Typography>
            </Stack>

            {/* main menu, color when active */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, // responsive main menu
                paddingLeft: '50px',
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: '#fff',
                    display: 'block',
                    textTransform: 'none',
                    fontWeight: 450,
                  }}
                  to={`/${page.path}`}
                  component={RouterLink} // {pages.element}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* search input, search domain by name  */}
            <Stack>
              <form onSubmit={handleSearch}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SavedSearchIcon
                          sx={{
                            color: '#0A3161',
                            margin: 0,
                            padding: 0,
                            width: '30px',
                            height: '30px',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  label="Start your domain search!"
                  style={{ color: '#0A3161' }}
                  sx={{
                    color: 'secondary',
                    width: '270px',
                  }}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            </Stack>

            {/* feature icons */}
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingLeft: '20px',
                paddingRight: '50px',
              }}
            >
              {/* dark/light */}
              <IconButton
                sx={{
                  marginTop: '5px',
                  display: { sm: 'none', md: 'none', lg: 'block' },
                }} // responsive dark/light
                size="large"
                aria-label="switch dark/light modes"
                color="inherit"
                title="Dark/Light"
                onClick={colorMode.toggleColorMode}
              >
                {theme.palette.mode === 'dark' ? (
                  <NightsStayOutlinedIcon />
                ) : (
                  <WbSunnyOutlinedIcon />
                )}
              </IconButton>

              {/* EN-VN */}
              <IconButton
                sx={{ display: { sm: 'none', md: 'none', lg: 'flex' } }} // responsive EN-VN
                size="large"
                aria-label="switch languages English/Vietnamese"
                color="inherit"
                title="EN-VN"
              >
                <PublicIcon />
              </IconButton>

              {/* EN-VN */}
              <IconButton
                sx={{ display: { sm: 'none', md: 'none', lg: 'flex' } }} // responsive EN-VN
                size="large"
                aria-label=""
                color="inherit"
                title="Coming soon"
              >
                <AutoAwesomeOutlinedIcon />
              </IconButton>

              {/* avt account & menu  */}
              <Box
                sx={{
                  flexGrow: 0,
                  display: {
                    xs: 'none',
                    sm: 'block',
                    md: 'block',
                    lg: 'block',
                  }, // responsive avt menu
                }}
              >
                <Tooltip title="Account Profile">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      p: 0,
                      display: {
                        xs: 'none',
                        sm: 'flex',
                        md: 'flex',
                        lg: 'block',
                      },
                    }}
                  >
                    {/* show notification if login only  */}
                    <Badge
                      variant="dot"
                      badgeContent=" "
                      color="primary"
                      showZero
                    >
                      <Avatar
                        src={user?.avatarUrl}
                        sx={{
                          width: '40px',
                          height: '40px',
                          border: '2px solid #B31942 ',
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: '40px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontWeight: '600',
                      color: '#B31942',
                      paddingBottom: '7px',
                    }}
                  >
                    {user?.name}
                  </Typography>

                  {/* hide if logout */}
                  {user ? <Divider sx={{ backgroundColor: '#0A3161' }} /> : ''}

                  {settings.map((setting, index) => (
                    <MenuItem
                      key={index}
                      onClick={
                        setting.label === 'Logout'
                          ? handleLogout
                          : handleCloseUserMenu
                      }
                      to={`/${setting.path}`}
                      component={RouterLink}
                      sx={{ color: '#0A3161' }}
                    >
                      <Typography textAlign="center">
                        {setting.label}
                      </Typography>
                    </MenuItem>
                  ))}

                  {/* if login - show logout, else login */}
                  {user ? (
                    <MenuItem onClick={handleLogout}>
                      <Typography sx={{ color: '#0A3161' }} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      to="/login"
                      component={RouterLink}
                    >
                      <Typography sx={{ color: '#0A3161' }} textAlign="center">
                        Login
                      </Typography>
                    </MenuItem>
                  )}

                  {/* admin , if user.roles === 'admin'*/}
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </Container>

        {/* go to top of page */}
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardDoubleArrowUpOutlinedIcon
              sx={{ color: '#0A3161', backgroundColor: 'transparent' }}
            />
          </Fab>
        </ScrollTop>
      </AppBar>

      <Toolbar
        sx={{ display: { sm: 'block', md: 'block', lg: 'block' } }} // responsive blank page
        id="back-to-top-anchor"
      />

      {/* menu in the hamburger */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { lg: 'none' },
        }}
      >
        {pages.map((page, index) => (
          <MenuItem
            key={index}
            onClick={handleCloseNavMenu}
            to={`/${page.path}`}
            component={RouterLink}
          >
            <Typography textAlign="center">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default ResponsiveAppBar;
