
import Heading from './components/Header.js';
import Banner from './components/Banner.js';
import Collection from './components/Collection.js';
import Exclusive_product from './components/Exclusive_Products.js';
import Summer_collection from './components/Summer_collection.js';
import Feature_product from './components/Feature_product.js';
import Footer from './components/Footer.js';



function App() {
  return (

    <>
      <Heading />
      <Banner />

      
      <div className="main_content">
       <Collection />
        <Exclusive_product />
        <Summer_collection />
        <Feature_product />
      </div>
      <Footer />
    </>
  )
};

export default App;
