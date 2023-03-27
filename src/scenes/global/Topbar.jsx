import {
  Box,
  IconButton,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../themes";
import { useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./topbar.module.css";
import { Cancel } from "@mui/icons-material";

const Topbar = (props) => {
  const history = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const matches = useMediaQuery("(min-width:700px)");
  const [clicked, setClicked] = useState(false);

  console.log(props);

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={clicked}
        onClose={() => {
          setClicked(false);
        }}
        transitionDuration={2000}
        disableBackdropTransition={true}
      >
        <Box width={"300px"}>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent="space-between"
            p={3}
          >
            <Typography variant="h4">Notifications</Typography>
            <IconButton
              onClick={() => {
                setClicked(false);
              }}
            >
              <Cancel />
            </IconButton>
          </Box>
        </Box>
      </SwipeableDrawer>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          marginLeft={matches ? "0px" : "30px"}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <Box
            component="img"
            className={styles.char}
            // sx={{ background: `url(${props.pokemon.img})` }}
            src={props.pokemon.img}
          ></Box>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              history("/settings");
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
