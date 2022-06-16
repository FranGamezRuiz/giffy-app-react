import './App.css';
import {Link, Route} from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/">
          <img className='App-logo' alt='Giffy logo' src='logo192.png'/>
        </Link>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Detail}
          path='/gif/:id' 
        />
      </section>
    </div>
  );
}

export default App;
