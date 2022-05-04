import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './component/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <main>
        <Routes>
          <Route path='/' element={ <Navigate to='/welcome' /> }/>
          <Route path='/welcome/*' element={<Welcome/>}>
            <Route path='new-user' element={<p>Welcome new user!</p>} />
          </Route>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
