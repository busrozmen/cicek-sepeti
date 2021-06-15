import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Categories />
        <Products />
        <Footer />
    </div>
  );
}

export default App;
