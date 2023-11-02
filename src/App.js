import logo from './logo.svg';
import './App.css';
import Banner from './component/banner';
import Header from './component/header';
import Container from './component/container';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
