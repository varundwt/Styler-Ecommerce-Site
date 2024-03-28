import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  
    return (
    <div className='productdisplay'>
        <div className ="productdisplay-left">
            <div className='productdisplay-img-list'>
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className ="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt='star'/>
                <img src={star_icon} alt='star'/>
                <img src={star_icon} alt='star'/>
                <img src={star_icon} alt='star'/>
                <img src={star_dull_icon} alt='star'/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>                
            </div>
            <div className='productdisplay-right-description'>
            This is so much more than a classic Sweat Shirt. A timeless cut and iconic PUMA branding are coupled with sustainable cotton and recycled polyester fabrics, so you can strut the streets in style - and with a clear eco-conscience.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>   
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay;