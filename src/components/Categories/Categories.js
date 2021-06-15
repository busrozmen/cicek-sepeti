import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import catIcon from '../../assets/images/cat-icon.svg'
import './Categories.css'
import * as categoriesActions from '../../redux/actions/categoriesActions'
import * as filterActions from '../../redux/actions/filterActions'

const Categories = (props) => {

  useEffect(()=>{
    props.actions.getCategories()
  },[props.actions])

  const setFilter = (filter) => {
    props.actions.getFilter(filter)
  }

    return (
      <>
      <Container>
        <Breadcrumb>
            <BreadcrumbItem><a href='/#' alt='breadcrumb'>Çiçeksepeti Market</a></BreadcrumbItem>
            <BreadcrumbItem><a href='/#' alt='breadcrumb'>İstanbul</a></BreadcrumbItem>
            <BreadcrumbItem active>{props.search.length >0 ? props.search : 'CiceksepetiBreadCrumb'}</BreadcrumbItem>
        </Breadcrumb>
      </Container>  
      <Container>
      <h4 className='categories-title'><img src={catIcon} alt='cat-icon'/>Kategoriler</h4>
      <div className='categories'>
      <div className={`categories__item ${props.filter==='' ? 'active' : ''}`} onClick={() => setFilter('')}> 
          <span>Tüm Kategoriler</span>
      </div>
      {
        props.categories.map(item=>(
          <div key={item.id} className={`categories__item ${props.filter===item.id ? 'active' : ''}`}  onClick={() => setFilter(item.id)}>
            <span>{item.name}</span>
        </div>
        ))
      }       
      </div>
      </Container>
      </>
    )
}


const mapStateToProps = state => ({
    categories: state.categoriesReducer,
    search: state.searchReducer,
    filter: state.filterReducer
})

const mapDispatchToProps = dispatch => ({ 
    actions: {
      getCategories: bindActionCreators(categoriesActions.getCategories, dispatch),
      getFilter: bindActionCreators(filterActions.getFilter, dispatch)
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(Categories)