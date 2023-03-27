import { useTheme } from "@emotion/react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../themes";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";
import { mockTransactions } from "../../data/mockData";

function Row2() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Grid
        container
        justifyContent="center"
        gap={2}
        marginBottom="10px"
        mt="15px"
      >
        <Grid
          item
          md={7.75}
          sx={1}
          p={matches ? 4 : 2}
          backgroundColor={colors.primary[400]}
          width="100%"
        >
          <Box
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $19,671.58
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px">
            <LineChart isDashboard={true} />
          </Box>
        </Grid>
        <Grid
          item
          md={3.95}
          sx={1}
          backgroundColor={colors.primary[400]}
          width="100%"
          height="400px"
          style={{ overflowX: "hidden", overflowY: "scroll" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Row2;
