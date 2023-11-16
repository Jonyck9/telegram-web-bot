import { totalPrice } from '../../units/total-price';
import Button from '../button/button';
import './cart.css';

const Cart = ({cartItems, onCheckOut}) => {
    return <div className='cart_container'>
        <p>Umumiy narxi: {totalPrice(cartItems).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}</p>

        <Button 
        title={`${
            cartItems.length === 0 ? 'Buyurtma berish': 'To`lov' }`}
            disable={cartItems.length === 0 ? true : false}
        
        type = {'checkout'}
        onClick= {onCheckOut}
        />
        </div>
};

export default Cart;