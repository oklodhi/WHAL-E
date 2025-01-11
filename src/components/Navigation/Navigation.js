import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
} from "@mui/material";  // Changed from '@material-ui/core' to '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";  // Fixed incorrect path
import HomeIcon from "@mui/icons-material/Home";  // Fixed incorrect path
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import HelpIcon from "@mui/icons-material/Help";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuizIcon from "@mui/icons-material/Quiz";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";  // Use styled instead of makeStyles

// Replace useStyles with styled components
const StyledFab = styled(Fab)(({ theme }) => ({
  borderRadius: "0",
  position: "fixed",
  top: "10px",
  left: "5px",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Navigation = ({ showFab = true }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    {
      text: "News",
      icon: <NewspaperOutlinedIcon />,
      path: "/space-news",
    },
    {
      text: "Map",
      icon: <GpsFixedOutlinedIcon />,
      path: "/map",
    },
    {
      text: "Missions",
      icon: <RocketLaunchOutlinedIcon />,
      path: "/space-missions",
    },
    {
      text: "About",
      icon: <HelpIcon />,
      path: "/about",
    },
    {
      text: "Sponsors",
      icon: <AttachMoneyIcon />,
      path: "/sponsors",
    },
    {
      text: "Astronomy Quiz",
      icon: <QuizIcon />,
      path: "/quiz",
    },
    {
      text: "Lunar Calendar",
      icon: <DarkModeIcon />,
      path: "/calendar",
    },
  ];

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} component={Link} to={path}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {showFab ? (
        <StyledFab
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </StyledFab>
      ) : (
        <MenuIcon aria-label="menu" onClick={toggleDrawer(true)} />
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Navigation;
