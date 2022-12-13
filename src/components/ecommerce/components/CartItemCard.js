import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increase, Decrease, Delete } from '../Redux/Cart/CartAction';

const CartItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const decrease = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      let cnfrm = window.confirm('Do u want to delete this product??');
      if (cnfrm) {
        dispatch(Delete(item));
      }
      return;
    }
    dispatch(Decrease(id, quantity));
  };

  const increase = (id) => {
    setQuantity(quantity + 1);
    dispatch(Increase(id, quantity));
  };
  return (
    <tr>
      <td>{item.iName}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => decrease(item.id)}> - </button>
        <span> {item.quantity} </span>
        <button onClick={() => increase(item.id)}> + </button>
      </td>
      <td>{item.amount} /-</td>
    </tr>
  );
};

export default CartItemCard;
