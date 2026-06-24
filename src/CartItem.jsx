import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  // dammi dentro cart la lista di tutti i prodotti nel carrello
  const cart = useSelector(state => state.cart.items);
  // così posso usare dispatch(azione) direttamente per inviare
  // l'ordine di moifica a redux. 
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    // uso let di solito prima di iniziare un ciclo.
    // la variabile verrà continuamente sovrascritta.
      let total = 0;
      cart.forEach(item => {
          const {quantity, cost} = item;
          const costAsNumber = parseFloat(cost.substring(1)) * quantity;
          total += costAsNumber;
      });
      return total;
  };

  // action for a button to go back to the products page
  // la funzione onContinueShopping viene ereditata dalla parent class
  // ProductList.jsx.
  const handleContinueShopping = (e) => {
      e.preventDefault(); //Blocca il comportamento predefinito del pulsante.
      onContinueShopping(e); // esegue davvero la funzione passandogli l'evento.
  };

  const handleIncrement = (item) => {
    //redux fa un'operazione di traduzione quindi qui alla funzione updateQuantity 
    // che prenderebbe state e action come argomenti, do solo l'oggetto come paramentro.
    // quindi chiamo il dispatch su di lei, passandogli l'item.
    dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({name: item.name, quantity: item.quantity - 1}));
    } else {
      dispatch(removeItem(item));
    } 
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item = SUBTOTAL
  const calculateTotalCost = (item) => {
    const costAsNumber = parseFloat(item.cost.substring(1));
    return costAsNumber * item.quantity;
  };

  const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


