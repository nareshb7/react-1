import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyCart } from '../Redux/Cart/CartAction';
const Bill = (props) => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    fName,
    lName,
    email,
    mNumber,
    adrs1,
    adrs2,
    city,
    state,
    pMode,
    zCode,
  } = JSON.parse(param.obj);
  //const { fName, lName, email, mNumber, adrs1, adrs2, city, state, pMode, zCode } = JSON.parse(props.obj)
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const printFunc = () => {
    document.body.style.visibility = 'hidden';
    document.getElementById('page').style.visibility = 'visible';
    window.print();
    dispatch(EmptyCart());
    navigate('/ecom/page1');
    document.body.style.visibility = 'visible';
  };
  let total = 0;
  const date = new Date().toLocaleString();
  let items = 0;
  let quantity = 0;
  let iGst;

  return (
    <div>
      <div
        style={{
          width: '35%',
          margin: 'auto',
          border: '1px dashed #888',
          padding: '5px',
          fontFamily: 'monospace',
        }}
        id="page"
      >
        <h1 style={{ textAlign: 'center' }}>Trend Shopping Bill </h1>
        <span style={{ textAlign: 'end', display: 'block' }}>{date}</span>
        <div>
          <span style={{ padding: '5px' }}>
            Name :{' '}
            <em>
              {' '}
              {fName} {lName}
            </em>
          </span>
          <div style={{ padding: '5px' }}>
            Email : <em> {email}</em>{' '}
            <span style={{ float: 'right' }}>
              Mobile: <em>{mNumber} </em>
            </span>
          </div>
          <address style={{ padding: '5px' }}>
            <strong> Address</strong> : {adrs1}, {adrs2},{city}, {state}-{zCode}
          </address>
          <span style={{ padding: '5px' }}>
            Payment Mode : <em>{pMode}</em>
          </span>
        </div>
        <div>
          <table style={{ textAlign: 'center' }}>
            <thead style={{ border: '1px dotted #f00' }}>
              <tr className="billTable">
                <th>Sl. No</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item, i) => {
                total += item.amount;
                items = i + 1;
                quantity += item.quantity;
                return (
                  <tr key={item.id}>
                    <td>{i + 1}.</td>
                    <td>{item.iName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity} </td>
                    <td>{item.amount} /-</td>
                  </tr>
                );
              })}
              <tr className="billTable">
                <td>Items </td>
                <td>-{items} </td>
                <td>Quantity</td>
                <td>- {quantity}</td>
                <th>Total: {total}/-</th>
              </tr>
              <tr className="billTable">
                <td>IGST</td>
                <td>-18%</td>
                <td>{(iGst = Number(((total / 100) * 18).toFixed(0)))}/-</td>
                <th>Payable Amount: </th>
                <th>Rs.{total + iGst}/-</th>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            *** Thank You Visit Again ***
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        {' '}
        <button onClick={printFunc} className="button">
          {' '}
          Print{' '}
        </button>
      </div>
    </div>
  );
};

export default Bill;
