import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; // option 1
    // const{cart} = props; // option


    console.log({cart});


    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
    /**simple solution by using if 
     * 
     * if(priduct.quantity === 0){
     *   poduct .quantity = 1;
     * }
     */
        product.quantity = product.quantity || 1;    /**short-cut solution*/

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
             <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                   <span> Clear Cart</span>
                 <FontAwesomeIcon  icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;


