import React from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import './Product.css'
import notFound from '../../assets/images/notfound.png'
import {addToBasket} from '../../redux/actions/basketActions'

const Product = (props) => {
  const { product } = props;

  const addToBasket = () => {
    props.addToBasket(product)
  }
    return (
      <div className='product product__card'>
        <div className='product__image-wrapper'>
        <img src={product.photo ? product.photo : notFound} alt='product-image' />
        </div>
        <div className='product__info'>
          <p className='product__name'>{product.name}</p>
          <p className='product__badge'>{product.free_delivery ? 'Ücretsiz Teslimat' :''}</p>
          <p className='product__price'>{product.price}</p>
        </div>
        <div className='product__add-to-basket'>
        <Button onClick={() => addToBasket()}>Sepete Ekle</Button>
        </div>
      </div>
    )
}

const mapDispatchToProps= (dispatch)=>{
  return{
      addToBasket: (product) => {dispatch(addToBasket(product))}
  }
}
export default connect (null, mapDispatchToProps)(Product)