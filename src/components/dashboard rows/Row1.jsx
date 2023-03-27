import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { tokens } from "../../themes";
import ProgressCircle from "../ProgressCircle";
import TrafficIcon from "@mui/icons-material/Traffic";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Row1() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Grid container justifyContent="center" gap={3} marginBottom="10px">
        <Grid
          item
          md={2.8}
          sx={1}
          p={3}
          backgroundColor={colors.primary[400]}
          width="100%"
        >
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: colors.grey[100] }}
                >
                  42,135
                </Typography>
              </Box>
              <Box>
                <ProgressCircle progress="0.50" />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Emails Sent
              </Typography>
              <Typography
                variant="h5"
                fontStyle="italic"
                sx={{ color: colors.greenAccent[600] }}
              >
                +23%
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Grid>

        <Grid
          item
          md={2.8}
          sx={1}
          p={3}
          backgroundColor={colors.primary[400]}
          width="100%"
        >
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: colors.grey[100] }}
                >
                  22,857
                </Typography>
              </Box>
              <Box>
                <ProgressCircle progress="0.430" />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Sales Obtained
              </Typography>
              <Typography
                variant="h5"
                fontStyle="italic"
                sx={{ color: colors.greenAccent[600] }}
              >
                +23%
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Grid>

        <Grid
          item
          md={2.8}
          sx={1}
          p={3}
          backgroundColor={colors.primary[400]}
          width="100%"
        >
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: colors.grey[100] }}
                >
                  25,498
                </Typography>
              </Box>
              <Box>
                <ProgressCircle progress="0.80" />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                New clients
              </Typography>
              <Typography
                variant="h5"
                fontStyle="italic"
                sx={{ color: colors.greenAccent[600] }}
              >
                +63%
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Grid>
        <Grid
          item
          md={2.8}
          sx={1}
          p={3}
          backgroundColor={colors.primary[400]}
          width="100%"
        >
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: colors.grey[100] }}
                >
                  3,25,134
                </Typography>
              </Box>
              <Box>
                <ProgressCircle progress="0.69" />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Traffic Received
              </Typography>
              <Typography
                variant="h5"
                fontStyle="italic"
                sx={{ color: colors.greenAccent[600] }}
              >
                +43%
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Row1;
