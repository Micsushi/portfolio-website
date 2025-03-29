import React, { useEffect, useState, useRef, memo } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import '../assets/styles/Navigation.scss';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Toast from './Toast';

const drawerWidth = 240;
const navItems = [['Home', 'home'], ['Expertise', 'expertise'], ['History', 'history'], ['Projects', 'projects'], ['Contact', 'contact']];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>(""); 
  const themeSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Function to play sound
  const playSound = () => {
    if (soundEnabled) {
      const clickSound = new Audio(process.env.PUBLIC_URL + '/woosh.wav');
      clickSound.volume = 0.4;
      clickSound.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };

  // Toggle sound on/off
  const toggleSound = () => {
    if (!soundEnabled) {
      themeSoundRef.current = new Audio(process.env.PUBLIC_URL + '/theme.mp4');
      themeSoundRef.current.volume = 0.1;
      themeSoundRef.current.loop = true;
      themeSoundRef.current.play().catch((error) => {
        console.error('Failed to play theme music:', error);
      });
      setToastMessage("Sound is ON");
    } else {
      if (themeSoundRef.current) {
        themeSoundRef.current.pause();
        themeSoundRef.current.currentTime = 0;
      }
      setToastMessage("Sound is OFF");
    }
    setSoundEnabled((prev) => !prev);
    setToastVisible(true); 
  };

  // Hide the Toast after 2 seconds
  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false); 
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }

      const sections = navItems.map((item) => item[1]);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      playSound();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => scrollToSection(item[1])}
              className={activeSection === item[1] ? 'active' : ''}
            >
              <ListItemText className="nav-list-item" primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar' sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' }
        }}>
          {/* Mobile menu button - left aligned */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { sm: 'none' },
              mr: 'auto' // Pushes everything else right
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Theme toggle - centered in mobile */}
          <Box sx={{ 
            position: { xs: 'absolute', sm: 'static' },
            left: { xs: '50%', sm: 'auto' },
            transform: { xs: 'translateX(-50%)', sm: 'none' },
          }}>
            {mode === 'dark' ? (
              <LightModeIcon onClick={() => modeChange()} />
            ) : (
              <DarkModeIcon onClick={() => modeChange()} />
            )}
          </Box>

          {/* Navigation items - hidden on mobile */}
          <Box sx={{ 
            flexGrow: 1,
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            gap: '10px'
          }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{ color: '#fff' }}
                className={activeSection === item[1] ? 'active' : ''}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          {/* Sound toggle - right aligned */}
          <Box sx={{ 
            ml: { sm: 2 },
            marginLeft: 'auto' // Keeps it right-aligned
          }}>
            <IconButton
              color="inherit"
              aria-label="toggle sound"
              edge="end"
              onClick={toggleSound}
            >
              {soundEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toast visible={toastVisible} message={toastMessage} />
    </Box>
  );
}

export default Navigation;