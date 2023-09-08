import './App.css';
import Login from './components/login/Login';

function App() {
  const a = 1;
  const b = 2;
  return (
    <div className='App'>
      <h1 data-testid='mytestid'>Hello</h1>
      <ul>
        <li>Banana</li>
        <li>Orange</li>
        <li>Apple</li>
      </ul>
      <span title='sum'>{a + b}</span>
      {/* <Login /> */}
    </div>
  );
}

export default App;
