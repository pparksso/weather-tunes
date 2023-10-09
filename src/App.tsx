import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@s/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import thema from '@s/thema';
import Home from '@p/Home';
import Login from '@p/Login';
import Detail from '@p/Detail';

function App() {
  return (
    <ThemeProvider theme={thema}>
      <Reset />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/music" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
