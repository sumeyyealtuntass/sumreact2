import logo from './logo.svg';
import styles from './App.module.css';
import Test from './test.js';
function App() {

return (
  <div className={styles.App}>

    <h3>{process.env.NODE_ENV} </h3>
    <p>
      {process.env.REACT_APP_API_URL}
    </p>
    <Test />
    {process.env.NODE_ENV === "production" && (
      <div> <img src='/logo.svg'></img>
        <img src={logo}></img>
      </div>)}
  </div>
);
}

export default App;
