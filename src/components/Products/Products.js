import React, { useEffect } from 'react'
import { Container } from 'reactstrap';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Product from '../Product/Product'
import selectIcon from '../../assets/images/green-cat.svg'
import './Products.css'
import * as categoriesActions from '../../redux/actions/categoriesActions'
import * as filterActions from '../../redux/actions/filterActions'
import * as productsActions from '../../redux/actions/productsActions'

const Products = (props) => {

  useEffect(()=>{
    props.actions.getProducts()
  },[props.actions])
  const search = props.search !== '' ? props.search.toLowerCase() : '';
  const { filter } = props;

    return (

      <Container>
        <h6 className='select-category'><img src={selectIcon} alt='select-icon'/>Tüm Kategoriler</h6>
        {props.search!== '' ? <h6 className='search-title'>Sonuçlar <span style={{fontWeight:'bold'}}>{props.search}</span></h6> : '' }
        <div className='products' style={{display:'flex', flexWrap:'wrap'}}>
          { 
          props.products.filter(data =>{
            if(search === "")
              return data
            else if(data.name.toLowerCase().indexOf(search)>=0)
              return data
          }).filter(data =>{
            if(filter === "")
              return data
            else if(filter === data.cat_id)
              return data
            }).map(item=>(
              <Product key={item.id} product={item} />
            ))
          } 
        </div>
      </Container>
    )
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer,
    products: state.productsReducer,
    search: state.searchReducer,
    filter: state.filterReducer
})

const mapDispatchToProps = dispatch => ({ 
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      getCategories: bindActionCreators(categoriesActions.getCategories, dispatch),
      getFilter: bindActionCreators(filterActions.getFilter, dispatch)
    }
})

export default connect (mapStateToProps, mapDispatchToProps)(Products)