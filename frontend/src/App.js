import React from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5];
const url = "https://localhost:3003/users"
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);


useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      // Nota: es importante manejar errores aquí y no en 
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

function App() {
  return (
    <div className="rooms-main">
      <header></header>
      <section className="rooms-main__photo"></section>
      <div className="rooms-options__container">
        <p className="rooms-options__title">Reserve title</p>
        <ul className="rooms-options__list-container">
          <li className="rooms-options__option">
            <img src="/assets/imgs/home-icon.png"
              className="rooms-options__option-icon option-head-icon head-icon" />
            <div className="rooms-options__option-body">
              <span className="rooms-options__option-line line-1">{numbers[1]}</span>
              <span className="rooms-options__option-line line-2">hola 2</span>
              <span className="rooms-options__option-line line-3">hola 3</span>
            </div>
            <img className="rooms-options__option-icon check-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
