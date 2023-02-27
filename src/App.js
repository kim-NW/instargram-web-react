/* routes */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import routes from './routes';

/* styled-component */
import { ThemeProvider } from 'styled-components';

/* apollo - reactive variables */
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar, darkModeVar } from './apollo';
import { ligtTheme, darkTheme, GlobalStyles } from './styles';
import Header from 'components/Header';
import Layout from 'components/Layout';


function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : ligtTheme}>
      <GlobalStyles />
      <Router>
        <Routes>

          <Route path={routes.home} element={isLoggedIn ? <Layout><Home /></Layout> : <Login />} />
          <Route path={routes.profile} element={<Layout><Profile /></Layout>} />
          <Route path={routes.signup} element={isLoggedIn ? null : <SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
