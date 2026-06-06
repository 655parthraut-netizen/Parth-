import Navbar from './assets/components/Navbar';
import Hero from './assets/components/HeroSection';
import Categories from './assets/components/Categories';
import ProductCards from './assets/components/ProductCards';
import Testimonials from './assets/components/Testimonials';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div style={{ 
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#fafafa',
      color: '#333',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;