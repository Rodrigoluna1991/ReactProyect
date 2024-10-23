// src/App.jsx

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        </div>
    );
};

export default App;
