import { useEffect, useState } from 'react';
import './Shop.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, } from "@fortawesome/free-solid-svg-icons";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('/public/products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    }, []);


useEffect(() =>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1:  get id of the addedProduct
    for(const id in storedCart){
        //step 2:  get product from products state by using id
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            //step 3: add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step 4: add the added product to the saved cart
            savedCart.push(addedProduct);
        }
        // console.log('added product', addedProduct);
    }
    // step 5: set the cart
    setCart(savedCart)
}, [products])


    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];


         setCart(newCart);
         addToDb(product.id)
       }


       const handleClearCart = () => {
            setCart([]);
            deleteShoppingCart();
       }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product ={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product> )
                 }
            </div>
            <div className="cart-container">
               <Cart 
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proced-link' to="/orders">
                        <button className='btn-proced'>
                            <span>Review Order</span>
                            <FontAwesomeIcon  icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;



 