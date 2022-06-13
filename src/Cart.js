import React from 'react'
import {useCart} from 'react-use-cart';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        priceTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    if(isEmpty) return <h1 className='py-7 container tex-center'>Your Cart is Empty</h1>
  return (
      <section className="py-4 container">
    <div className="row justify-content-center">
        <div className=" col-12">
            <h5> cart ({totalUniqueItems}) Total Items:({totalUniqueItems})</h5>
             <table className="table table-light table-hover m-0">
                 <tbody>
                {items.map((item,index)=>{
                    return (
                    <tr key ={index}>
                        <td>
                            <img src={item.img} style ={{height: '6rem'}}/>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        
                        <td>
                        <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                         
                            {item.quantity}
                            <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                            </td>
                        
                        <td>
                            
                            {item.price*item.quantity}
                            <button className='btn btn-danger ms-2' onClick={()=>  removeItem(item.id)}>Remove Item</button>
                        </td>
                    </tr>
                    )
                })} 
                </tbody>
             </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total Price =₹ {cartTotal}</h2>
        </div>
        <div className='col-auto'>
            <button className='btn-danger' onClick={()=>emptyCart()}> Delete cart</button>
            <button className='btn-primary ms-2'>Buy Now</button>
        </div>
    </div>
    </section>
  )
}

export default Cart
