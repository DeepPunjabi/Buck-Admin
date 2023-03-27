import { useTheme } from "@emotion/react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { tokens } from "../../themes";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Row1 from "../../components/dashboard rows/Row1";
import Row2 from "../../components/dashboard rows/Row2";
import styles from "./dashboard.module.css";

function Dashboard(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Box p={2.5}>
        <Box
          mb="30px"
          display={matches ? "flex" : "block"}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box>
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              DASHBOARD
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
              Welcome to Dashboard
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>
        <Row1 />
        <Row2 />
      </Box>
      <div className={styles.runner}></div>
    </>
  );
}

export default Dashboard;
