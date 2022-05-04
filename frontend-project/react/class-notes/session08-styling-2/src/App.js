import { createTheme, ThemeProvider } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import './App.css';
import AppBarComp from './components/material-ui/app-bar/AppBarComp';
import Buttons from './components/material-ui/buttons/Buttons';
import Cards from './components/material-ui/cards/Cards';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';
import StyledButton from './components/material-ui/styled-button/StyledButton';
import TextFieldComp from './components/material-ui/text-field/TextFieldComp';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: green[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp />
      <div className="App">
        <header className="App-header">
          {/* <StyledComponents /> */}
          <StyledButton />
          <Cards />
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
