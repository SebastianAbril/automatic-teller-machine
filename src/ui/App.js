import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainScreen } from './screens/MainScreen/MainScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <Footer />
    </div>
  );
}

export default App;
