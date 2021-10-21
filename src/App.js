import './App.css';
import Routes from './routes/Routes'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  
  return (
    <div className="App">
      <div className="app-header">
        <Header/>
      </div>
      <div className="app-body">
        <Routes/>
      </div>
      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
