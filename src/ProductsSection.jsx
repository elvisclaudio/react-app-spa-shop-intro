
function ProductsSection({ products, addToCart, addProduct, capitalizeFirstLetter }) {

  // function ProductsSection(props) {

  // const { products, addToCart, addProduct, capitalizeFirstLetter } = props;

  // let products = props.products;
  // let addToCart = props.addToCart;
  // let addProduct = props.addProduct;
  // let capitalizeFirstLetter = props.capitalizeFirstLetter;

  // const { theme, user } = useContext(GlobalContext); // Ensure GlobalContext is available

  return (
    <div className="col-md-8">
      <h1 className="text-center">Produse</h1>
      <div className="row" style={{ background: "lightblue" }}>
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 my-2">
            <div className="row">
              <div className="col-md-9 col-12 mx-auto">
                <img src={products[index].url} alt={`image${index}`} className="product-image" />
              </div>
              <div className="col-md-9 col-12 my-2 mx-auto">
                <p className="product-p my-1">{capitalizeFirstLetter(`product ID: ${products[index].id}`)}</p>
                <span className="product-span">{products[index].title}</span>
                <br />
                <span className="product-old-price">{products[index].oldPrice} RON</span>
                <br />
                <span className="product-price">{products[index].price} RON</span>
                <span className="product-cart" onClick={() => addToCart(products[index].id)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  
}



export default ProductsSection;

