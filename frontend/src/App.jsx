import { Box, Stack } from '@mui/material';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AuthProvider from 'react-auth-kit';

import { BrowserRouter } from 'react-router-dom';
import createStore from 'react-auth-kit/createStore';
import RequireAuth from '@auth-kit/react-router/RequireAuth';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'http:',
});

function App() {
  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <Box
          sx={{
            backgroundColor: 'pink',
            minHeight: '100vh',
            minWidth: '100vw',
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth fallbackPath={"/login"}>
                
                  <HomePage />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth fallbackPath={"/login"}>
                
                  <Dashboard></Dashboard>
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
