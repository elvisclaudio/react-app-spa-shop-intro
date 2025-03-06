import ProductForm from './ProductForm';
import ProductsSection from './ProductsSection';

 
function Home(props) {

  let {addProduct, products, addToCart, capitalizeFirstLetter} = props;
  return (

      <>
      <h2 className="text-center">Acasă</h2>

      <div className="container-fluid mt-5 pb-3">
        <div className="row">
          <div className="col-md-2">
            <ProductForm addProduct={addProduct} />
          </div>
          <ProductsSection products={products} addToCart={addToCart} addProduct={addProduct} capitalizeFirstLetter={capitalizeFirstLetter} />
        </div>
      </div>

      </>

  
  );

}

export default Home;
