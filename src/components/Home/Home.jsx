import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import  toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts)

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
           toast('You have already added this t-shirt')
        }
        else{
            const newcart = [...cart, tshirt];
            setCart(newcart);
        }
       

    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);

    }


    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt => <TShirt
                 key={tshirt._id}
                 tshirt={tshirt}
                 handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;