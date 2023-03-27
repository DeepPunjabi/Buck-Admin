import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./themes";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
import Settings from "./scenes/settings/Settings";
import { pokemon } from "./data/pokemon";
import Team from "./scenes/team";
import FAQ from "./scenes/faq";

function App() {
  const [marg, setMarg] = useState(false);
  const [theme, colorMode] = useMode();

  const [currePoke, setPoke] = useState(pokemon[0]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar setMarg={setMarg} marg={marg} />
          <main className="content">
            <Topbar setMarg={setMarg} marg={marg} pokemon={currePoke} />
            <Routes>
              <Route path="/" element={<Dashboard marg={marg} />} />
              <Route
                path="/settings"
                element={<Settings setPoke={setPoke} pokemon={currePoke} />}
              />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
