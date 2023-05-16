import './App.css';
import './css/style.css'
import { WeaterProvider } from './context/weathercontex';
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <WeaterProvider>
        <Container />
      </WeaterProvider>
    </div>
  );
}

export default App;
