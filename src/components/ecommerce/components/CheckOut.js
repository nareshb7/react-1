import React from 'react'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    let totalAMount= 0
    
    return (
      
            <div style={{width: '25%'}}>
                <h3>Your Cart <span style={{float: 'right', paddingRight: '10px'}}> {cartItems.length} items </span></h3>
                <table cellPadding='10'>
                    <tbody>
                        {/* <tr>
                            <th>Mi Note 10 S </th>
                            <td><span> 2 </span> No's x </td>
                            <td> 14999/- </td>
                            <td colSpan={2}> 14999/- </td>
                        </tr> */}
                        {
                            cartItems.map( (item ,i)=> {
                                totalAMount+=item.amount
                                return (
                                    <tr key={i} >
                                        <td>{item.iName}</td>
                                        <td>{item.quantity} No's x </td>
                                        <td>{item.price} </td>
                                        <td>{item.amount} </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={3}>Total : </td>
                            <td> {totalAMount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default CheckOut