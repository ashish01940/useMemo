import logo from './logo.svg';
import './App.css';
import UseMemos from './components/useMemos_useCase1';
import UseMemos_useCase2 from './components/useMemos_useCase2';

function App() {
  return (
    <div className="App">
      <UseMemos />
      <hr />
      <UseMemos_useCase2 />
    </div>
  );
}

export default App;
