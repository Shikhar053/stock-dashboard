import './App.css';
import Dashboard from './components/Dashboard.js';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkmode, setDarkMode }}>
      <Dashboard/>
    </ThemeContext.Provider>
  );
   
}

export default App;
