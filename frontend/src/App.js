import './App.css';

const numbers = [1, 2, 3, 4, 5];

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
