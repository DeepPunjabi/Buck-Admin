import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { tokens } from "../../themes";
import styles from "./settings.module.css";
import { pokemon } from "../../data/pokemon";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  pokemon: {
    "&:hover": {
      marginBottom: "20px",
    },
  },
  arrow: {
    position: "relative",
    top: 0,
    transition: "top ease 0.5s",
    "&:hover": {
      top: "-20px",
    },
  },
});

function Settings(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matches = useMediaQuery("(min-width:700px)");
  const classes = useStyles();

  return (
    <>
      {matches && (
        <Box mt="40px">
          <div className={styles.pokemon}>Pokémon</div>
          <div className={styles.centeron}>
            <div className={styles.pokeball}>
              <div className={styles.pokeballb}></div>
            </div>
          </div>
        </Box>
      )}
      <Box
        p={3}
        mt="20px"
        display="flex"
        justifyContent={matches ? "" : "center"}
      >
        <Typography
          variant={matches ? "h3" : "h5"}
          color={colors.greenAccent[400]}
        >
          Select a Pokemon Status
        </Typography>
      </Box>
      <Box p={2}>
        <Grid container display={"flex"} justifyContent="center">
          {pokemon.map((poke, ind) => {
            return (
              <>
                <Grid item className={classes.arrow}>
                  <Box
                    className={classes.pokemon}
                    p={"5px"}
                    m={"2px"}
                    component={"img"}
                    key={ind}
                    src={poke.img}
                    onClick={() => {
                      props.setPoke(poke);
                    }}
                    sx={{ height: "60px", width: "70px", cursor: "pointer" }}
                    border={
                      poke.name === props.pokemon.name ? "1px solid white" : ""
                    }
                  ></Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Settings;
