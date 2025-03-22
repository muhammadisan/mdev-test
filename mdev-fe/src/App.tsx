import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch, FormControlLabel, Box, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './pages/Home';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #ddd' }}>
        <Typography variant="h6">MDev Test</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleToggle}
              icon={<Brightness7Icon sx={{ fontSize: '19px' }} />}
              checkedIcon={<Brightness4Icon sx={{ fontSize: '19px' }} />}
            />
          }
          label=""
        />
      </Box>
      <Home />
    </ThemeProvider>
  );
}
