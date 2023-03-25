import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme  } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from './component/layout/layout';
import { Content } from './component/content/content';
import { SnippetConverter } from './component/snippet-converter/snippet-converter';
function App() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout child={<Content child={<SnippetConverter/>}/>} />
    </ThemeProvider>
    );
}

export default App;
