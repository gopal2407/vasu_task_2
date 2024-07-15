import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './Routes/AppRoutes';

function App() {
  return ( 
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
