import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const AppRouter = () => {
    
    return(
        <Router>
        <Navbar />
        <Routes>
            <Route   path='/' element={<Main />} />
            <Route   path='/login' element={<Login />} />
            <Route   path='/register' element={<Register />} />
        </Routes>

        </Router>
    )
}
export default AppRouter;