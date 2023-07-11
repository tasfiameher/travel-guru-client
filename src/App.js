
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import AuthProvider from './contexts/AuthProvider/AuthProvider';



function App() {
  return (
    <div >
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>


    </div>
  );
}

export default App;
