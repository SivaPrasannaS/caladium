import { useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import avatar from '../../assets/images/avatar.png';
import Popup from './Popup'; // Import the Popup component
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];
const settings = [
    { label: 'Profile', icon: <PermIdentityIcon /> },
    { label: 'Help Center', icon: <HelpIcon /> },
    { label: 'Logout', icon: <ExitToAppIcon /> }
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        setOpenLogoutPopup(true);
    };

    const handleLogoutConfirmation = () => {
        dispatch(setAuthentication(false));
        dispatch(setToken(""))
        dispatch(setUser({}));
        setOpenLogoutPopup(false);
        navigate("/sign_in")
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#0F0F0F" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            CALADIUM
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
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
                                    '& .MuiMenu-paper': {
                                        backgroundColor: '#000',
                                        color: '#fff'
                                    },
                                    display: {
                                        xs: 'block', md: 'none'
                                    }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem sx={{
                                        '&:hover': {
                                            color: '#e50914'
                                        }
                                    }} key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <LiveTvIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            CALADIUM
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: 'white', display: 'block', '&:hover': {
                                            backgroundColor: '#e50914'
                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Tooltip title="Search">
                            <SearchIcon sx={{ marginRight: 2, cursor: "pointer", '&:hover': { color: '#e50914' } }} />
                        </Tooltip>
                        <Tooltip title="Notifications">
                            <NotificationsIcon sx={{ marginRight: 2, cursor: "pointer", '&:hover': { color: '#e50914' } }} />
                        </Tooltip>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Siva Prasanna" src={avatar} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{
                                    mt: '45px',
                                    '& .MuiMenu-paper': {
                                        backgroundColor: '#000',
                                        color: '#fff'
                                    }
                                }}
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
                                {settings.map((setting, index) => (
                                    <MenuItem
                                        sx={{
                                            '&:hover': {
                                                color: '#e50914'
                                            }
                                        }}
                                        key={index}
                                        onClick={setting.label === 'Logout' ? handleLogout : handleCloseUserMenu}
                                    >
                                        {setting.icon}
                                        <Typography textAlign="center" sx={{ marginLeft: 1 }}>{setting.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Popup
                title="Are you sure you want to logout?"
                disagree="Cancel"
                agree="Logout"
                open={openLogoutPopup}
                onClose={() => setOpenLogoutPopup(false)}
                onAgree={handleLogoutConfirmation}
            />
        </>
    )
}

export default Navbar;