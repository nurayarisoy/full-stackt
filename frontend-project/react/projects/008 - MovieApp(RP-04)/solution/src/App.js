import logo from './logo.svg';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/Router';

function App() {
  return (
    
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    
  );
}

export default App;
