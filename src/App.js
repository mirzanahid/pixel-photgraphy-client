import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="App">


<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
